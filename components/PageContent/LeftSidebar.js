import React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import Prerequisites from '@/components/PageContent/Prerequisites';
import FurtherReading from '@/components/PageContent/FurtherReading';
import wikiConnections from '@/wiki-connections.json';


export default function LeftSidebar({ filename, defaultExpanded=false }) {
  const nameWithoutExtension = filename.slice(0, filename.lastIndexOf('.'));
  const pageObject = wikiConnections[nameWithoutExtension];

  const prerequisites = pageObject.prerequisites.map((id) => ({ ...wikiConnections[id], id }));
  const furtherReadings = pageObject.further_readings.map((id) => ({ ...wikiConnections[id], id }));

  return (
    <Box
      sx={{
        mt: { md: 24 },
        position: 'sticky',
        top: 128,
        maxHeight: 'clamp(320px, calc(100vh - 320px), 100vh)',
        overflowY: 'auto',
      }}
    >
      <List>
        <Prerequisites prerequisites={prerequisites} defaultExpanded={defaultExpanded} />
        <Divider />
        <FurtherReading furtherReadings={furtherReadings} defaultExpanded={defaultExpanded} />
      </List>
    </Box>
  );
}
