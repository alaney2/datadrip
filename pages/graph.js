import * as React from 'react';
import path from 'path';
import fs from 'fs';
import PageContent from '@/components/PageContent/PageContent';

export default function MarkdownPage({ markdownContent }) {
  return <PageContent content={markdownContent} />;
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data', 'gan.md');
  const markdownContent = fs.readFileSync(filePath, 'utf8');
  return {
    props: {
      markdownContent,
    },
  };
}
