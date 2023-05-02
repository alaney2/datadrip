import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import Link from 'next/link';

const Carousel = ({ articles, numColumns }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % articles.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [articles]);

  return (
    <div>
      {articles.slice(currentIndex, currentIndex + numColumns).map(([key, value]) => (
        <div style={{ marginBottom: '32px', breakInside: 'avoid' }} key={key}>
          <Link href={`/${key}`} key={key} passHref>
            <Card
              sx={{
                px: 2,
                // maxHeight: 320,
                // minHeight: 120,
                height: 300,
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
  );
};

export default Carousel;
