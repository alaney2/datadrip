import React from 'react';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

const Custom404 = () => {
  const textColor = 'rgba(217, 217, 217, 0.95)';

  return (
    <Container
      maxWidth="xs"
      sx={{
        minHeight: '100vh',
        minWidth: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0A1929',
      }}
    >
      <Box
        minHeight="100vh"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="flex-start"
      >
        <Box
          display="flex"
          alignItems="center"
          marginBottom={4}
          height={64}
        >
          <Typography variant="h4" sx={{ color: textColor, marginRight: 2 }}>
            404
          </Typography>
          <Divider orientation="vertical" sx={{ height: '100%', marginRight: 2 }} />
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="flex-start"
          >
            <Typography sx={{ color: textColor }}>
              This page does not exist yet; Please consider{' '}
              <a
                href="https://github.com/alaney2/datadrip/pages"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: textColor, textDecoration: 'underline' }}
              >
                updating the wiki
              </a>{' '}
              to include it. 
            </Typography>
            <Link href="/" passHref>
              <Typography
                component="span"
                sx={{ cursor: 'pointer', color: 'rgba(217, 217, 217, 0.95)', '&:hover': { color: '#7c4dff' } }}
              >
                Back to homepage.
              </Typography>
            </Link>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Custom404;
