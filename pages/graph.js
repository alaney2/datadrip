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
import miserables from '@/miserables.json';

const Graphology = require('graphology');
const louvain = require('graphology-communities-louvain');

function clusterTopicsWithLinks(nodes, links) {
  // Create a new graph
  // const graph = new Graphology();
  const graph = new Graphology({ multi: true });

  const nodeIndexLookup = {};
  nodes.forEach((node, index) => {
    nodeIndexLookup[node.id] = index;
  });

  const updatedLinks = links.map(({ source, target }) => ({
    source: nodeIndexLookup[source],
    target: nodeIndexLookup[target],
  }));
  // Add nodes to the graph
  nodes.forEach((node, index) => {
    graph.addNode(index, { label: node.id });
  });
  // Add edges (connections) to the graph

  updatedLinks.forEach(({ source, target }) => {
    graph.addEdge(source, target);
  });


  // Run the Louvain algorithm to find communities (clusters)
  const communities = louvain(graph);

  // Assign topics to their respective clusters
  // const topicClusters = topics.map((topic, index) => ({
  //   topic: topic.id,
  //   cluster: communities[index],
  // }));

  nodes.forEach((node, index) => {
    node.group = communities[index];
  });

}

function transformData(inputData) {
  let nodes = [];
  let links = [];

  const edgeSet = new Set();

  for (const key in inputData) {
    const item = inputData[key];
    nodes.push({ id: item.title });
    
    item.prerequisites.forEach(prerequisiteKey => {
      if (inputData[prerequisiteKey]) {
        const source = inputData[prerequisiteKey].title;
        const target = item.title;
        const edgeKey = `${source}-${target}`;

        if (!edgeSet.has(edgeKey)) {
          edgeSet.add(edgeKey);
          links.push({ source, target });
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
          links.push({ source, target });
        }
      }
    });
  }
  return { nodes, links };
}


export default function Graph() {
  const transformedData = transformData(wikiConnections);

  clusterTopicsWithLinks(transformedData.nodes, transformedData.links);

  console.log(transformedData)
  return (
    <>
      <Head>
        <title>Graph</title>
      </Head>
      <main>
        <Box sx={{ height: '100vh' }}>
          <NavBar />
          {/* <ForceGraph data={data} /> */}
          <ForceGraphUrl data={transformedData} />
          <BackToTop />
        </Box>
      </main>
    </>
  );
}

