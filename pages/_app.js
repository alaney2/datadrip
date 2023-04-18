import * as React from 'react';
import '@/styles/globals.css'
import { ThemeProvider } from '@/components/ThemeContext';
import CssBaseline from '@mui/material/CssBaseline';
import NavBar from '@/components/NavBar/NavBar';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <CssBaseline enableColorScheme />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
