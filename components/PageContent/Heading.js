import React from 'react';
import { useRouter } from 'next/router';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ReadingListButton from '@/components/PageContent/ReadingListButton';
import TagRoundedIcon from '@mui/icons-material/TagRounded';
import wikiConnections from '@/wiki-connections.json';
import IconButton from '@mui/material/IconButton';
import { getPageObject } from '@/components/utilities';

function Heading({ level, children, filename, slug }) {
  const router = useRouter();
  const nameWithoutExtension = filename.slice(0, filename.lastIndexOf('.'));

  const handleHeadingClick = (slug) => {
    const element = document.getElementById(slug);
    router.push(`#${slug}`);
    
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const fontSizeMap = {
    1: '2.25rem',
    2: '1.75rem',
    3: '1.5rem',
    4: '1.25rem',
    5: '1rem',
    6: '0.875rem',
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      sx={{
        pt: level === 1 ? 2 : 1,
        mt: {
          xs: level === 1 ? 2 : 1,
          md: level === 1 ? 3 : 2,
          lg: level === 1 ? 4 : 3,
          xl: level === 1 ? 5 : 4,
        },
        mb: level === 1 ? 1 : 0,
        '&:hover .MuiIconButton-root': {
          visibility: 'visible',
        },
        '&:hover .MuiSvgIcon-root': {
          visibility: 'visible',
        },
      }}
    >
      <Typography
        id={slug}
        variant={`h${level}`}
        component={`h${level}`}
        sx={{ fontSize: fontSizeMap[level] }}
      >
        {children}
      </Typography>
      {level === 1 ? (
        <IconButton sx={{ ml: 3, visibility: 'hidden' }}>
          <ReadingListButton item={getPageObject(nameWithoutExtension)} fontSize="medium" />
        </IconButton>
      ) : (
        <IconButton 
          sx={{ 
            ml: 2, 
            visibility: 'hidden', 
            cursor: 'pointer',
            '&:hover': {
              backgroundColor: 'transparent',
            },
          }}
        onClick={() => handleHeadingClick(slug)}
        >
          <TagRoundedIcon
            fontSize="medium"
          />
        </IconButton>

      )}
    </Box>
  );
}

export default Heading;
