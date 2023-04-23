import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#3f51b5', // Deep indigo for primary color
    },
    secondary: {
      main: '#ff9100', // Orange for secondary color
    },
    background: {
      default: '#f0f0f0', // Light gray for background
      paper: '#f5f5f5', // White for paper elements
    },
    text: {
      primary: '#3c3c3c', // Dark text
      secondary: 'rgba(0, 0, 0, 0.6)', // Lighter dark text
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif', // Font family
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 600,
    },
    h3: {
      fontWeight: 500,
    },
    // Other typography settings as required
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true, // Disable ripple effect for all buttons
      },
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#7c4dff', // Bright purple for primary color
    },
    secondary: {
      main: '#ff4081', // Pink for secondary color
    },
    background: {
      default: '#0A1929', // Dark gray for background
      paper: '#0A1929', // Darker gray for paper elements
    },
    text: {
      primary: 'rgba(212, 211, 211, 0.95)', // White text
      secondary: '#E7EBF0', // Lighter white text
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif', // Font family
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 600,
    },
    h3: {
      fontWeight: 500,
    },
    h4: {
      fontWeight: 500,
    },
    h5: {
      fontWeight: 500,
    },
    h6: {
      fontWeight: 500,
    },
    p: {
      fontWeight: 100,
    }
    // Other typography settings as required
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true, // Disable ripple effect for all buttons
      },
    },
    
  },
});

export { lightTheme, darkTheme };
