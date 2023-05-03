import React, { useRef, useEffect } from 'react';
import ForceGraph3D from '3d-force-graph';
import { useTheme } from '@mui/material/styles';
import SpriteText from 'three-spritetext';
import * as THREE from 'three';


const ForceGraphUrl = ({ data }) => {
  const containerRef = useRef();
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';
  let backgroundColor = '#8e8e8e';
  if (isDarkMode) {
    backgroundColor = theme.palette.background.default;
  } else {
    backgroundColor = '#8e8e8e';
  }
  

  function getNodeById(nodes, id) {
    return nodes.find(node => node.id === id);
  }

  data.links.forEach(link => {
    const a = getNodeById(data.nodes, link.source);
    const b = getNodeById(data.nodes, link.target);
    if (!a || !b) return;
    !a.neighbors && (a.neighbors = []);
    !b.neighbors && (b.neighbors = []);
    a.neighbors.push(b);
    b.neighbors.push(a);

    !a.links && (a.links = []);
    !b.links && (b.links = []);
    a.links.push(link);
    b.links.push(link);
  });

  useEffect(() => {
    if (!containerRef.current || !data) return;
    
    const highlightNodes = new Set();
    const highlightLinks = new Set();
    const clickedNodes = new Set();

    let hoverNode = null;

    const minDegree = Math.min(...data.nodes.map(n => n.degree));

    const Graph = ForceGraph3D()
      (containerRef.current)
      .graphData(data)
      .nodeLabel('id')
      .backgroundColor(backgroundColor)
      .height('100px')
      .nodeAutoColorBy('group')

      .linkAutoColorBy(d => {
        const sourceNode = getNodeById(data.nodes, d.source);
        return sourceNode ? sourceNode.group : null;
      })

      .onNodeClick(node => {
        // Aim at node from outside it
        // const distance = 690;
        // const distRatio = 1 + distance / Math.hypot(node.x, node.y, node.z);

        // const newPos = node.x || node.y || node.z
        //   ? { x: node.x * distRatio, y: node.y * distRatio, z: node.z * distRatio }
        //   : { x: 0, y: 0, z: distance }; // special case if node is in (0,0,0)

        // Graph.cameraPosition(
        //   newPos, // new position
        //   node, // lookAt ({ x, y, z })
        //   2500  // ms transition duration
        // );

        if ((!node && !highlightNodes.size) || (node && hoverNode === node)) return;

        const clickedGroup = Graph.scene().getObjectByName(`NodeGroup_${node.id}`);

        if (clickedNodes.has(node)) {
          // Unhighlight neighbors and hide text
          node.neighbors.forEach(neighbor => {
            highlightNodes.delete(neighbor);
          });
          node.links.forEach(link => highlightLinks.delete(link));
          clickedNodes.delete(node);
          clickedGroup.sprite.visible = false;
        } else {
          // Highlight neighbors
          node.neighbors.forEach(neighbor => {
            highlightNodes.add(neighbor);
          });
          node.links.forEach(link => highlightLinks.add(link));
          clickedNodes.add(node);
          clickedGroup.sprite.visible = true;
        }

        hoverNode = node || null;
        Graph
          .nodeColor(Graph.nodeColor())
          .linkWidth(Graph.linkWidth())
          .linkDirectionalParticles(Graph.linkDirectionalParticles());
      })

      .nodeThreeObject(node => {
        // Create a group to hold the sphere and the label
        const group = new THREE.Group();
        group.name = `NodeGroup_${node.id}`;

        const sizeFactor = 7; 
        const sphereSize = Math.max(sizeFactor * Math.log10(node.degree - minDegree + 1), 1);
        const sphereGeometry = new THREE.SphereGeometry(sphereSize);
        const sphereMaterial = new THREE.MeshLambertMaterial({ 
          color: node.color, 
          transparent: true,
          opacity: 0.75 
        });
        const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
        group.add(sphere);

        const sprite = new SpriteText(node.id);
        sprite.material.depthWrite = false; // make sprite background transparent
        sprite.color = node.color;
        sprite.textHeight = 8;
        sprite.visible = clickedNodes.has(node); // set visibility based on whether the node is clicked
        group.add(sprite);
        // Store the sprite as a property of the group for easier access later
        group.sprite = sprite;
        return group;
      })
      
      .linkWidth(link => highlightLinks.has(link) ? 4 : 1)
      .linkDirectionalParticles(link => highlightLinks.has(link) ? 4 : 0)
      .linkDirectionalParticleWidth(4)
      .linkDirectionalParticleSpeed(0.005)

      // .onNodeHover(node => {
      //   if ((!node && !highlightNodes.size) || (node && hoverNode === node)) return;

      //   highlightNodes.clear();
      //   highlightLinks.clear();
      //   if (node && node.neighbors) {
      //     highlightNodes.add(node);
      //     console.log(node)
      //     node.neighbors.forEach(neighbor => highlightNodes.add(neighbor));
      //     node.links.forEach(link => highlightLinks.add(link));
      //   }

      //   hoverNode = node || null;
      //   Graph
      //     .nodeColor(Graph.nodeColor())
      //     .linkWidth(Graph.linkWidth())
      //     .linkDirectionalParticles(Graph.linkDirectionalParticles())
      // })
      ;

      // Graph.onEngineStop(() => Graph.zoomToFit(400));

  }, [containerRef, data, backgroundColor]);

  return <div ref={containerRef} style={{ width: '100%', height: '100%' }} />;
};

export default ForceGraphUrl;
