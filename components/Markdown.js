// components/Markdown.js
import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import AppLayoutDocs from '@/components/AppLayoutDocs';
import AppFrame from '@/components/AppFrame';
import NavBar from '@/components/NavBar';

export default function Markdown({ content }) {
  return (
    <>
      <NavBar />
      {/* <AppFrame /> */}
      {/* <AppLayoutDocs /> */}
      <ReactMarkdown>{content}</ReactMarkdown>
    </>
  );
}
