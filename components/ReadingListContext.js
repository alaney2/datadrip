import React, { createContext, useState, useEffect } from 'react';

export const ReadingListContext = createContext();

export const ReadingListProvider = ({ children }) => {
  const [readingList, setReadingList] = useState(() => {
    if (typeof window !== 'undefined') {
      const storedReadingList = localStorage.getItem('readingList');
      return storedReadingList ? JSON.parse(storedReadingList) : [];
    }
    return [];
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('readingList', JSON.stringify(readingList));
    }
  }, [readingList]);

  const addToReadingList = (item) => {
    setReadingList([...readingList, item]);
  };

  const removeFromReadingList = (itemToRemove) => {
    setReadingList(readingList.filter((item) => item.id !== itemToRemove.id));
  };

  const isInReadingList = (itemToCheck) => {
    return readingList.some((item) => item.id === itemToCheck.id);
  };


  return (
    <ReadingListContext.Provider
      value={{
        readingList,
        setReadingList,
        addToReadingList,
        removeFromReadingList,
        isInReadingList,
      }}
    >
      {children}
    </ReadingListContext.Provider>
  );
};
