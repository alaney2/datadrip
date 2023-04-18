import * as React from 'react';
import { styled, useTheme, alpha } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';
import { useChangeTheme } from '@/components/ThemeContext';

const Heading = styled(Typography)(({ theme }) => ({
  margin: '20px 0 10px',
  color: theme.palette.grey[600],
  fontWeight: 700,
  fontSize: theme.typography.pxToRem(11),
  textTransform: 'uppercase',
  letterSpacing: '.08rem',
}));

const IconToggleButton = styled(ToggleButton)({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  '& > *': {
    marginRight: '8px',
  },
});

function SettingsDrawer(props) {
  const { onClose, open = false, ...other } = props;
  const changeTheme = useChangeTheme();
  const [mode, setMode] = React.useState(null);
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const preferredMode = prefersDarkMode ? 'dark' : 'light';

  React.useEffect(() => {
    // syncing with homepage, can be removed once all pages are migrated to CSS variables
    let initialMode = 'system';
    try {
      initialMode = localStorage.getItem('mui-mode') || initialMode;
    } catch (error) { }
    setMode(initialMode);
  
    // Update the theme based on the initial mode and user's system preference
    if (initialMode === 'system') {
      changeTheme({ paletteMode: preferredMode });
    } else {
      changeTheme({ paletteMode: initialMode });
    }
  }, [preferredMode, changeTheme]);
  
  const handleChangeThemeMode = (event, paletteMode) => {
    if (paletteMode === null) {
      return;
    }
    setMode(paletteMode);
    if (paletteMode === 'system') {
      localStorage.setItem('mui-mode', 'system'); // syncing with homepage, can be removed once all pages are migrated to CSS variables
      changeTheme({ paletteMode: preferredMode });
    } else {
      localStorage.setItem('mui-mode', paletteMode); // syncing with homepage, can be removed once all pages are migrated to CSS variables
      changeTheme({ paletteMode });
    }
  };

  return (
    <Drawer
      anchor="right"
      onClose={onClose}
      open={open}
      PaperProps={{
        elevation: 0,
        sx: { width: { xs: 310, sm: 360 }, borderRadius: '10px 0px 0px 10px' },
      }}
      {...other}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2 }}>
        <Typography variant="body1" fontWeight="500">
          Settings
        </Typography>
        <IconButton color="inherit" onClick={onClose} edge="end">
          <CloseIcon color="primary" fontSize="small" />
        </IconButton>
      </Box>
      <Divider />
      <Box sx={{ pl: 2, pr: 2 }}>
        <Heading gutterBottom id="settings-mode">
          Mode
        </Heading>
        <ToggleButtonGroup
          exclusive
          value={mode}
          color="primary"
          onChange={handleChangeThemeMode}
          aria-labelledby="settings-mode"
          fullWidth
        >
          <IconToggleButton
            value="light"
            aria-label="Light"
            data-ga-event-category="settings"
            data-ga-event-action="light"
          >
            <LightModeIcon fontSize="small" />
            Light
          </IconToggleButton>
          <IconToggleButton
            value="system"
            aria-label="System"
            data-ga-event-category="settings"
            data-ga-event-action="system"
          >
            <SettingsBrightnessIcon fontSize="small" />
            System
          </IconToggleButton>
          <IconToggleButton
            value="dark"
            aria-label="Dark"
            data-ga-event-category="settings"
            data-ga-event-action="dark"
          >
            <DarkModeOutlinedIcon fontSize="small" />
            Dark
          </IconToggleButton>
        </ToggleButtonGroup>
      </Box>
    </Drawer>
  );
}

export default SettingsDrawer;