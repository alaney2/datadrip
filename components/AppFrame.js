import * as React from 'react';
import NextLink from 'next/link';
import { styled, alpha } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import SkipLink from './SkipLink';
import GlobalStyles from '@mui/material/GlobalStyles';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Tooltip from '@mui/material/Tooltip';
import { Toolbar, AppBar, IconButton } from '@mui/material';
import Box from '@mui/material/Box';
import SettingsIcon from '@mui/icons-material/SettingsOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import Stack from '@mui/material/Stack';
import SettingsDrawer from '@/components/NavBar/SettingsDrawer';
import SearchBar from '@/components/NavBar/SearchBar';

const GrowingDiv = styled('div')({
  flex: '1 1 auto',
});

const NavIconButton = styled(IconButton, {
  shouldForwardProp: (prop) => prop !== 'disablePermanent',
})(({ disablePermanent, theme }) => {
  if (disablePermanent) {
    return {};
  }
  return {
    [theme.breakpoints.up('lg')]: {
      display: 'none',
    },
  };
});

// const StyledAppNavDrawer = styled(AppNavDrawer)(({ disablePermanent, theme }) => {
//   if (disablePermanent) {
//     return {};
//   }
//   return {
//     [theme.breakpoints.up('lg')]: {
//       flexShrink: 0,
//       width: 'var(--MuiDocs-navDrawer-width)',
//     },
//   };
// });

export default function AppFrame(props) {
  // const { children, disableDrawer = false, className, BannerComponent = AppFrameBanner } = props;

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [settingsOpen, setSettingsOpen] = React.useState(false);


  return (
    <>
      <CssBaseline />
      <SkipLink />
      <AppBar >
        <GlobalStyles
          styles={{
            ':root': {
              '--MuiDocs-header-height': '64px',
            },
          }}
        />
        <Toolbar variant="dense" disableGutters>
          <NavIconButton
            edge="start"
            color="primary"
            aria-label="Open Drawer"
            onClick={() => setMobileOpen(true)}
            sx={{ ml: '1px' }}
          >
            <MenuIcon />
          </NavIconButton>
          
          <GrowingDiv />
          <Stack direction="row" spacing="10px">
            <SearchBar />
            <Tooltip title="Toggle Settings" enterDelay={300}>
              <IconButton color="primary" onClick={() => setSettingsOpen(true)} sx={{ px: '8px' }}>
                <SettingsIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          </Stack>
        </Toolbar>
      </AppBar>
      {/* <StyledAppNavDrawer
        disablePermanent={disablePermanent}
        onClose={() => setMobileOpen(false)}
        onOpen={() => setMobileOpen(true)}
        mobileOpen={mobileOpen}
      /> */}
      {/* {children} */}
      <SettingsDrawer onClose={() => setSettingsOpen(false)} open={settingsOpen} />
    </>
  );
}
