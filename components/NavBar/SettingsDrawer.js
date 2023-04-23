import * as React from 'react';
import { useRouter } from 'next/router';
import { styled, } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
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
import { ReadingListContext } from '@/components/ReadingListContext';
import ReadingList from '@/components/NavBar/ReadingList';
import { useTheme } from '@mui/material/styles';


const Heading = styled(Typography)(({ theme }) => ({
  margin: '30px 0px 10px',
  color: theme.palette.grey[600],
  fontWeight: 700,
  // fontSize: theme.typography.pxToRem(11),
  // textTransform: 'uppercase',
  letterSpacing: '.08rem',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}));

const IconToggleButton = styled(ToggleButton)({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  '& > *': {
    // marginRight: '8px',
  },
});

export default function SettingsDrawer(props) {
  const router = useRouter();
  const theme = useTheme();

  const { onClose, open = false, ...other } = props;
  const changeTheme = useChangeTheme();
  const [mode, setMode] = React.useState(null);
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const preferredMode = prefersDarkMode ? 'dark' : 'light';

  const { readingList, removeFromReadingList } = React.useContext(ReadingListContext);

  const handleRemoveFromReadingList = (item) => {
    removeFromReadingList(item);
  };

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
      localStorage.setItem('mui-mode', paletteMode);
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
        sx: { 
          width: { xs: 310, sm: 360 }, 
          borderRadius: '10px 0px 0px 10px',
        },
      }}
      {...other}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2, height: '64px' }}>
        <Typography variant="h6" fontWeight="600" sx={{letterSpacing: '.08rem',}}>
          Nook
        </Typography>
        <IconButton 
          onClick={onClose} 
          sx={{ 
            mr: { xs: 0, sm: 1 },
            borderRadius: '4px',
            '&:hover': {
              backgroundColor:
                theme.palette.mode === 'dark'
                  ? 'rgba(150, 100, 255, 0.1)' // Light purple color for dark mode
                  : 'rgba(255, 50, 50, 0.1)', // Red color for light mode
            },
          }}
        >
          <CloseIcon color="primary" fontSize="small" />
        </IconButton>
      </Box>
      <Divider />
      <Box sx={{ pl: 2, pr: 2 }}>
        <Heading gutterBottom >
          Mode
        </Heading>
        <ToggleButtonGroup
          exclusive
          value={mode}
          color="primary"
          onChange={handleChangeThemeMode}
          aria-labelledby="settings-mode"
          fullWidth
          sx={{ display: 'flex', justifyContent: 'space-evenly', p: 1, paddingTop: 2 }}
        >
          <IconToggleButton
            value="light"
            aria-label="Light"
            data-ga-event-category="settings"
            data-ga-event-action="light"
          >
            <LightModeIcon fontSize="small" sx={{ mr: 1}} />
            Light
          </IconToggleButton>
          <IconToggleButton
            value="system"
            aria-label="System"
            data-ga-event-category="settings"
            data-ga-event-action="system"
          >
            <SettingsBrightnessIcon fontSize="small" sx={{ mr: 1}} />
            System
          </IconToggleButton>
          <IconToggleButton
            value="dark"
            aria-label="Dark"
            data-ga-event-category="settings"
            data-ga-event-action="dark"
          >
            <DarkModeOutlinedIcon fontSize="small" sx={{ mr: 1}} />
            Dark
          </IconToggleButton>
        </ToggleButtonGroup>
      </Box>
      <Box sx={{ pl: 2, pr: 2 }}>
        <Heading gutterBottom >
          Reading List
          <Chip label={readingList.length} 
            sx={{ 
              // borderRadius: '8px',
              mr: 1,
              // backgroundColor: 'transparent' 
            }} 
          />
        </Heading>
        <ReadingList />
      </Box>
    </Drawer>
  );
}
