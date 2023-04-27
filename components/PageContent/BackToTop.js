import React from 'react';
import { useRouter } from 'next/router';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Fab from '@mui/material/Fab';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';
import Fade from '@mui/material/Fade';
import { useNavBarVisibility } from '@/components/NavBarVisibilityContext';
import { useTheme, alpha } from '@mui/material/styles';
import { useMediaQuery, Dialog, IconButton } from '@mui/material';


export default function BackToTop() {
  const router = useRouter();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const { setHidden } = useNavBarVisibility();

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 200,
  });

  const scrollToTop = () => {
    return new Promise((resolve) => {
      const onScroll = () => {
        if (window.pageYOffset === 0) {
          window.removeEventListener("scroll", onScroll);
          resolve();
        }
      };
      window.addEventListener("scroll", onScroll);
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  };

  const handleClick = async () => {
    await scrollToTop();
    setOpen(false);
    setHidden(false);
    const currentPath = router.asPath.split("#")[0];
    router.replace(currentPath, undefined, { shallow: true });
  };
  

  return (
    <Fade in={trigger}>
      <Tooltip title="Scroll to top" open={open} onClose={handleClose} onOpen={handleOpen}>
        <Box
          className="mui-fixed"
          sx={{
            position: 'fixed',
            bottom: { xs: 24, lg: 64, xl: 96 },
            right: { xs: 24, lg: 64, xl: 128 },
            zIndex: theme.zIndex.tooltip,
          }}
        >
          <IconButton
            sx={{
              boxShadow: theme.shadows[6],
              bgcolor: alpha(theme.palette.text.secondary, 0.85),

            }}
            size="medium"
            aria-label="scroll back to top"
            onClick={handleClick}
            data-ga-event-category="docs"
            data-ga-event-action="click-back-to-top"
            disableRipple
          >
            <KeyboardArrowUpRoundedIcon color="primary" />
          </IconButton>
        </Box>
      </Tooltip>
    </Fade>
  );
}