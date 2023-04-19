import * as React from 'react';
import '@/styles/globals.css'
import { ThemeProvider } from '@/components/ThemeContext';
import CssBaseline from '@mui/material/CssBaseline';
import { ReadingListProvider } from '@/components/ReadingListContext';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <ReadingListProvider>
        <CssBaseline enableColorScheme />
        <Component {...pageProps} />
      </ReadingListProvider>
    </ThemeProvider>
  );
}
