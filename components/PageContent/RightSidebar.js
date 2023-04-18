import * as React from 'react';
import { useRouter } from 'next/router';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

export default function RightSidebar({ headings }) {
  const router = useRouter();

  const handleHeadingClick = (slug) => {
    router.push(`#${slug}`);
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
        <ListItem>
          <Typography variant="h6" gutterBottom>
            Contents
          </Typography>
        </ListItem>
        <Divider />

        {headings.map((heading) => (
          <ListItem key={heading.slug} disablePadding>
            <ListItemButton
              onClick={() => handleHeadingClick(heading.slug)}
              sx={{
                pl: (heading.depth - 2) * 2, // Indent based on heading level
              }}
            >
              <ListItemText
                primary={heading.text}
                primaryTypographyProps={{
                  variant: 'subtitle1', // Set the same font size for all headings
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
