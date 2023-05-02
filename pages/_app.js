import * as React from 'react';
import '@/styles/globals.css'
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@/components/ThemeContext';
import { ReadingListProvider } from '@/components/ReadingListContext';
import { NavBarVisibilityProvider } from '@/components/NavBarVisibilityContext';
import { Analytics } from '@vercel/analytics/react';


export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider>
        <ReadingListProvider>
          <NavBarVisibilityProvider>
            <CssBaseline enableColorScheme />
            <Component {...pageProps} />
          </NavBarVisibilityProvider>
        </ReadingListProvider>
      </ThemeProvider>
      <Analytics />
    </>
  );
}