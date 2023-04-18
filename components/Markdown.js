// components/Markdown.js
import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import NavBar from '@/components/NavBar/NavBar';

export default function Markdown({ content }) {
  return (
    <>
      <NavBar />
      <Box
        sx={{
          width: { xl: '1200px' }, // Set the fixed width for screen sizes larger than 'xl'
          mx: 'auto', // Center the content horizontally
          px: { xs: 2, sm: 4 }, // Add some padding for smaller screen sizes
        }}
      >
        <ReactMarkdown>{content}</ReactMarkdown>
      </Box>
    </>
  );
}
