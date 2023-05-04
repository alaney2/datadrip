import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { Card, CardContent, Typography, Box } from '@mui/material';
import NavBar from '@/components/NavBar/NavBar';
import wikiConnections from '@/wiki-connections.json';
import Link from 'next/link';
import SkipLink from '@/components/SkipLink';
import path from 'path';
import fs from 'fs';
import { shuffleArray } from '@/components/utilities';
import { getArticleDescription } from '@/components/utilities';
import BackToTop from '@/components/PageContent/BackToTop';
import Looper from '@/components/Looper';
import { styled } from '@mui/system';


const MAX_ARTICLES = 24;

export async function getStaticProps() {
  const shuffledArticles1 = shuffleArray(Object.entries(wikiConnections)).slice(0, MAX_ARTICLES);
  const shuffledArticles2 = shuffleArray(Object.entries(wikiConnections)).slice(0, MAX_ARTICLES);
  const articlesWithDescriptions1 = [];
  const articlesWithDescriptions2 = [];

  for (const [key, value] of shuffledArticles1) {
    const filePath = path.join(process.cwd(), 'data', `${key}.md`);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const description = await getArticleDescription(fileContent);
    articlesWithDescriptions1.push([key, { ...value, description }]);
  }

  for (const [key, value] of shuffledArticles2) {
    const filePath = path.join(process.cwd(), 'data', `${key}.md`);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const description = await getArticleDescription(fileContent);
    articlesWithDescriptions2.push([key, { ...value, description }]);
  }

  return {
    props: {
      articles1: articlesWithDescriptions1,
      articles2: articlesWithDescriptions2,
    },
  };
}

const CustomCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(2),
  maxHeight: 420,
  minHeight: 80,
  width: 300,
  borderRadius: 16,
  margin: theme.spacing(3),
  cursor: 'pointer',
  boxShadow: '0 0 11px rgba(33,33,33,.15)',
  '&:hover': {
    boxShadow: '0 0 11px rgba(33,33,33,.25)',
  },
}));

export default function Home({ articles1, articles2 }) {
  return (
    <>
      <Head>
        <title>Data Drip</title>
        <meta name="description" content="DataDrip wiki" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <Box 
          sx={{ 
            height: '100vh',
          }}
        >
          <SkipLink skipToId="main-content" />
          <NavBar />
          <Box
            id="main-content"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-evenly',
              minHeight: 'calc(100% - 128px)'
            }}
          >
            <Looper speed={100} direction="right">
              {articles1.map(([key, value]) => (
                <Link href={`/${key}`} key={key} passHref>
                  <CustomCard>
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        noWrap
                      >
                        {value.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        color="text.secondary"
                      >
                        {value.description}
                      </Typography>
                    </CardContent>
                  </CustomCard>
                </Link>
              ))}
            </Looper>
            <Looper speed={80} direction="left">
              {articles2.map(([key, value]) => (
                <Link href={`/${key}`} key={key} passHref>
                  <CustomCard>
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        noWrap
                      >
                        {value.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        color="text.secondary"
                      >
                        {value.description}
                      </Typography>
                    </CardContent>
                  </CustomCard>
                </Link>
              ))}
            </Looper>
          </Box>
          <BackToTop />
        </Box>
      </main>
    </>
  );
}