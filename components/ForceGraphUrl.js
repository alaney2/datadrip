import React, { useRef, useEffect } from 'react';
import ForceGraph3D from '3d-force-graph';
import { useTheme } from '@mui/material/styles';


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
  
  const highlightNodes = new Set();
  const highlightLinks = new Set();
  let hoverNode = null;

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
    function updateHighlight() {
      // trigger update of highlighted objects in scene
      Graph
      .nodeColor(Graph.nodeColor())
      .linkWidth(Graph.linkWidth())
      .linkDirectionalParticles(Graph.linkDirectionalParticles());
    }
    if (!containerRef.current || !data) return;

    const Graph = ForceGraph3D()
      (containerRef.current)
      .graphData(data)
      .nodeLabel('id')
      .backgroundColor(backgroundColor)
      .nodeAutoColorBy('group')
      // .linkAutoColorBy(d => data.nodes[d.source].group)
      // .linkAutoColorBy(d => getNodeById(data.nodes, d.source).group)
      .linkAutoColorBy(d => {
        const sourceNode = getNodeById(data.nodes, d.source);
        return sourceNode ? sourceNode.group : null;
      })
      .onNodeClick(node => {
        // Aim at node from outside it
        const distance = 250;
        const distRatio = 1 + distance / Math.hypot(node.x, node.y, node.z);

        const newPos = node.x || node.y || node.z
          ? { x: node.x * distRatio, y: node.y * distRatio, z: node.z * distRatio }
          : { x: 0, y: 0, z: distance }; // special case if node is in (0,0,0)

        Graph.cameraPosition(
          newPos, // new position
          node, // lookAt ({ x, y, z })
          2000  // ms transition duration
        );
      })
      // .nodeColor(node => highlightNodes.has(node) ? node === hoverNode ? 'rgb(255,0,0,1)' : 'rgba(255,160,0,0.8)' : 'rgba(0,255,255,0.6)')
      .linkWidth(link => highlightLinks.has(link) ? 4 : 1)
      .linkDirectionalParticles(link => highlightLinks.has(link) ? 4 : 0)
      .linkDirectionalParticleWidth(4)
      .linkDirectionalParticleSpeed(0.005)
      .onNodeHover(node => {
        // no state change
        if ((!node && !highlightNodes.size) || (node && hoverNode === node)) return;

        highlightNodes.clear();
        highlightLinks.clear();
        if (node && node.neighbors) {
          highlightNodes.add(node);
          console.log(node)
          node.neighbors.forEach(neighbor => highlightNodes.add(neighbor));
          node.links.forEach(link => highlightLinks.add(link));
        }

        hoverNode = node || null;

        updateHighlight();
      })
      .onLinkHover(link => {
        highlightNodes.clear();
        highlightLinks.clear();

        if (link) {
          highlightLinks.add(link);
          highlightNodes.add(link.source);
          highlightNodes.add(link.target);
        }
        updateHighlight();
      })
      ;

  }, [containerRef, data, backgroundColor]);

  return <div ref={containerRef} style={{ width: '100%', height: '100%' }} />;
};

export default ForceGraphUrl;
