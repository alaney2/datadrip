import React, { useContext, useEffect, useState } from 'react';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import { ReadingListContext } from '@/components/ReadingListContext';
import Box from '@mui/material/Box';
import SvgIcon from '@mui/material/SvgIcon';

const CustomBookmarkAddedIcon = React.memo((props) => (
  <SvgIcon {...props}>
    <path d="M21 7h-2v2h-2V7h-2V5h2V3h2v2h2v2zm-2 14-7-3-7 3V5c0-1.1.9-2 2-2h7c-.63.84-1 1.87-1 3 0 2.76 2.24 5 5 5 .34 0 .68-.03 1-.1V21z" />
    {/* <path d="M21 7h-2v2h-2V7h-2V5h2V3h2v2h2v2zm-2 14-7-3-7 3V5c0-1.1.9-2 2-2h7c-.63.84-1 1.87-1 3 0 2.76 2.24 5 5 5 .34 0 .68-.03 1-.1V21z" />" */}
  </SvgIcon>
));

CustomBookmarkAddedIcon.displayName = 'CustomBookmarkAddedIcon';

export default function ReadingListButton({ item, fontSize="medium", color="inherit" }) {
  const { addToReadingList, removeFromReadingList, isInReadingList } = useContext(ReadingListContext);
  const [isInList, setIsInList] = useState(isInReadingList(item));

  useEffect(() => {
    setIsInList(isInReadingList(item));
  }, [item, isInReadingList]);

  const handleClick = () => {
    if (isInList) {
      removeFromReadingList(item);
    } else {
      addToReadingList(item);
    }
  };

  return (
    <Box
      onClick={handleClick}
      sx={{ 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        borderRadius: '50%',
      }}
    >
      {!isInList ? <BookmarkAddIcon fontSize={fontSize} color={color} /> : <BookmarkAddedIcon color="primary" fontSize={fontSize} /> }
    </Box>
  );
};
