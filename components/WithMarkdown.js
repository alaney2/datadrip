import React from 'react';
import MarkdownDocs from '@/components/MarkdownDocs';
import { loadMarkdown } from 'utils/loadMarkdown';

const WithMarkdown = (markdownPath) => {
  const PageComponent = (props) => {
    const { markdownContent } = props;

    return <MarkdownDocs content={markdownContent} />;
  };

  PageComponent.loadMarkdown = async () => {
    const markdownContent = await loadMarkdown(markdownPath);
    return {
      props: {
        markdownContent,
      },
    };
  };

  return PageComponent;
};

export default WithMarkdown;
