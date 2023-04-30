import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
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
import IconButton from '@mui/material/IconButton';


export default function FurtherReading({ furtherReadings, defaultExpanded=false }) {
  const router = useRouter();
  const [furtherReadingExpanded, setFurtherReadingExpanded] = React.useState(defaultExpanded);

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
          <Typography variant="h6" gutterBottom sx={{ color: 'primary.main' }} >
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
            <ListItem key={index} disablePadding sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Link href={`/${reading.id}`} passHref>
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
                  onClick={() => router.push(`/${reading.id}`)}
                >
                  <ListItemText
                    primary={reading.title ? reading.title : reading.id}
                    primaryTypographyProps={{ variant: 'body2' }}
                  />
                </ListItemButton>
              </Link>
              <IconButton
                sx={{
                  marginRight: 1,
                }}
              >
                <ReadingListButton item={reading} />
              </IconButton>
            </ListItem>
          ))}
        </List>
      </Collapse>
    </>
  );
}
