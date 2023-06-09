import React from 'react';
import Link from 'next/link';
import InputBase from '@mui/material/InputBase';
import { styled, useTheme } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Backdrop from '@mui/material/Backdrop';
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
  padding: '0 4px',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: 0,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.standard,
  }),
}));

const StyledList = styled(List)(({ theme }) => ({
  padding: '16px 0',
  maxHeight: '400px',
  width: '275px',

  overflowY: 'auto',
  border: (theme) => `1px solid ${theme.palette.primary.main}`,
  borderRadius: 12,
  backgroundColor: theme.palette.background.paper,
}));

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

  const inputRef = React.useRef();
  const searchIconRef = React.useRef();
  const wrapperRef = React.useRef();
  const outputRef = React.useRef();
  const theme = useTheme();

  const getFilterOptions = (options, { inputValue }) =>
    matchSorter(options, inputValue, { keys: ['title'], threshold: matchSorter.rankings.CONTAINS });

  React.useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target) && !outputRef.current) {
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
    getOptionLabel: (option) => option ? option.title : '',
    filterOptions: getFilterOptions,
    freeSolo: true,
    inputValue: inputValue,
    onInputChange: (event, newInputValue) => {
      setInputValue(newInputValue);
    },
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

  React.useEffect(() => {
    if (showSearchInput) {
      inputRef?.current?.focus();
    } else {
      inputRef?.current?.blur();
    }
  }, [showSearchInput]);

  return (
    <>
      <div>
        <SearchMobileWrapper ref={wrapperRef}>
          <Search>
            <StyledInputBase
              placeholder={'Search…'}
              value={inputValue}
              inputProps={{ 'aria-label': 'search' }}
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
            ref={outputRef}
            style={{
              position: 'absolute',
              top: '120%',
              zIndex: theme.zIndex.appBar + 3,
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