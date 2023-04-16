import * as React from 'react';
import '@/styles/globals.css'
import { ThemeProvider } from '@/components/ThemeContext';
import CssBaseline from '@mui/material/CssBaseline';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
