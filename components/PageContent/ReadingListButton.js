import React, { useContext } from 'react';
import IconButton from '@mui/material/IconButton';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import { ReadingListContext } from '@/components/ReadingListContext';

export default function ReadingListButton({ item }) {
  const { addToReadingList, removeFromReadingList, isInReadingList } = useContext(ReadingListContext);

  const isInList = isInReadingList(item);

  const handleClick = () => {
    if (isInList) {
      removeFromReadingList(item);
    } else {
      addToReadingList(item);
    }
  };

  return (
    <IconButton onClick={handleClick}>
      {isInList ? <BookmarkAddedIcon /> : <BookmarkAddIcon />}
    </IconButton>
  );
};
