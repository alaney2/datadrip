import * as React from 'react';
import { useEffect } from 'react';
import Link from 'next/link';
import {
  AppBar,
  Box,
  Button,
  CssBaseline,
  IconButton,
  Slide,
  Toolbar,
  Tooltip,
  Typography,
  useScrollTrigger,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import SettingsDrawer from '@/components/NavBar/SettingsDrawer';
import CottageIcon from '@mui/icons-material/Cottage';
import SearchMobile from '@/components/NavBar/SearchMobile';
import MenuComponent from '@/components/NavBar/MenuComponent';


function HideOnScroll(props) {
  const { children, threshold = 1000 } = props;
  const [hidden, setHidden] = React.useState(false);
  const lastScroll = React.useRef(0);
  const scrollSpeed = React.useRef(0);
  const lastScrollDirection = React.useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }
    const handleScroll = () => {
      const currentScroll = window.pageYOffset;
      const delta = currentScroll - lastScroll.current;
      const scrollDirection = delta > 0 ? 'down' : 'up';
      lastScroll.current = currentScroll;
      scrollSpeed.current = Math.abs(delta);
      if (scrollDirection === 'down' || (scrollDirection === 'up' && scrollSpeed.current > threshold)) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      lastScrollDirection.current = scrollDirection;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!hidden}>
      {children}
    </Slide>
  );
}





export default function NavBar(props) {
  const [settingsOpen, setSettingsOpen] = React.useState(false);
  const [menuAnchorEl, setMenuAnchorEl] = React.useState(null);

  const isSmScreen = useMediaQuery('(max-width:600px)');

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
        <AppBar>
          <Toolbar sx={{ minHeight: '64px' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="open drawer"
                  sx={{ mr: { sm: 2 }, borderRadius: '4px', }}
                  onClick={handleMenuOpen}
                >
                  <MenuComponent
                    anchorEl={menuAnchorEl}
                    open={Boolean(menuAnchorEl)}
                    onClose={handleMenuClose}
                  />
                  <MenuIcon />
                </IconButton>
                <Link href="/" passHref>
                  <Button variant="text" color="inherit" sx={{ mx: 0 }}>
                    {isSmScreen ? (
                      <CottageIcon fontSize="large" />
                    ) : (
                      <Typography variant="h6" noWrap component="div" color="inherit">
                        DataDrip
                      </Typography>
                    )}
                  </Button>
                </Link>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', }}>
                <Box sx={{ mr: { xs: 0, sm: 2 } }}>
                  <SearchMobile />
                </Box>
                {/* <Tooltip title="Reading List"> */}
                  <IconButton color="inherit" onClick={() => setSettingsOpen(true)} sx={{ px: '8px', borderRadius: '4px', }}>
                    <LibraryBooksIcon fontSize="small" color="inherit"  />
                  </IconButton>
                {/* </Tooltip> */}
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
  
