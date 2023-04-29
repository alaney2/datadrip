import React from 'react';
import path from 'path';
import fs from 'fs';
import PageContent from '@/components/PageContent/PageContent';
import FeedbackForm from '@/components/FeedbackForm';
import Box from '@mui/material/Box';

const filename = 'about.md';
export default function MarkdownPage({ markdownContent }) {
  return (
    <Box sx={{ mb: 16 }}>
      <Box sx={{ height: '100vh' }}>
        <PageContent content={markdownContent} filename={filename} leftSidebar={false} showLastUpdated={false} />
      </Box>
      <FeedbackForm />
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
