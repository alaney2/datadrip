import * as React from 'react';
import { useRouter } from 'next/router';
import { useTheme } from '@mui/system';
import MarkdownElement from '@/components/MarkdownElement';
// import { pathnameToLanguage } from 'docs/src/modules/utils/helpers';
import AppLayoutDocs from '@/components/AppLayoutDocs';

export default function MarkdownDocs(props) {
  const theme = useTheme();
  const router = useRouter();
  // const { canonicalAs } = pathnameToLanguage(router.asPath);
  const {
    disableAd = false,
    disableToc = false,
    docs,
  } = props;

  // const localizedDoc = docs[userLanguage] || docs.en;
  const localizedDoc = docs.en;
  const { description, location, rendered, title, toc } = localizedDoc;

  return (
    <AppLayoutDocs
      description={description}
      disableAd={disableAd}
      disableToc={disableToc}
      location={location}
      title={title}
      toc={toc}
    >
        {rendered.map((renderedMarkdownOrDemo, index) => {
          if (typeof renderedMarkdownOrDemo === 'string') {
            return (
              <MarkdownElement key={index} renderedMarkdown={renderedMarkdownOrDemo} />
            );
          }
          return null;
        })}
    </AppLayoutDocs>
  );
}

