import * as React from 'react';
import NavBar from '@/components/NavBar/NavBar';
import BackToTop from '@/components/PageContent/BackToTop';
import MarkDown from '@/components/PageContent/Markdown';

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

export default function PageContent({ content, filename }) {
  const headings = extractHeadings(content);

  return (
    <>
      <NavBar />
      <MarkDown content={content} headings={headings} filename={filename} />
      <BackToTop />
    </>
  );
}
