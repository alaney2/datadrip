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

export default function Prerequisites({ prerequisites }) {
  const router = useRouter();
  const [prerequisitesExpanded, setPrerequisitesExpanded] = React.useState(true);
  const [addedPages, setAddedPages] = React.useState([]);

  const handlePrerequisitesClick = () => {
    setPrerequisitesExpanded(!prerequisitesExpanded);
  };

  const { addToReadingList, readingList } = React.useContext(ReadingListContext);

  const handleAddToReadingList = (prerequisite) => {
    addToReadingList(prerequisite);
    setAddedPages((prevAddedPages) => [...prevAddedPages, prerequisite.id]);
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
          onClick={handlePrerequisitesClick}
        >
          <Typography variant="h6" gutterBottom>
            Prerequisites
          </Typography>
          <Box sx={{ ml: 1 }}>
            {prerequisitesExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </Box>
        </Box>
      </ListItem>
      <Collapse in={prerequisitesExpanded} timeout="auto" unmountOnExit>
        <List component="div">
          {prerequisites.map((prerequisite, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton onClick={() => router.push(`/${prerequisite.id}`)}>
                <ListItemText primary={prerequisite.title} />
              </ListItemButton>
              <IconButton
                edge="end"
                color="inherit"
                onClick={() => handleAddToReadingList(prerequisite)}
              >
                {isInReadingList(prerequisite.id) ? <BookmarkAddedIcon /> : <BookmarkAddIcon />}
              </IconButton>
            </ListItem>
          ))}
        </List>
      </Collapse>
    </>
  );
}
