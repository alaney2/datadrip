import * as React from 'react';
import { useRouter } from 'next/router';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';

function CustomListItemButton({ children, onClick, sx, isCurrentHeading }) {
  return (
    <Box
      onClick={onClick}
      sx={{
        cursor: 'pointer',
        py: 0,
        my: 0.5,
        borderLeft: '2px solid transparent', // Add a transparent left border
        ...(isCurrentHeading
          ? {
              borderLeft: '2px solid', // Add a visible left border if the current heading
              borderColor: 'primary.main', // Set the border color
              color: 'primary.main', // Set font color
            }
          : {
              '&:hover': {
                borderLeft: '2px solid', // Add a visible left border on hover
                borderColor: 'text.primary', // Set the border color
                color: 'text.secondary', // Set font color to whiter when hovering
              },
            }),
        ...sx,
      }}
    >
      {children}
    </Box>
  );
}

export default function RightSidebar({ headings }) {
  const router = useRouter();
  const [contentsExpanded, setContentsExpanded] = React.useState(true);
  const [currentHeading, setCurrentHeading] = React.useState(null);

  const headingRefs = React.useRef(new Map());

  const handleHeadingClick = (slug) => {
    router.push(`#${slug}`);
    setCurrentHeading(slug);
  };

  const handleContentsClick = () => {
    setContentsExpanded(!contentsExpanded);
  };

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting);
        if (visibleEntry) {
          setCurrentHeading(visibleEntry.target.id);
        }
      },
      {
        rootMargin: '0px 0px 0px 0px',
      }
    );

    headings.forEach((heading) => {
      const el = document.getElementById(heading.slug);
      if (el) {
        headingRefs.current.set(heading.slug, el);
        observer.observe(el);
      }
    });

    const headingsRefCurrent = headingRefs.current;

    return () => {
      headings.forEach((heading) => {
        const el = headingsRefCurrent.get(heading.slug);
        if (el) {
          observer.unobserve(el);
        }
      });
      headingsRefCurrent.clear();
    };
  }, [headings]);

  return (
    <Box
      sx={{
        display: { xs: 'none', md: 'block' },
        mt: { md: 8 },
        position: 'sticky',
        top: '64px',
        maxHeight: 'calc(100vh - 192px)', // Set maxHeight to viewport height minus the header height
        overflowY: 'auto', // Enable vertical scrolling
      }}
    >
      <List>
        <ListItem>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              cursor: 'pointer',
            }}
            onClick={handleContentsClick}
          >
            <Typography variant="h6" gutterBottom>
              Contents
            </Typography>
            <Box sx={{ ml: 1 }}>
              {contentsExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
           
              </Box>
          </Box>
        </ListItem>
        <Divider />

        <Collapse in={contentsExpanded} timeout="auto" unmountOnExit>
          {headings.map((heading) => (
            <ListItem key={heading.slug} disablePadding>
              <CustomListItemButton
                onClick={() => handleHeadingClick(heading.slug)}
                sx={{
                  pl: (heading.depth - 2) * 2,
                  color: currentHeading === heading.slug ? 'primary.main' : null,
                  borderColor: currentHeading === heading.slug ? 'primary.main' : null,
                }}
                isCurrentHeading={currentHeading === heading.slug}
              >
                <Box
                  component={ListItemText}
                  primary={heading.text}
                  primaryTypographyProps={{
                    variant: 'body2',
                  }}
                />
              </CustomListItemButton>
            </ListItem>
          ))}
        </Collapse>
      </List>
    </Box>
  );
}
