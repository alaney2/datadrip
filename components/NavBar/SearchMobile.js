import React from 'react';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import { styled, alpha, useTheme } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const SearchMobileWrapper = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
}));

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  width: '100%',
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
  },
}));

export default function SearchMobile() {
  const [showSearchInput, setShowSearchInput] = React.useState(false);
  const [searchIconColor, setSearchIconColor] = React.useState('inherit');
  const theme = useTheme();

  const inputRef = React.useRef();

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      inputRef.current.blur();
      setShowSearchInput(false);
    }
  };

  const handleSearchIconClick = () => {
    setShowSearchInput(true);
    setSearchIconColor(theme.palette.background.default); // Set searchIconColor to background color
  };

  const handleCloseIconClick = () => {
    setShowSearchInput(false);
    setSearchIconColor('inherit'); // Reset searchIconColor to 'inherit'
  };

  React.useEffect(() => {
    if (showSearchInput) {
      inputRef.current?.focus();
    } else {
      inputRef.current?.blur();
    }
  }, [showSearchInput]);

  return (
    <SearchMobileWrapper>
      {!showSearchInput && (
        <IconButton color="inherit" onClick={handleSearchIconClick}>
          <SearchIcon />
        </IconButton>
      )}
      {showSearchInput && (
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder=""
            inputProps={{ 'aria-label': 'search' }}
            inputRef={inputRef}
            onKeyDown={handleKeyDown}
          />
        </Search>
      )}
      {showSearchInput && (
        <Box sx={{ ml: 1 }}>
        <IconButton color="inherit" onClick={handleCloseIconClick}>
          <CloseIcon />
        </IconButton>
        </Box>
      )}
    </SearchMobileWrapper>
  );
}
