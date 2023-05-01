import React from 'react';
import dynamic from 'next/dynamic';
import NavBar from "@/components/NavBar/NavBar";
import Head from "next/head";
import SkipLink from '@/components/SkipLink';
import BackToTop from '@/components/PageContent/BackToTop';
import Box from '@mui/material/Box';
// import ForceGraph3D from '3d-force-graph';

const ForceGraph = dynamic(() => import('../components/ForceGraph'), { ssr: false });

export default function Graph() {
  const data = {
    nodes: [{ id: 'A' }, { id: 'B' }],
    links: [{ source: 'A', target: 'B' }],
  };
  return (
    <>
      <Head>
        <title>Graph</title>
      </Head>
      <main>
        <Box sx={{ height: '100vh' }}>
          <NavBar />
          <ForceGraph data={data} />
          <BackToTop />
        </Box>
      </main>
    </>
  );
}

