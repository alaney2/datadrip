import React from 'react';
import NavBar from '@/components/NavBar/NavBar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import BackToTop from '@/components/PageContent/BackToTop';
import MarkDown from '@/components/PageContent/Markdown';
import SkipLink from '@/components/SkipLink';
import NorthIndicator from '@/components/PageContent/NorthIndicator';


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

export default function PageContent({ content, filename, leftSidebar=true, rightSidebar=true }) {
  const headings = extractHeadings(content);
  const [lastUpdated, setLastUpdated] = React.useState(null);
  const mainContentId = 'main-content';

  React.useEffect(() => {
    async function fetchLastUpdated() {
      const owner = 'alaney2';
      const repo = 'datadrip';
      const filePath = `data/${filename}`;
      const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;
      const response = await fetch(
        `https://api.github.com/repos/${owner}/${repo}/commits?path=${filePath}&per_page=1`,
        {
          headers: {
            Authorization: `token ${token}`,
          },
        }
      );
      const data = await response.json();
      if (data && data.length > 0) {
        setLastUpdated(data[0].commit.committer.date);
      }
    }
    fetchLastUpdated();
  }, [filename]);

  return (
    <Box>
      <SkipLink skipToId={mainContentId} />
      <NavBar />
      <NorthIndicator />
      <Box id={mainContentId}>
        <MarkDown 
          content={content} 
          headings={headings} 
          filename={filename} 
          leftSidebar={leftSidebar} 
          rightSidebar={rightSidebar} 
        />
      </Box>
      <Box sx={{ px: { xs: 1, sm: 2 } }}>
        <Typography variant="caption" color="text.secondary">
          Last updated:{' '}
          {lastUpdated ? new Date(lastUpdated).toLocaleString() : 'Loading...'}
        </Typography>
      </Box>
      <BackToTop />
    </Box>
  );
}
