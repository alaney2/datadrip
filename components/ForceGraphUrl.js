import React, { useRef, useEffect, useState } from 'react';
import ForceGraph3D from '3d-force-graph';
import { useTheme } from '@mui/material/styles';
import SpriteText from 'three-spritetext';
import * as THREE from 'three';
import * as d3 from 'd3';


function modifyNodeColor(color) {
  const modifiedColor = d3.color(color);
  modifiedColor.opacity = 0.8;
  modifiedColor.r = Math.min(modifiedColor.r + 50, 255);
  modifiedColor.g = Math.min(modifiedColor.g + 50, 255);
  modifiedColor.b = Math.min(modifiedColor.b + 50, 255);
  return modifiedColor.toString();
}

const ForceGraphUrl = ({ data }) => {
  const containerRef = useRef();
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';
  let backgroundColor = '#8e8e8e';
  if (isDarkMode) {
    backgroundColor = theme.palette.background.default;
  } else {
    backgroundColor = '#807977';
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

  const highlightNodes = useRef(new Set());
  const highlightLinks = useRef(new Set());
  const clickedNodes = useRef(new Set());

  const hoverHighlightNodes = useRef(new Set());
  const hoverHighlightLinks = useRef(new Set());

  useEffect(() => {
    if (!containerRef.current || !data) return;

    let hoverNode = null;
    const minDegree = Math.min(...data.nodes.map(n => n.degree));

    const Graph = ForceGraph3D()
      (containerRef.current)
      .graphData(data)
      .nodeLabel('id')
      .nodeRelSize(120)
      .backgroundColor(backgroundColor)
      .height('100px')
      .nodeAutoColorBy('group')

      .onNodeClick(node => {
        const distance = 690;
        const distRatio = 1 + distance / Math.hypot(node.x, node.y, node.z);
        const newPos = node.x || node.y || node.z
          ? { x: node.x * distRatio, y: node.y * distRatio, z: node.z * distRatio }
          : { x: 0, y: 0, z: distance }; // special case if node is in (0,0,0)
        Graph.cameraPosition(
          newPos, 
          node, // lookAt ({ x, y, z })
          2500  // ms transition duration
        );

        const clickedGroup = Graph.scene().getObjectByName(`NodeGroup_${node.id}`);

        if (clickedNodes.current.has(node)) {
          node.group.sphere.material.color = new THREE.Color(node.color);
          node.neighbors.forEach(neighbor => {
            highlightNodes.current.delete(neighbor);
            console.log(neighbor.group);

            neighbor.group.sphere.material.transparent = true;
            neighbor.group.sphere.material.opacity = 0.75;
          });
          node.links.forEach(link => highlightLinks.current.delete(link));
          clickedNodes.current.delete(node);
          clickedGroup.sprite.visible = false;
        } else {
          node.neighbors.forEach(neighbor => {
            highlightNodes.current.add(neighbor);
            neighbor.group.sphere.material.transparent = false;
            neighbor.group.sphere.material.opacity = 1;
          });
          console.log(node.group)
          node.group.sphere.material.color = new THREE.Color('white');
          node.links.forEach(link => highlightLinks.current.add(link));
          clickedNodes.current.add(node);
          clickedGroup.sprite.visible = true;
        }

        Graph
          .nodeColor(node => node.color)
          .linkWidth(link => highlightLinks.current.has(link) ? 4 : 2)
          .linkDirectionalParticles(link => highlightLinks.current.has(link) ? 4 : 0);
      })

      .nodeThreeObject(node => {
        const group = new THREE.Group();
        group.name = `NodeGroup_${node.id}`;
        const sizeFactor = 7; 
        const sphereSize = Math.max(sizeFactor * Math.log10(node.degree - minDegree + 1), 1);
        const sphereGeometry = new THREE.SphereGeometry(sphereSize);
        const sphereMaterial = new THREE.MeshLambertMaterial({ 
          color: node.color, 
          transparent: highlightNodes.current.has(node) ? false : true,
          opacity: highlightNodes.current.has(node) ? 1 : 0.75
        });
        const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
        group.add(sphere);
        group.sphere = sphere;

        const sprite = new SpriteText(node.id);
        sprite.material.depthWrite = false;
        sprite.color = 'white';
        sprite.textHeight = 8;
        sprite.visible = clickedNodes.current.has(node);
        group.add(sprite);
        group.sprite = sprite;
        node.group = group;
        sphereGeometry.dispose();
        sphereMaterial.dispose();
        return group;
      })
      .onNodeHover(node => {
        if ((!node && !hoverHighlightNodes.current.size) || (node && hoverNode === node)) return;
      
        // Remove highlights from previous hover
        hoverHighlightNodes.current.forEach(highlightedNode => {
          // Keep the highlighted neighbors of clicked nodes
          if (!clickedNodes.current.has(highlightedNode)) {
            highlightedNode.group.sphere.material.transparent = true;
            highlightedNode.group.sphere.material.opacity = 0.75;
          }
        });
      
        hoverHighlightNodes.current.clear();
        hoverHighlightLinks.current.clear();
      
        if (node && !(clickedNodes.current.has(node) || highlightNodes.current.has(node))) {
          // Highlight neighbors for the current hover
          node.neighbors.forEach(neighbor => {
            hoverHighlightNodes.current.add(neighbor);
            neighbor.group.sphere.material.transparent = false;
            neighbor.group.sphere.material.opacity = 1;
          });
      
          node.links.forEach(link => hoverHighlightLinks.current.add(link));
        }
      
        hoverNode = node || null;
      
        Graph
          .nodeColor(node => node.color)
          .linkWidth(link => hoverHighlightLinks.current.has(link) || highlightLinks.current.has(link) ? 4 : 2)
          .linkDirectionalParticles(link => hoverHighlightLinks.current.has(link) || highlightLinks.current.has(link) ? 4 : 0);
      })
      
      
      .linkWidth(link => highlightLinks.current.has(link) ? 4 : 2)
      .linkDirectionalParticles(link => highlightLinks.current.has(link) ? 4 : 0)
      .linkOpacity(0.25)
      .linkDirectionalParticleWidth(4)
      .linkDirectionalParticleSpeed(0.005)
      .linkAutoColorBy(d => {
        const sourceNode = getNodeById(data.nodes, d.source);
        return sourceNode ? sourceNode.group : null;
      })
      // .linkAutoColorBy(d => {
      //   const sourceNode = getNodeById(data.nodes, d.source);
      //   return sourceNode ? modifyNodeColor(sourceNode.color) : null;
      // })
      // .linkThreeObject(link => {
      //   if (!link.source.color || !link.target.color) return;
      
      //   const sourceColor = link.source.color;
      //   const targetColor = link.target.color;
      
      //   const sourceRGB = d3.color(sourceColor);
      //   const targetRGB = d3.color(targetColor);
      
      //   const start = new THREE.Vector3(link.source.x, link.source.y, link.source.z);
      //   const end = new THREE.Vector3(link.target.x, link.target.y, link.target.z);
      //   const direction = new THREE.Vector3().subVectors(end, start);
      //   const length = direction.length();
      //   const orientation = new THREE.Matrix4().lookAt(start, end, new THREE.Object3D().up);
      //   const arrowGeom = new THREE.CylinderGeometry(1, 1, length, 4, 4);
      //   const colors = [];
      
      //   for (let i = 0; i < arrowGeom.faces.length; i++) {
      //     colors[i] = (arrowGeom.faces[i].a < arrowGeom.vertices.length / 2) ? sourceRGB : targetRGB;
      //   }
      
      //   arrowGeom.faces.forEach((face, i) => {
      //     face.color = colors[i];
      //   });
      
      //   arrowGeom.computeFaceNormals();
      //   arrowGeom.computeVertexNormals();
      //   arrowGeom.faceVertexUvs[0] = [];
      
      //   arrowGeom.faces.forEach(() => {
      //     arrowGeom.faceVertexUvs[0].push([
      //       new THREE.Vector2(0, 0),
      //       new THREE.Vector2(0, 1),
      //       new THREE.Vector2(1, 1),
      //     ]);
      //   });
      
      //   arrowGeom.applyMatrix4(new THREE.Matrix4().makeTranslation(0, length / 2, 0));
      //   arrowGeom.applyMatrix4(orientation);
      //   const material = new THREE.MeshBasicMaterial({ vertexColors: true, side: THREE.DoubleSide });
      //   const cylinder = new THREE.Mesh(arrowGeom, material);
      
      //   return cylinder;
      // })


      // .onBackgroundClick(() => {
      //   highlightNodes.current.clear();
      //   highlightLinks.current.clear();
      //   clickedNodes.current.clear();
      //   Graph
      //     .nodeColor(node => node.color)
      //     .linkWidth(2)
      //     .linkDirectionalParticles(0);
      // })

      ;

      // Graph.onEngineStop(() => Graph.zoomToFit(400));
      const containerRefCurrent = containerRef.current;
      return () => {
        Graph.pauseAnimation();
        while (containerRefCurrent.firstChild) {
          containerRefCurrent.removeChild(containerRefCurrent.firstChild);
        } 
      };
  }, [containerRef, data, backgroundColor, highlightNodes, highlightLinks, clickedNodes]);

  return <div ref={containerRef} style={{ width: '100%', height: '100%' }} />;
};

export default React.memo(ForceGraphUrl);
// export default ForceGraphUrl;

