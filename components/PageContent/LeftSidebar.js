import * as React from 'react';
import { useRouter } from 'next/router';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

export default function LeftSidebar() {
  const router = useRouter();

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
        <ListItem>
          <Typography variant="h6" gutterBottom>
            Prerequisite
          </Typography>
        </ListItem>
        <Divider />
        {/* Add your links to different pages here */}
        <ListItem disablePadding>
          <ListItemButton onClick={() => router.push('/')}>
            <ListItemText primary="Page 1" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => router.push('/')}>
            <ListItemText primary="Page 2" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
}
