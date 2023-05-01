import React from 'react';
import Link from 'next/link';
import InputBase from '@mui/material/InputBase';
import { styled, useTheme } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Backdrop from '@mui/material/Backdrop';
import clsx from 'clsx';
import wikiConnections from '@/wiki-connections.json';
import { matchSorter } from 'match-sorter'
import useAutocomplete from '@mui/base/useAutocomplete';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';


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
  borderRadius: '50px',
  // padding: '4px',
  padding: '0 4px',
  // border: `1px solid ${theme.palette.divider}`,
  // border: (props) => (props.showSearchInput ? `1px solid ${theme.palette.divider}` : 'none'),
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: 0,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.standard,
  }),
  '& .MuiInputBase-input': {
    // padding: theme.spacing(1),
    // padding: (props) => (props.showSearchInput ? theme.spacing(1) : 0),
    // paddingLeft: (props) => (props.style.width === '100%' ? theme.spacing(1) : 0),
  },
}));

const StyledList = styled(List)({
  padding: '16px 0',
  maxHeight: '400px',
  width: '300px',
  overflowY: 'auto',
});

const StyledListItem = styled(ListItem)(({ theme }) => ({
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
}));

const titles = Object.entries(wikiConnections).map(([key, value]) => ({
  title: value.title,
  link: `/${key}`,
}));


export default function SearchMobile() {
  const [showSearchInput, setShowSearchInput] = React.useState(false);
  const [inputValue, setInputValue] = React.useState('');
  const [noOptions, setNoOptions] = React.useState(false);
  const inputRef = React.useRef();
  const searchIconRef = React.useRef();
  const wrapperRef = React.useRef();
  const theme = useTheme();

  const getFilterOptions = (options, { inputValue }) =>
    matchSorter(options, inputValue, { keys: ['title'], threshold: matchSorter.rankings.CONTAINS });

  React.useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setShowSearchInput(false);
        setInputValue('');
      }
    };
  
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [])

  const {
    getRootProps,
    getInputProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
  } = useAutocomplete({
    id: 'search-mobile',
    options: titles,
    getOptionLabel: (option) => option.title,
    filterOptions: getFilterOptions,
    freeSolo: true,
    inputValue: inputValue,
    onInputChange: (event, newInputValue) => {
      setInputValue(newInputValue);
    },
  });

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

  const handleSearchIconClick = (e) => {
    setShowSearchInput(true);
  };

  const handleCloseIconClick = (e) => {
    setShowSearchInput(false);
    setInputValue('');
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    if (groupedOptions.length === 0 && event.target.value !== '') {
      setNoOptions(true);
    } else {
      setNoOptions(false);
    }
  };

  React.useEffect(() => {
    if (showSearchInput) {
      inputRef?.current?.focus();
    } else {
      inputRef?.current?.blur();
    }
  }, [showSearchInput]);


  return (
    <>
      {/* <Backdrop
        open={showSearchInput}
        onClick={handleCloseIconClick}
        sx={{ 
          zIndex: theme.zIndex.appBar + 1,
        }}
      /> */}
      <div>
        <SearchMobileWrapper ref={wrapperRef} showSearchInput={showSearchInput}>
          <Search
            className={clsx(
              showSearchInput ? searchOpen(theme) : searchClosed(theme)
            )}
          >
            <StyledInputBase
              placeholder={'Search…'}
              value={inputValue}
              inputProps={{ 'aria-label': 'search' }}
              showSearchInput={showSearchInput}
              inputRef={inputRef}
              onKeyDown={handleKeyDown}
              style={{ width: showSearchInput ? '100%' : 0, }}
              {...getInputProps({
                onKeyDown: (event) => {
                  if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
                    event.preventDefault();
                  }
                },
              })}
              // onChange={handleInputChange}
              startAdornment={
                showSearchInput ? (
                  <SearchIcon 
                    ref={searchIconRef} 
                    sx={{ mr: 1, p: 0.2 }} 
                    onMouseDown={(e) => e.preventDefault()} 
                  />
                ) : null
              }  
            />
          </Search>

          {showSearchInput ? (
            <IconButton
              onClick={handleCloseIconClick}
              sx={{ ml: 0, color: theme.palette.text.primary }}
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
        {groupedOptions.length > 0 ? (
          <div
            style={{
              position: 'absolute',
              top: '100%',
              zIndex: theme.zIndex.appBar + 3,
              // width: '100%',
              backgroundColor: theme.palette.background.paper,
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
              // borderRadius: theme.shape.borderRadius,
              borderRadius: 12,
            }}
          >
            <StyledList {...getListboxProps()}>
              {groupedOptions.map((option, index) => (
                <Link href={option.link} key={option.title} passHref>
                  <StyledListItem
                    key={option.title}
                    {...getOptionProps({ option, index })}
                  >
                    {option.title}
                  </StyledListItem>
                </Link>
              ))}
            </StyledList>
          </div>
        ) : null }
      </div>
    </>
  );
}
