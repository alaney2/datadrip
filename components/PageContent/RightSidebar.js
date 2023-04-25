import React, { useRef, useEffect } from 'react';
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
        borderLeft: '2px solid transparent',
        ...(isCurrentHeading
          ? {
              borderLeft: '2px solid',
              borderColor: 'primary.main',
              color: 'primary.main',
            }
          : {
              '&:hover': {
                borderLeft: '2px solid',
                borderColor: 'text.primary',
                color: 'text.secondary',
              },
            }),
        ...sx,
      }}
    >
      {children}
    </Box>
  );
}

function debounce(func, wait) {
  let timeout;
  return function (...args) {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), wait);
  };
}

export default function RightSidebar({ headings, onItemClick=() => {}, expandable=true }) {
  const router = useRouter();
  const [contentsExpanded, setContentsExpanded] = React.useState(true);
  const [currentHeading, setCurrentHeading] = React.useState(null);
  const [isManualScroll, setIsManualScroll] = React.useState(false);

  const handleScrollStop = debounce(() => {
    let closestHeading = null;
    let smallestDistance = Infinity;
  
    headings.forEach((heading) => {
      const target = document.getElementById(heading.slug);
      if (!target) return;
      const distanceToTop = Math.abs(target.getBoundingClientRect().top);
  
      if (distanceToTop < smallestDistance) {
        smallestDistance = distanceToTop;
        closestHeading = heading.slug;
      }
    });
  
    setCurrentHeading(closestHeading);
  }, 10);

  const observer = useRef(null);
  useEffect(() => {
    if (isManualScroll) return;
    window.addEventListener('scroll', handleScrollStop);
    return () => {
      window.removeEventListener('scroll', handleScrollStop);
    };
  }, [handleScrollStop, isManualScroll]);
  
  useEffect(() => {
    const handleIntersection = (entries) => {
      if (isManualScroll) return;
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCurrentHeading(entry.target.id);
        }
      });
    };

    observer.current = new IntersectionObserver(handleIntersection, {
      rootMargin: '0px 0px -90% 0px', // Offset by the header height
      threshold: 1,
    });

    headings.forEach((heading) => {
      const target = document.getElementById(heading.slug);
      if (target) {
        observer.current.observe(target);
      }
    });

    return () => {
      // Clean up the observer when the component is unmounted
      if (observer.current) {
        headings.forEach((heading) => {
          const target = document.getElementById(heading.slug);
          if (target) {
            observer.current.unobserve(target);
          }
        });
      }
    };
  }, [headings, isManualScroll]);
  
  const handleHeadingClick = (slug) => {
    setIsManualScroll(true);
    if (observer.current) {
      observer.current.disconnect();
    }
    const target = document.getElementById(slug);
    if (!target) {
      setIsManualScroll(false);
      return;
    }
    // const targetPosition = target.getBoundingClientRect().top;
    // window.scrollTo({ top: window.scrollY + targetPosition - 64, behavior: 'smooth' });
    target.scrollIntoView({ behavior: 'smooth' });
    setCurrentHeading(slug);
    router.push(`#${slug}`);
    setTimeout(() => {
      setIsManualScroll(false);
      headings.forEach((heading) => {
        const target = document.getElementById(heading.slug);
        if (target) {
          observer.current.observe(target);
        }
      });
    }, 200);
  };

  const handleContentsClick = () => {
    setContentsExpanded(!contentsExpanded);
  };

  return (
    <Box
      sx={{
        mt: { md: '16vh' },
        position: 'sticky',
        top: '12vh',
        maxHeight: 'calc(100vh - 16vh - 12vh)',
        overflowY: 'auto',
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
            {
              expandable && (
                <Box sx={{ ml: 1 }}>
                  {contentsExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                </Box>
              )
            }
            {/* <Box sx={{ ml: 1 }}>
              {contentsExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </Box> */}
          </Box>
        </ListItem>
        <Divider />

        <Collapse in={contentsExpanded} timeout="auto" unmountOnExit>
          {headings.map((heading) => (
            <ListItem key={heading.slug} disablePadding>
              <CustomListItemButton
                onClick={() => {
                  handleHeadingClick(heading.slug);
                  onItemClick();
                }}
                sx={{
                  width: '100%',
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