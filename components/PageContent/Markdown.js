import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeSlug from 'rehype-slug';
import Box from '@mui/material/Box';
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

export default function Markdown({ content, headings, filename, leftSidebar, rightSidebar }) {
  const [lastUpdated, setLastUpdated] = React.useState(null);

  React.useEffect(() => {
    async function fetchLastUpdated() {
      const owner = 'alaney2';
      const repo = 'datadrip';
      const filePath = `data/${filename}`; // Use filename prop here
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
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box
        sx={{
          flexGrow: 1,
          display: 'grid',
          gridTemplateColumns: { md: '240px 1fr ', lg: '240px 1fr 240px' },
          mx: 'auto',
          px: { xs: 1, sm: 2 },
          maxWidth: { xl: '1600px' },
          gap: '32px',
        }}
      >
        <Box sx={{ ml: { xs: 1, sm: 4 } }}> 
          {leftSidebar && <LeftSidebar filename={filename} />}
        </Box>

        <Box
          sx={{
            mt: { xs: -4, sm: 0 },
          }}
        >
          <ReactMarkdown rehypePlugins={[rehypeSlug]}>{content}</ReactMarkdown>
        </Box>

        <Box sx={{ mr: { xs: 1, sm: 4 } }}> 
          {rightSidebar && <RightSidebar headings={headings} />}
        </Box>
      </Box>
      <Divider sx={{ my: 4 }} />
      <Box sx={{ px: { xs: 1, sm: 2 } }}>
        <Typography variant="caption" color="text.secondary">
          Last updated:{' '}
          {lastUpdated ? new Date(lastUpdated).toLocaleString() : 'Loading...'}
        </Typography>
      </Box>
    </Box>
  );
}
