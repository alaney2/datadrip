import * as React from 'react';
import { useRouter } from 'next/router';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import IconButton from '@mui/material/IconButton';
import { ReadingListContext } from '@/components/ReadingListContext';
import ReadingListButton from '@/components/PageContent/ReadingListButton';


export default function FurtherReading({ furtherReadings }) {
  const router = useRouter();
  const [furtherReadingExpanded, setFurtherReadingExpanded] = React.useState(true);
  const [addedPages, setAddedPages] = React.useState([]);

  const handleFurtherReadingClick = () => {
    setFurtherReadingExpanded(!furtherReadingExpanded);
  };

  const { readingList, addToReadingList, removeFromReadingList } = React.useContext(ReadingListContext);

  const handleAddToReadingList = (reading) => {
    if (readingList.includes(reading)) {
      removeFromReadingList(reading);
    } else {
      addToReadingList(reading);
    }
  };

  const isInReadingList = (id) => {
    return addedPages.includes(id) || readingList.some((item) => item.id === id);
  };

  return (
    <>
      <ListItem>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            cursor: 'pointer',
          }}
          onClick={handleFurtherReadingClick}
        >
          <Typography variant="h6" gutterBottom>
            Further Reading
          </Typography>
          <Box sx={{ ml: 1 }}>
            {furtherReadingExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </Box>
        </Box>
      </ListItem>
      <Collapse in={furtherReadingExpanded} timeout="auto" unmountOnExit>
        <List component="div" >
          {furtherReadings.map((reading, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton onClick={() => router.push(`/${reading.id}`)}>
                <ListItemText primary={reading.title} />
              </ListItemButton>
              <ReadingListButton item={reading} />
            </ListItem>
          ))}
        </List>
      </Collapse>
    </>
  );
}