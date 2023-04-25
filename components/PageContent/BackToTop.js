import React from 'react';
import { useRouter } from 'next/router';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Fab from '@mui/material/Fab';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';
import Fade from '@mui/material/Fade';
import { useNavBarVisibility } from '@/components/NavBarVisibilityContext';
import { useTheme } from '@mui/material/styles';


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
            bottom: { xs: 32, lg: 64, xl: 96 },
            right: { xs: 36, lg: 64, xl: 128 },
            zIndex: theme.zIndex.tooltip,
          }}
        >
          <Fab
            sx={[
              (theme) => ({
                '&:hover': {
                  boxShadow: `0px 4px 20px rgba(170, 180, 190, 0.3)`,
                },
                '&:active': {
                  boxShadow: `0px 4px 20px rgba(170, 180, 190, 0.6)`,
                },
              }),
            ]}
            size="small"
            aria-label="scroll back to top"
            onClick={handleClick}
            data-ga-event-category="docs"
            data-ga-event-action="click-back-to-top"
          >
            <KeyboardArrowUpRoundedIcon />
          </Fab>
        </Box>
      </Tooltip>
    </Fade>
  );
}