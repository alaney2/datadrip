import React from 'react';
import Link from 'next/link';
import path from 'path';
import fs from 'fs';
import PageContent from '@/components/PageContent/PageContent';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const filename = 'about.md';
export default function MarkdownPage({ markdownContent }) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', mb: 16 }}>
      <Box sx={{ height: '100vh' }}>
        <PageContent content={markdownContent} filename={filename} leftSidebar={false} showLastUpdated={false} />
      </Box>

      <Box
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100vw', height: '20vh' }}
      >
        <Link href="/contact" passHref>
          <Button
            variant="contained"
            color="secondary"
            sx={{
              // mb: 0,
              height: '15vw',
              width: '75vw',
              position: 'relative',
              fontSize: '5vw', // Adjust font size here
              padding: 4,
              textTransform: 'capitalize',
              borderRadius: '250px',
              border: '36px solid',
              borderColor: 'primary.main',
              '&:hover': {
                transform: 'scale(1.20)',
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
};

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data', filename);
  const markdownContent = fs.readFileSync(filePath, 'utf8');
  return {
    props: {
      markdownContent,
    },
  };
}
