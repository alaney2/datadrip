import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Collapse from '@mui/material/Collapse';
import Prerequisites from '@/components/PageContent/Prerequisites';
import FurtherReading from '@/components/PageContent/FurtherReading';
import wikiConnections from '@/wiki-connections.json';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export default function LeftSidebar({ filename }) {
  const [relatedExpanded, setRelatedExpanded] = React.useState(false);
  const nameWithoutExtension = filename.slice(0, filename.lastIndexOf('.'));
  const pageObject = wikiConnections[nameWithoutExtension];
  if (!pageObject) {
    return null;
  }
  const prerequisites = pageObject.prerequisites.map((id) => ({ ...wikiConnections[id], id }));
  const furtherReadings = pageObject.further_readings.map((id) => ({ ...wikiConnections[id], id }));

  
  const handleRelatedClick = () => {
    setRelatedExpanded(!relatedExpanded);
  };

  return (
    <Box
      sx={{
        flex: '0 0 320px',
        display: { xs: 'none', md: 'block' },
        mt: { md: 8 },
        position: 'sticky',
        top: '64px',
        overflowY: 'auto',
      }}
    >
      <List>
        {/* Related */}
        <ListItem >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              cursor: 'pointer',
            }}
            onClick={handleRelatedClick}
          >
            <Typography variant="h6" gutterBottom>
              Related
            </Typography>
            <Box sx={{ ml: 1 }}>
              {relatedExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </Box>
          </Box>
        </ListItem>
        <Divider />
        <Collapse in={relatedExpanded} timeout="auto" unmountOnExit>
          <Prerequisites prerequisites={prerequisites} />
          <FurtherReading furtherReadings={furtherReadings} />
          </Collapse>
        </List>
      </Box>
    );
  }
  
