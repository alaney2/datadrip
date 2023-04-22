import React, { createContext, useContext, useMemo, useReducer } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme } from '@/styles/theme';

const DispatchContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE':
      return { ...state, ...action.payload };
    default:
      throw new Error('Unsupported action');
  }
};

export const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {});
  const prefersDarkMode = state.paletteMode === 'system'
    ? '(prefers-color-scheme: dark)'
    : state.paletteMode === 'dark';

  const theme = useMemo(() => prefersDarkMode ? darkTheme : lightTheme, [prefersDarkMode]);

  return (
    <DispatchContext.Provider value={dispatch}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </DispatchContext.Provider>
  );
};

export const useChangeTheme = () => {
  const dispatch = useContext(DispatchContext);
  return React.useCallback((options) => dispatch({ type: 'CHANGE', payload: options }), [dispatch]);
};
