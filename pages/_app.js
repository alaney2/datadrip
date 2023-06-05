import * as React from 'react';
import '@/styles/globals.css'
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@/components/ThemeContext';
import { ReadingListProvider } from '@/components/ReadingListContext';
import { NavBarVisibilityProvider } from '@/components/NavBarVisibilityContext';
import { Analytics } from '@vercel/analytics/react';
import Script from 'next/script';

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider>
        <ReadingListProvider>
          <NavBarVisibilityProvider>
            <CssBaseline enableColorScheme />
            <Component {...pageProps} />
            <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-CF4FCRS2YB"/>
            <Script
              id='google-analytics'
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'G-CF4FCRS2YB', {
                  page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </NavBarVisibilityProvider>
        </ReadingListProvider>
      </ThemeProvider>
      <Analytics />
    </>
  );
}