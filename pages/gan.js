// import * as React from 'react';
// import MarkdownDocs from '@/components/MarkdownDocs';
// import * as pageProps from 'data/gan.md?@mui/markdown';

// export default function Page() {
//   console.log(pageProps);
//   return <MarkdownDocs {...pageProps} />;
// }

// import * as React from 'react';
// import ReactMarkdown from 'react-markdown';
// import path from 'path';
// import fs from 'fs';
// import WithMarkdown from 'components/WithMarkdown';


// export default function Page({ markdownContent }) {
//   return <ReactMarkdown>{markdownContent}</ReactMarkdown>;
// }

// export async function getStaticProps() {
//   // Change the path to the location of your Markdown file
//   const filePath = path.join(process.cwd(), 'data', 'gan.md');
//   const markdownContent = fs.readFileSync(filePath, 'utf8');

//   return {
//     props: {
//       markdownContent,
//     },
//   };
// }

// const Page = WithMarkdown('gan.md');
// export default Page;

// import WithMarkdown from 'components/WithMarkdown';

// const Page = WithMarkdown('gan.md');

// export async function getStaticProps() {
//   const markdownProps = await Page.loadMarkdown();
//   return markdownProps;
// }

// export default Page;


import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import path from 'path';
import fs from 'fs';
import AppLayoutDocs from '@/components/AppLayoutDocs';


export default function Page({ markdownContent }) {
  return (
    <>
      <AppLayoutDocs />
    
    <ReactMarkdown>{markdownContent}</ReactMarkdown>
    </>
  );
}

export async function getStaticProps() {
  // Change the path to the location of your Markdown file
  const filePath = path.join(process.cwd(), 'data', 'gan.md');
  const markdownContent = fs.readFileSync(filePath, 'utf8');

  return {
    props: {
      markdownContent,
    },
  };
}
