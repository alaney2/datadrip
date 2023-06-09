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
import wikiConnections from '@/wiki-connections.json';


export default function Prerequisites({ prerequisites, defaultExpanded=false }) {
  const router = useRouter();
  const [prerequisitesExpanded, setPrerequisitesExpanded] = React.useState(defaultExpanded);

  const handlePrerequisitesClick = () => {
    setPrerequisitesExpanded(!prerequisitesExpanded);
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
          <Typography variant="h6" gutterBottom sx={{ color: 'primary.main' }} >
            Kickstarters
          </Typography>
          <Box sx={{ ml: 1 }}>
            {prerequisitesExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </Box>
        </Box>
      </ListItem>
      <Collapse in={prerequisitesExpanded} timeout="auto" unmountOnExit>
        <Divider />
        <List component="div">
          {prerequisites.map((prerequisite, index) => (
            <ListItem key={index} disablePadding sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Box sx={{ flexGrow: 1, alignItems: 'center', maxWidth: 'calc(100% - 48px)' }}>
              {wikiConnections[prerequisite.id] ? (
                <Link href={`/${prerequisite.id}`} passHref>
                  <ListItemButton
                    sx={{
                      width: '100%',
                      borderRadius: '4px',
                      pl: 1.5,
                      py: 0.5,
                      margin: 0.5,
                      '&:hover': {
                        backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.5),
                      },
                      ml: 0,
                    }}
                  >
                    <ListItemText
                      primary={prerequisite.title ? prerequisite.title : prerequisite.id}
                      primaryTypographyProps={{ variant: 'body2' }}
                      sx={{
                        overflow: 'hidden',
                      }}
                    />
                  </ListItemButton>
                </Link>
              ) : (
                <ListItemButton
                  sx={{
                    borderRadius: '4px',
                    pl: 1.5,
                    py: 0.5,
                    margin: 0.5,
                    '&:hover': {
                      backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.5),
                    },
                    ml: 0,
                  }}
                >
                  <ListItemText
                    primary={prerequisite.title ? prerequisite.title : prerequisite.id}
                    primaryTypographyProps={{ variant: 'body2' }}
                    sx={{
                      overflow: 'hidden',
                    }}
                  />
                </ListItemButton>
              )}
              </Box>
              <IconButton
                sx={{ 
                  marginRight: 1,
                }}
              >
                <ReadingListButton item={prerequisite} />
              </IconButton>
            </ListItem>
          ))}
        </List>
      </Collapse>
    </>
  );
}
