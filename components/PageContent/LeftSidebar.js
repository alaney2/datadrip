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
import { ReadingListContext } from '@/components/ReadingListContext';


export default function LeftSidebar({ filename }) {
  const { readingList } = React.useContext(ReadingListContext);

  const [relatedExpanded, setRelatedExpanded] = React.useState(false);

  const nameWithoutExtension = filename.slice(0, filename.lastIndexOf('.'));
  const pageObject = wikiConnections[nameWithoutExtension];

  const prerequisites = pageObject.prerequisites.map((id) => ({ ...wikiConnections[id], id }));
  const furtherReadings = pageObject.further_readings.map((id) => ({ ...wikiConnections[id], id }));

  React.useEffect(() => {
    const allRelatedItems = [...prerequisites, ...furtherReadings];

    if (allRelatedItems.some((relatedItem) => readingList.some((readingListItem) => readingListItem.id === relatedItem.id))) {
      setRelatedExpanded(true);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleRelatedClick = () => {
    setRelatedExpanded(!relatedExpanded);
  };

  return (
    <Box
      sx={{
        display: { xs: 'none', md: 'block' },
        mt: { md: 8 },
        position: 'sticky',
        top: '64px',
        overflowY: 'auto',
        maxHeight: 'calc(100vh - 192px)',
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
