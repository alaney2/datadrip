import React from 'react';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import { Card, CardActionArea, CardContent, CardMedia, Typography, Box, CircularProgress } from '@mui/material';
import NavBar from '@/components/NavBar/NavBar';
import wikiConnections from '@/wiki-connections.json';
import Link from 'next/link';
import SkipLink from '@/components/SkipLink';
import { styled, useTheme } from '@mui/material/styles';
import path from 'path';
import fs from 'fs';
import { shuffleArray } from '@/components/utilities';
import { getArticleDescription } from '@/components/utilities';
import BackToTop from '@/components/PageContent/BackToTop';


const MAX_ARTICLES = 16;

export async function getStaticProps() {
  const shuffledArticles = shuffleArray(Object.entries(wikiConnections));
  const articlesWithDescriptions = [];

  for (const [key, value] of shuffledArticles) {
    const filePath = path.join(process.cwd(), 'data', `${key}.md`);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const description = await getArticleDescription(fileContent);
    articlesWithDescriptions.push([key, { ...value, description }]);
  }

  return {
    props: {
      articles: articlesWithDescriptions,
    },
  };
}

const StyledContainer = styled('div')(({ theme }) => ({
  maxWidth: 1280,
  margin: '0 auto',
  padding: theme.spacing(2),
}));

export default function Home({ articles }) {
  const [displayedArticles, setDisplayedArticles] = useState(articles.slice(0, MAX_ARTICLES));
  const [currentArticleCount, setCurrentArticleCount] = useState(MAX_ARTICLES);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const newArticleCount = currentArticleCount + MAX_ARTICLES;
          setTimeout(() => {
            setCurrentArticleCount(newArticleCount);
            setDisplayedArticles(articles.slice(0, newArticleCount));
          }, 500);
        }
      },
      { threshold: 1 }
    );
    const loader = document.getElementById("loader");
    if (loader) {
      observer.observe(loader);
    }
    return () => {
      if (loader) {
        observer.unobserve(loader);
      }
    };
  }, [currentArticleCount, articles]);

  return (
    <>
      <Head>
        <title>Data Drip</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <SkipLink skipToId="main-content" />
        <NavBar />
        <StyledContainer id="main-content" >
          {/* <h1 style={{
            marginLeft: {xs: 0, md: '5rem'},
            display: 'flex',
            justifyContent: 'center', 
            alignContent: 'center', 
            width: '100%' 
          }}>Pages</h1> */}
          <Box sx={{ mx: { xs: 2, lg: 8 }, my: 4 }}>
            <div
              style={{
                columnCount: 3,
                columnGap: '32px',
                columnWidth: 'calc((100% - 64px) / 3)',
              }}
            >
              {displayedArticles.map(([key, value]) => (
                <div style={{ marginBottom: '32px', breakInside: 'avoid' }} key={key}>
                  <Link href={`/${key}`} key={key} passHref>
                    <Card
                      sx={{
                        px: 2,
                        maxHeight: 320,
                        minHeight: 120,
                        cursor: 'pointer',
                        boxShadow: '0 0 11px rgba(33,33,33,.15)',
                        '&:hover': {
                          boxShadow: '0 0 11px rgba(33,33,33,.25)',
                        },
                      }}
                    >
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div" noWrap>
                          {value.title}
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                          {value.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Link>
                </div>
              ))}
            </div>
            <div
              id="loader"
              style={{
                gridColumn: '1 / -1',
                width: '100%',
                textAlign: 'center',
                padding: '1rem',
              }}
            >
              {currentArticleCount < articles.length && (
                <CircularProgress />
              )}
            </div>
          </Box>
        </StyledContainer>
        <BackToTop />
      </main>
    </>
  );
}