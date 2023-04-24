import React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Prerequisites from '@/components/PageContent/Prerequisites';
import FurtherReading from '@/components/PageContent/FurtherReading';
import wikiConnections from '@/wiki-connections.json';
import { ReadingListContext } from '@/components/ReadingListContext';

export default function LeftSidebar({ filename }) {
  const nameWithoutExtension = filename.slice(0, filename.lastIndexOf('.'));
  const pageObject = wikiConnections[nameWithoutExtension];

  const prerequisites = pageObject.prerequisites.map((id) => ({ ...wikiConnections[id], id }));
  const furtherReadings = pageObject.further_readings.map((id) => ({ ...wikiConnections[id], id }));

  return (
    <Box
      sx={{
        mt: { md: 8 },
        position: 'sticky',
        top: '64px',
        overflowY: 'auto',
        maxHeight: 'calc(100vh - 192px)',
      }}
    >
      <List>
        <Prerequisites prerequisites={prerequisites} />
        <Divider />
        <FurtherReading furtherReadings={furtherReadings} />
      </List>
    </Box>
  );
}
