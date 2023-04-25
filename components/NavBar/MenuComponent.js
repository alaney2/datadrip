import React from 'react';
import Link from 'next/link';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import InfoIcon from '@mui/icons-material/Info';
import TimelineIcon from '@mui/icons-material/Timeline';
import BubbleChartIcon from '@mui/icons-material/BubbleChart';

export default function MenuComponent({ anchorEl, open, onClose }) {
  return (
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      sx={{
        '& .MuiPaper-root': {
          borderRadius: '8px',
          minWidth: '250px',
          backgroundColor: 'background.paper',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        },
      }}
    >
      <Link href="/graph" passHref>
        <MenuItem onClick={onClose} component="a">
          <ListItemIcon>
            <InfoIcon fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit">About</Typography>
        </MenuItem>
      </Link>
      <Link href="/graph" passHref>
        <MenuItem onClick={onClose} component="a">
          <ListItemIcon>
            <BubbleChartIcon fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit">Graph</Typography>
        </MenuItem>
      </Link>
      <Link href="/timeline" passHref>
        <MenuItem onClick={onClose} component="a">
          <ListItemIcon>
            <TimelineIcon fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit">Timeline</Typography>
        </MenuItem>
      </Link>
    </Menu>
  );
}
