import * as React from 'react';
import Link from 'next/link';
import { 
  AppBar, 
  Box, 
  Button, 
  Container, 
  CssBaseline, 
  IconButton, 
  Slide, 
  Toolbar, 
  Tooltip, 
  Typography, 
  useScrollTrigger,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SettingsIcon from '@mui/icons-material/SettingsOutlined';
import SettingsDrawer from '@/components/NavBar/SettingsDrawer';
import SearchBar from '@/components/NavBar/SearchBar';
import MenuComponent from '@/components/NavBar/MenuComponent';


function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function NavBar(props) {
  const [settingsOpen, setSettingsOpen] = React.useState(false);

  const [menuAnchorEl, setMenuAnchorEl] = React.useState(null);

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
            <Toolbar>
              <Container maxWidth="xl">
                <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <IconButton
                      size="large"
                      edge="start"
                      color="inherit"
                      aria-label="open drawer"
                      sx={{ mr: 2 }}
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
                      <Button variant="text" color="inherit">
                        <Typography
                          variant="h6"
                          noWrap
                          component="div"
                        >
                          DataDrip
                        </Typography>
                      </Button>
                    </Link>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <SearchBar />
                    <Tooltip title="Toggle Settings">
                      <IconButton color="inherit" onClick={() => setSettingsOpen(true)} sx={{ px: '8px' }}>
                        <SettingsIcon fontSize="small" color="inherit" />
                      </IconButton>
                    </Tooltip>
                  </Box>
                </Box>
              </Container>
            </Toolbar>
          </AppBar>
        </HideOnScroll>
      <Toolbar />
      <SettingsDrawer onClose={() => setSettingsOpen(false)} open={settingsOpen} />
      <MenuComponent
        anchorEl={menuAnchorEl}
        open={Boolean(menuAnchorEl)}
        onClose={handleMenuClose}
      />
    </Box>
  );
}
