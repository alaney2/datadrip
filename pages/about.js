import * as React from 'react';
import path from 'path';
import fs from 'fs';
import PageContentNoGraph from '@/components/PageContent/PageContentNoGraph';

const filename = 'about.md';

export default function MarkdownPage({ markdownContent }) {
  return <PageContentNoGraph content={markdownContent} filename={filename} />;
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
