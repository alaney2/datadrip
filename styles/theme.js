import { createTheme } from '@mui/material/styles';


const createCustomTheme = (mode, colors) => {
  return createTheme({
    palette: {
      mode: mode,
      primary: {
        main: colors.primary,
      },
      secondary: {
        main: colors.secondary,
      },
      background: {
        default: colors.backgroundDefault,
        paper: colors.backgroundPaper,
      },
      text: {
        primary: colors.textPrimary,
        secondary: colors.textSecondary,
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },  
    typography: {
      fontFamily: 'Roboto, Arial, sans-serif',
      h1: { fontWeight: 700 },
      h2: { fontWeight: 600 },
      h3: { fontWeight: 500 },
    },
    components: {
      MuiButtonBase: {
        defaultProps: {
          disableTouchRipple: true,
        },
      },
    },
    globals: {
      '@global': {
        '.MuiButtonBase-root': {
          '& .MuiTouchRipple-root': {
            display: 'none',
          },
          '&:hover': {
            backgroundColor: 'transparent !important',
            '@media (max-width: 899px)': {
              backgroundColor: 'inherit',
            },
          },
          '&:active': {
            backgroundColor: 'inherit',
            '@media (min-width: 900px)': {
              backgroundColor: 'transparent !important',
            },
          },
        },
        '&.Mui-focusVisible.MuiButtonBase-root': {
          '& .MuiTouchRipple-root': {
            display: 'block',
          },
        },
      },
    },
  });
};

const lightColors = {
  primary: '#765130',
  secondary: '#9a6a3f',
  backgroundDefault: '#f8f2ed',
  backgroundPaper: '#f9f5f1',
  textPrimary: '#3c3c3c',
  textSecondary: 'rgba(20, 20, 20, 0.6)',
};

const darkColors = {
  primary: '#7c4dff',
  secondary: '#a576ff',
  backgroundDefault: '#0A1929',
  backgroundPaper: '#0f263e',
  textPrimary: 'rgba(217, 217, 217, 0.95)',
  textSecondary: '#E7EBF0',
};

const lightTheme = createCustomTheme('light', lightColors);
const darkTheme = createCustomTheme('dark', darkColors);

export { lightTheme, darkTheme };
