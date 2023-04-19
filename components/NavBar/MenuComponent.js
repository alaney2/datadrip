// Menu.js
import React from 'react';
import Link from 'next/link';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function MenuComponent({ anchorEl, open, onClose }) {
  return (
    <Menu anchorEl={anchorEl} open={open} onClose={onClose}>
      <Link href="/about" passHref>
        <MenuItem onClick={onClose} component="a">
          About
        </MenuItem>
      </Link>
      <Link href="/" passHref>
        <MenuItem onClick={onClose} component="a">
          Graph
        </MenuItem>
      </Link>
      <Link href="/" passHref>
        <MenuItem onClick={onClose} component="a">
          Timeline
        </MenuItem>
      </Link>
    </Menu>
  );
}
