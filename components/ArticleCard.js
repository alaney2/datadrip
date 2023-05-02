import React, { useState, useEffect } from 'react';
import Link from 'next/link';
// import { Card, CardContent, Typography } from '@mui/material';
import { Card, CardActionArea, CardContent, CardMedia, Typography, Box, CircularProgress } from '@mui/material';

import { getArticleDescription } from '@/components/utilities';
import path from 'path';
import wikiConnections from '@/wiki-connections.json';



const ArticleCard = ({ article }) => {
  if (!article) {
    return <CircularProgress />;
  }

  const { key, title, description } = article;

  return (
    <Link href={`/${key}`} passHref>
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
          {title}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {description}
        </Typography>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ArticleCard;
