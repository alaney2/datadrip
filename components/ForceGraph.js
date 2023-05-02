import React, { useRef, useEffect } from 'react';
import ForceGraph3D from '3d-force-graph';

const ForceGraph = ({ data }) => {
  const containerRef = useRef();

  useEffect(() => {
    if (!containerRef.current || !data) return;
  
    const myGraph = ForceGraph3D();
    myGraph(containerRef.current).graphData(data);
  
  }, [containerRef, data]);
  
  return <div ref={containerRef} style={{ width: '100%', height: '100%' }} />;
};

export default ForceGraph;
