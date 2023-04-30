import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import path from 'path';
import fs from 'fs';
import PageContent from '@/components/PageContent/PageContent';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const filename = 'about.md';
export default function MarkdownPage({ markdownContent }) {
  const [fixedButton, setFixedButton] = useState(false);
  const [buttonHeight, setButtonHeight] = useState('0');

  const buttonRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!buttonRef.current) return;

      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const currentScrollPosition = window.scrollY;

      if (!fixedButton && currentScrollPosition + windowHeight >= documentHeight) {
        setFixedButton(true);
        console.log('Button position fixed');
      }
    };

    if (buttonRef.current) {
      setButtonHeight(buttonRef.current.offsetHeight + 'px');
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [fixedButton]);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ minHeight: '100vh' }}>
        <PageContent content={markdownContent} filename={filename} leftSidebar={false} showLastUpdated={false} />
      </Box>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100vw',
          my: 4,
          position: 'relative',
          // height: '20vh',
          height: buttonHeight,
        }}
      >
        <Box sx={{ width: '100%', height: fixedButton ? '20vh' : '0' }} />
        <Link href="/contact" passHref>
          <Button
            ref={buttonRef}
            variant="contained"
            color="secondary"
            sx={{
              width: '75vw',
              position: fixedButton ? 'fixed' : 'absolute',
              bottom: fixedButton ? '5rem' : '0',
              left: '50%',
              transform: 'translateX(-50%)',
              fontSize: '5vw',
              padding: 4,
              textTransform: 'capitalize',
              borderRadius: '8vw',
              border: '1.5vw solid',
              borderColor: 'primary.main',
              '&:hover': {
                transform: 'translateX(-50%) scale(1.10)',
                backgroundColor: 'secondary.main',
                borderColor: 'primary.main',
                textDecoration: 'none',
              },
              fontFamily: 'Caveat, cursive',
            }}
          >
            CONTACT US
          </Button>
        </Link>
      </Box>
    </Box>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data', filename);
  const markdownContent = fs.readFileSync(filePath, 'utf8');
  return {
    props: {
      markdownContent,
    },
  };
}
