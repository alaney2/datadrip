import React from 'react';
import NavBar from '@/components/NavBar/NavBar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import BackToTop from '@/components/PageContent/BackToTop';
import MarkDown from '@/components/PageContent/Markdown';
import SkipLink from '@/components/SkipLink';
import NorthIndicator from '@/components/PageContent/NorthIndicator';
import wikiConnections from '@/wiki-connections.json';
import Head from "next/head";


function extractHeadings(markdown) {
  const regex = /(?:^|\n)#+\s+(.+)/g;
  const headings = [];
  let match;
  while ((match = regex.exec(markdown))) {
    const depth = match[0].lastIndexOf('#') + 1;
    if (depth > 1) { // Exclude h1 headings
      headings.push({
        text: match[1],
        depth: depth,
        slug: match[1].toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      });
    }
  }
  return headings;
}

export default function PageContent({ content, filename, leftSidebar=true, rightSidebar=true, showLastUpdated=true }) {
  const headings = extractHeadings(content);
  const [lastUpdated, setLastUpdated] = React.useState(null);
  const nameWithoutExtension = filename.slice(0, filename.lastIndexOf('.'));
  const pageObject = wikiConnections[nameWithoutExtension];

  React.useEffect(() => {
    async function fetchLastUpdated() {
      const response = await fetch(`/api/last_updated?filename=${filename}`);
      const data = await response.json();
      if (data) {
        setLastUpdated(data);
      }
    }    
    fetchLastUpdated();
  }, [filename]);

  return (
    <Box>
      {pageObject && 
        <Head>
          <title>{pageObject['title']}</title>
        </Head>
      }
      <SkipLink skipToId={"main-content"} />
      <NavBar />
      <NorthIndicator />
      <Box id="main-content">
        <MarkDown
          content={content} 
          headings={headings} 
          filename={filename} 
          leftSidebar={leftSidebar} 
          rightSidebar={rightSidebar} 
        />
      </Box>

      <Box sx={{ px: { xs: 1, sm: 2 } }}>
        {showLastUpdated && (
        <Typography variant="caption" color="text.secondary">
          Last updated:{' '}
          {lastUpdated ? new Date(lastUpdated).toLocaleString() : 'Loading...'}
        </Typography>
        )}
      </Box>
      <BackToTop />
    </Box>
  );
}
