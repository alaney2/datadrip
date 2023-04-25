import React, { useContext, useEffect, useState } from 'react';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import { ReadingListContext } from '@/components/ReadingListContext';
import Box from '@mui/material/Box';


export default function ReadingListButton({ item, fontSize="medium", color="inherit" }) {
  const { addToReadingList, removeFromReadingList, isInReadingList } = useContext(ReadingListContext);
  const [isInList, setIsInList] = useState(isInReadingList(item));

  // const isInList = isInReadingList(item);

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
      {isInList ? <BookmarkAddedIcon color="primary" fontSize={fontSize} /> : <BookmarkAddIcon fontSize={fontSize} color={color} />}
    </Box>
  );
};
