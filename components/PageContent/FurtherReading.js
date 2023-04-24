import React from 'react';
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
import Divider from '@mui/material/Divider';
import ReadingListButton from '@/components/PageContent/ReadingListButton';
import { alpha } from '@mui/material/styles';


export default function FurtherReading({ furtherReadings }) {
  const router = useRouter();
  const [furtherReadingExpanded, setFurtherReadingExpanded] = React.useState(false);

  const handleFurtherReadingClick = () => {
    setFurtherReadingExpanded(!furtherReadingExpanded);
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
            Deep Dive
          </Typography>
          <Box sx={{ ml: 1 }}>
            {furtherReadingExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </Box>
        </Box>
      </ListItem>
      <Collapse in={furtherReadingExpanded} timeout="auto" unmountOnExit>
        <Divider />
        <List component="div" >
          {furtherReadings.map((reading, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton
                sx={{
                  borderRadius: '4px',
                  pl: 1.5,
                  py: 0.5,
                  margin: 0.5,
                  '&:hover': {
                    backgroundColor: theme => alpha(theme.palette.primary.main, 0.5),
                  },
                  ml: 0,
                }}
                onClick={() => router.push(`/${prerequisite.id}`)}
              >
                <ListItemText 
                  primary={reading.title}
                  primaryTypographyProps={{ variant: 'body2' }}
                />
              </ListItemButton>
              <ReadingListButton item={reading} />
            </ListItem>
          ))}
        </List>
      </Collapse>
    </>
  );
}
