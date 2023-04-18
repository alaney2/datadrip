// pages/MarkdownPage.js
import * as React from 'react';
import path from 'path';
import fs from 'fs';
import Markdown from 'components/Markdown';

export default function MarkdownPage({ markdownContent }) {
  return <Markdown content={markdownContent} />;
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
