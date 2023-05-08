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
            <Script id="google-tag-manager" strategy="afterInteractive">
              {`
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','G-CF4FCRS2YB');
              `}
            </Script>
            <CssBaseline enableColorScheme />
            <Component {...pageProps} />
          </NavBarVisibilityProvider>
        </ReadingListProvider>
      </ThemeProvider>
      <Analytics />
    </>
  );
}