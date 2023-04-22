import * as React from 'react';
import { useRouter } from 'next/router';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import ReadingListButton from '@/components/PageContent/ReadingListButton';
import { ButtonBase } from '@mui/material';

// Custom ListItemButton component with no ripple effect
function NoRippleListItemButton({ children, onClick, sx }) {
  return (
    <ListItemButton
      onClick={onClick}
      sx={{
        '& .MuiTouchRipple-root': {
          display: 'none', // Disable ripple effect
        },
        ...sx,
      }}
    >
      <ButtonBase disableRipple>{children}</ButtonBase>
    </ListItemButton>
  );
}

export default function Prerequisites({ prerequisites }) {
  const router = useRouter();
  const [prerequisitesExpanded, setPrerequisitesExpanded] = React.useState(true);

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
          <Typography variant="h6" gutterBottom>
            Prerequisites
          </Typography>
          <Box sx={{ ml: 1 }}>
            {prerequisitesExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </Box>
        </Box>
      </ListItem>
      <Collapse in={prerequisitesExpanded} timeout="auto" unmountOnExit>
        <List component="div">
          {prerequisites.map((prerequisite, index) => (
            <ListItem key={index} disablePadding>
              <NoRippleListItemButton onClick={() => router.push(`/${prerequisite.id}`)}>
                <ListItemText
                  primary={
                    <Typography variant="body2" sx={{ py: 0, pl: 0 }}>
                      {prerequisite.title}
                    </Typography>
                  }
                />
              </NoRippleListItemButton>
              <ReadingListButton item={prerequisite} />
            </ListItem>
          ))}
        </List>
      </Collapse>
    </>
  );
}
