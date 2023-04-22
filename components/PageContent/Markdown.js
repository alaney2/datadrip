import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeSlug from 'rehype-slug';
import Box from '@mui/material/Box';
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

export default function Markdown({ content, headings, filename }) {
  const [lastUpdated, setLastUpdated] = React.useState(null);

  React.useEffect(() => {
    async function fetchLastUpdated() {
      // ... rest of the fetchLastUpdated function
    }
    fetchLastUpdated();
  }, [filename]);

  const headingRenderer = (props) => {
    const { level, children } = props;
    const variant = `h${level}`;
    return (
      <Typography variant={variant}>
        {children}
      </Typography>
    );
  };
  

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
          <LeftSidebar filename={filename} />
        </Box>
        <Box>
          <ReactMarkdown renderers={{ heading: headingRenderer }} rehypePlugins={[rehypeSlug]}>{content}</ReactMarkdown>
        </Box>
        <Box sx={{ mr: { xs: 1, sm: 4 } }}> 
          <RightSidebar headings={headings} />
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
