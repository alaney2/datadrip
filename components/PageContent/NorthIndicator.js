import React from 'react';
import NorthRoundedIcon from '@mui/icons-material/NorthRounded';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import { ReadingListContext } from '@/components/ReadingListContext';
import { useTheme, alpha } from '@mui/material';

export default function NorthIndicator() {
  const [flashIcon, setFlashIcon] = React.useState(false);
  const { readingList } = React.useContext(ReadingListContext);
  const theme = useTheme();

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
            borderRadius: '50%', // Add this line to create a rounded border
            // border: '2px solid', // Add this line to specify the border thickness
            borderColor: 'primary.main', // Add this line to set the border color
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            // bgcolor: alpha(theme.palette.secondary.main, 0.3)
          }}
        >
          <NorthRoundedIcon color="secondary" />
        </Box>
      </Fade>
    )}
    </>
  )
};