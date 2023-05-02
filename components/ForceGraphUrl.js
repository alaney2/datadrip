import React, { useRef, useEffect } from 'react';
import ForceGraph3D from '3d-force-graph';
import { useTheme } from '@mui/material/styles';
// import useMediaQuery from '@material-ui/core/useMediaQuery';

const ForceGraphUrl = ({ data }) => {
  const containerRef = useRef();
  const theme = useTheme();
  // const isDarkMode = useMediaQuery(theme.breakpoints.down('sm'));
  const isDarkMode = theme.palette.mode === 'dark';
  let backgroundColor = '#8e8e8e';
  if (isDarkMode) {
    backgroundColor = theme.palette.background.default;
  } else {
    backgroundColor = '#8e8e8e';
  }
  // const backgroundColor = theme.palette.background.default;
  useEffect(() => {
    if (!containerRef.current || !data) return;

    const myGraph = ForceGraph3D()
      (containerRef.current)
      .graphData(data)
      .nodeLabel('id')
      .backgroundColor(backgroundColor)
      .nodeAutoColorBy('group')
      .onNodeClick(node => {
        // Aim at node from outside it
        const distance = 250;
        const distRatio = 1 + distance / Math.hypot(node.x, node.y, node.z);

        const newPos = node.x || node.y || node.z
          ? { x: node.x * distRatio, y: node.y * distRatio, z: node.z * distRatio }
          : { x: 0, y: 0, z: distance }; // special case if node is in (0,0,0)

        myGraph.cameraPosition(
          newPos, // new position
          node, // lookAt ({ x, y, z })
          2000  // ms transition duration
        );
      });

  }, [containerRef, data, backgroundColor]);

  return <div ref={containerRef} style={{ width: '100%', height: '100%' }} />;
};

export default ForceGraphUrl;
