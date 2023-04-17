import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
import SettingsIcon from '@mui/icons-material/SettingsOutlined';
import Stack from '@mui/material/Stack';
import SettingsDrawer from '@/components/SettingsDrawer';
import SearchBar from '@/components/SearchBar';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export default function NavBar() {
  const [settingsOpen, setSettingsOpen] = React.useState(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {isSmallScreen && (
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
            )}
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: 'none', sm: 'block' } }}
            >
              DataDrip Cafe
            </Typography>
          </Box>

          <SearchBar />

          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Tooltip title="Toggle Settings">
              <IconButton color="inherit" onClick={() => setSettingsOpen(true)} sx={{ px: '8px' }}>
                <SettingsIcon fontSize="small" color="inherit" />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </AppBar>
      <SettingsDrawer onClose={() => setSettingsOpen(false)} open={settingsOpen} />
    </Box>
  );
}
