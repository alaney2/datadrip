import React from 'react';
import NorthRoundedIcon from '@mui/icons-material/NorthRounded';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import { ReadingListContext } from '@/components/ReadingListContext';
import { useTheme, alpha, useMediaQuery } from '@mui/material';

export default function NorthIndicator() {
  const [flashIcon, setFlashIcon] = React.useState(false);
  const { readingList } = React.useContext(ReadingListContext);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  React.useEffect(() => {
    setFlashIcon(true);
    const timer = setTimeout(() => {
      setFlashIcon(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [readingList]);

  return (
    <>
    {flashIcon && (
      <Fade in={flashIcon}>
        <Box
          sx={{
            position: 'fixed',
            top: 16,
            right: 32,
            zIndex: theme.zIndex.appBar - 1,
            borderRadius: '50%',
            // border: '2px solid', 
            borderColor: 'primary.main',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            p: 0.5,
            bgcolor: alpha(theme.palette.secondary.main, 0.3)
          }}
        >
          <NorthRoundedIcon color="secondary" fontSize={isSmallScreen ? "medium" : "large"} />
        </Box>
      </Fade>
    )}
    </>
  )
};