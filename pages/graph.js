import React from 'react';
import dynamic from 'next/dynamic';
import NavBar from "@/components/NavBar/NavBar";
import Head from "next/head";
import SkipLink from '@/components/SkipLink';
import BackToTop from '@/components/PageContent/BackToTop';
import Box from '@mui/material/Box';
import wikiConnections from '@/wiki-connections.json';
const ForceGraph = dynamic(() => import('../components/ForceGraph'), { ssr: false });
const ForceGraphUrl = dynamic(() => import('../components/ForceGraphUrl'), { ssr: false });

const Graphology = require('graphology');
const louvain = require('graphology-communities-louvain');

function clusterAndTransformTopics(inputData) {
  let nodes = [];
  let links = [];
  const edgeSet = new Set();

  for (const key in inputData) {
    const item = inputData[key];
    nodes.push({ id: item.title, degree: 0 });
    item.prerequisites.forEach(prerequisiteKey => {
      if (inputData[prerequisiteKey]) {
        const source = inputData[prerequisiteKey].title;
        const target = item.title;
        const edgeKey = `${source}-${target}`;

        if (!edgeSet.has(edgeKey)) {
          edgeSet.add(edgeKey);
          links.push({ source, target, rotation: 0.8 });
        }
      }
    });

    item.further_readings.forEach(furtherReadingKey => {
      if (inputData[furtherReadingKey]) {
        const source = item.title;
        const target = inputData[furtherReadingKey].title;
        const edgeKey = `${source}-${target}`;

        if (!edgeSet.has(edgeKey)) {
          edgeSet.add(edgeKey);
          links.push({ source, target, rotation: 0.8 });
        }
      }
    });
  }

  const graph = new Graphology({ multi: true });

  const nodeIndexLookup = {};
  nodes.forEach((node, index) => {
    nodeIndexLookup[node.id] = index;
  });

  const updatedLinks = links.map(({ source, target }) => ({
    source: nodeIndexLookup[source],
    target: nodeIndexLookup[target],
  }));

  nodes.forEach((node, index) => {
    graph.addNode(index, { label: node.id });
  });

  updatedLinks.forEach(({ source, target }) => {
    graph.addEdge(source, target);
  });
  
  graph.forEachNode((node, attributes, index) => {
    const nodeId = attributes.label;
    nodes[nodeIndexLookup[nodeId]].degree = graph.degree(node);
  });
  // Remove unconnected nodes based on their degree in the graph
  graph.forEachNode((node, attributes, index) => {
    if (graph.degree(node) === 0) {
      graph.dropNode(node);
      delete nodeIndexLookup[attributes.label];
    }
  });


  // Update nodes array to only include connected nodes
  nodes = nodes.filter(node => nodeIndexLookup.hasOwnProperty(node.id));
  // Run the Louvain algorithm to find communities (clusters)
  const communities = louvain(graph);
  nodes.forEach((node, index) => {
    node.group = communities[nodeIndexLookup[node.id]];
  });
  // Update links array to only include links with connected nodes
  links = links.filter(link => nodeIndexLookup.hasOwnProperty(link.source) && nodeIndexLookup.hasOwnProperty(link.target));

  return { nodes, links };
}


export default function Graph() {
  const transformedData = clusterAndTransformTopics(wikiConnections);

  return (
    <>
      <Head>
        <title>Graph</title>
      </Head>
      <main>
        <Box sx={{ }}>
          <NavBar />
          {/* <ForceGraph data={data} /> */}
          <ForceGraphUrl data={transformedData} />
          <BackToTop />
        </Box>
      </main>
    </>
  );
}

