import React, { createContext, useState } from 'react';


export const ReadingListContext = createContext();

export const ReadingListProvider = ({ children }) => {
  const [readingList, setReadingList] = useState([]);

  const addToReadingList = (item) => {
    setReadingList((prevList) => [...prevList, item]);
  };

  const removeFromReadingList = (item) => {
    setReadingList(readingList.filter((i) => i !== item));
  };

  return (
    <ReadingListContext.Provider 
      value={{ 
        readingList, 
        addToReadingList, 
        removeFromReadingList,
      }}
    >
      {children}
    </ReadingListContext.Provider>
  );
};
