import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  AppBar,
  Box,
  Button,
  CssBaseline,
  Fade,
  IconButton,
  Slide,
  Toolbar,
  Tooltip,
  Typography,
  useScrollTrigger,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SettingsDrawer from '@/components/NavBar/SettingsDrawer';
import CottageIcon from '@mui/icons-material/Cottage';
import SearchMobile from '@/components/NavBar/SearchMobile';
import MenuComponent from '@/components/NavBar/MenuComponent';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { useNavBarVisibility } from '@/components/NavBarVisibilityContext';
import { ReadingListContext } from '@/components/ReadingListContext';


function HideOnScroll(props) {
  const { children, threshold = 111 } = props;
  const { hidden, setHidden } = useNavBarVisibility();
  const lastScroll = React.useRef(0);
  const scrollSpeed = React.useRef(0);
  const lastScrollDirection = React.useRef(null);

  React.useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const handleScroll = () => {
      const currentScroll = window.pageYOffset;
      const delta = currentScroll - lastScroll.current;
      const scrollDirection = delta > 0 ? 'down' : 'up';
      lastScroll.current = currentScroll;
      scrollSpeed.current = Math.abs(delta);
      // if (currentScroll <= 0 || (scrollDirection === 'up' && scrollSpeed.current <= threshold)) {
      //   setHidden(false);
      // } 
      if (currentScroll <= 0) {
        setHidden(false);
      }
      else {
        setHidden(true);
      }
      lastScrollDirection.current = scrollDirection;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold, setHidden]);

  return (
    <Slide appear={false} direction="down" in={!hidden}>
      {children}
    </Slide>
  );
}

export default function NavBar(props) {
  const router = useRouter();
  const [settingsOpen, setSettingsOpen] = React.useState(false);
  const [menuAnchorEl, setMenuAnchorEl] = React.useState(null);
  const { readingList } = React.useContext(ReadingListContext);
  const [highlightLibraryIcon, setHighlightLibraryIcon] = React.useState(false);
  const isSmScreen = useMediaQuery('(max-width:600px)');

  React.useEffect(() => {
    setHighlightLibraryIcon(true);
    const timer = setTimeout(() => {
      setHighlightLibraryIcon(false);
    }, 200);
    return () => clearTimeout(timer);
  }, [readingList]);

  const handleMenuOpen = (event) => {
    setMenuAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar
          color="inherit"
          elevation={0} 
          sx={{ borderBottom: '0.1px solid #7c4dff' }}
        >
          <Toolbar sx={{ minHeight: 64 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="open drawer"
                  sx={{ borderRadius: '4px', p: 1, ml: 0, mr: {xs: 0, sm: 2} }}
                  onClick={handleMenuOpen}
                >
                  <MenuComponent
                    anchorEl={menuAnchorEl}
                    open={Boolean(menuAnchorEl)}
                    onClose={handleMenuClose}
                  />
                  <MenuIcon />
                </IconButton>

                <Link href="/" passHref >
                  <IconButton
                    variant="text"
                    color="inherit"
                    sx={{
                      ml: 0,
                      mx: 0,
                      '&:hover': {
                        backgroundColor: 'transparent',
                        color: (theme) => theme.palette.primary.main
                      },
                      '&.Mui-focusVisible': {
                        color: (theme) => theme.palette.primary.main,
                      },
                    }}
                  >
                    {isSmScreen ? (
                      <CottageIcon fontSize="medium" />
                    ) : (
                      <Typography
                        variant="h6"
                        noWrap
                        color="inherit"
                        sx={{
                          fontWeight: 700,
                          textShadow: '1px 1px 3px rgba(0, 0, 0, 0.3)',
                          letterSpacing: '.08rem',
                          fontFamily: 'Caveat, cursive',
                          fontSize: '1.5rem',
                        }}
                      >
                        DataDrip
                      </Typography>
                    )}
                  </IconButton>
                </Link>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', }}>
                <Box sx={{ mr: { xs: 0, sm: 2 } }}>
                  <SearchMobile />
                </Box>
                <IconButton
                  color="inherit"
                  onClick={() => setSettingsOpen(true)}
                  sx={{ px: 1, borderRadius: '4px', ml: 0 }}
                >
                  <Fade in={!highlightLibraryIcon} timeout={200}>
                    <MenuBookIcon fontSize="medium" />
                  </Fade>
                </IconButton>
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
      <SettingsDrawer
        onClose={() => setSettingsOpen(false)}
        open={settingsOpen}
      />
      <MenuComponent
        anchorEl={menuAnchorEl}
        open={Boolean(menuAnchorEl)}
        onClose={handleMenuClose}
      />
    </Box>
  );
}
  
