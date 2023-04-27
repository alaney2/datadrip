import React from 'react';
import InputBase from '@mui/material/InputBase';
import { styled, useTheme } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Backdrop from '@mui/material/Backdrop';
import clsx from 'clsx';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.standard,
  }),
}));

const SearchMobileWrapper = styled('div')(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  zIndex: theme.zIndex.appBar + 2,
  backgroundColor: theme.palette.background.paper,
  borderRadius: '50px'
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: 0,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.standard,
  }),
  '& .MuiInputBase-input': {
    padding: theme.spacing(1),
  },
}));

export default function SearchMobile() {
  const [showSearchInput, setShowSearchInput] = React.useState(false);
  const [inputValue, setInputValue] = React.useState('');
  const inputRef = React.useRef();
  const searchIconRef = React.useRef();
  const wrapperRef = React.useRef();
  const theme = useTheme();

  const searchOpen = ({ theme }) => ({
    width: '100%',
  });
  const searchClosed = ({ theme }) => ({
    width: 0,
  });
  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      inputRef.current.blur();
      setShowSearchInput(false);
    }
  };
  const handleBlur = (e) => {
    if (e.relatedTarget !== searchIconRef.current && e.relatedTarget !== wrapperRef.current) {
      setShowSearchInput(false);
      inputRef.current.blur();
    }
  };
  const handleSearchIconClick = (e) => {
    setShowSearchInput(true);
  };
  const handleCloseIconClick = (e) => {
    setShowSearchInput(false);
    setInputValue('');
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  

  React.useEffect(() => {
    if (showSearchInput) {
      inputRef.current?.focus();
    } else {
      inputRef.current?.blur();
    }
  }, [showSearchInput]);

  return (

    <>
      <Backdrop
        open={showSearchInput}
        onClick={handleCloseIconClick}
        sx={{ 
          zIndex: theme.zIndex.appBar + 1,
        }}
      />
      <div>
      <SearchMobileWrapper ref={wrapperRef}>
        <Search
          className={clsx(
            showSearchInput ? searchOpen(theme) : searchClosed(theme)
          )}
        >
          <StyledInputBase
            placeholder="Search…"
            value={inputValue}
            inputProps={{ 'aria-label': 'search' }}
            inputRef={inputRef}
            onKeyDown={handleKeyDown}
            // onBlur={handleBlur}
            onChange={handleInputChange}
            style={{ width: showSearchInput ? '100%' : 0, }}
            startAdornment={
              showSearchInput ? (
                <SearchIcon ref={searchIconRef} sx={{ mx: 1, p: 0.2 }} onMouseDown={(e) => e.preventDefault()} />
              ) : null
            }
          />
        </Search>

        {showSearchInput ? (
          <IconButton
            onClick={handleCloseIconClick}
            sx={{ ml: 1, color: theme.palette.text.primary }}
          >
            <CloseIcon />
          </IconButton>
        ) : (
          <IconButton
            onClick={handleSearchIconClick}
            sx={{ ml: 1, color: theme.palette.text.primary }}
          >
            <SearchIcon />
          </IconButton>
        )}
      </SearchMobileWrapper>
      </div>
    </>
  );
}
          
