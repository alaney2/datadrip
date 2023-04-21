import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeSlug from 'rehype-slug';
import Box from '@mui/material/Box';
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

export default function MarkdownNoGraph({ content, headings, filename }) {
  const [lastUpdated, setLastUpdated] = React.useState(null);

  React.useEffect(() => {
    async function fetchLastUpdated() {
      // ... rest of the fetchLastUpdated function
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
          gridTemplateColumns: { md: '320px 1fr 320px' },
          mx: 'auto',
          px: { xs: 2, sm: 4 },
          maxWidth: { xl: '1600px' },
          gap: '64px',
        }}
      >
        <Box>
          {/* <LeftSidebar filename={filename} /> */}
        </Box>
        <Box>
          <ReactMarkdown rehypePlugins={[rehypeSlug]}>{content}</ReactMarkdown>
        </Box>
        <Box>
          <RightSidebar headings={headings} />
        </Box>
      </Box>
      <Divider sx={{ my: 4 }} />
      <Box sx={{ px: { xs: 2, sm: 4 } }}>
        <Typography variant="caption" color="text.secondary">
          Last updated:{' '}
          {lastUpdated ? new Date(lastUpdated).toLocaleString() : 'Loading...'}
        </Typography>
      </Box>
    </Box>
  );
}
