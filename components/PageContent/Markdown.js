import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeSlug from 'rehype-slug';
import Box from '@mui/material/Box';
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';
import Divider from '@mui/material/Divider';
import { useMediaQuery, Dialog, IconButton } from '@mui/material';
import { styled, alpha, useTheme } from '@mui/material/styles';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import SegmentIcon from '@mui/icons-material/Segment';
import Paper from '@mui/material/Paper';


export default function Markdown({ content, headings, filename, leftSidebar, rightSidebar }) {
  const [leftSidebarDialogOpen, setLeftSidebarDialogOpen] = React.useState(false);
  const [rightSidebarDialogOpen, setRightSidebarDialogOpen] = React.useState(false);
  const isMdScreen = useMediaQuery('(max-width:900px)');
  const isLgScreen = useMediaQuery('(max-width:1200px)');
  
  const handleRightSidebarItemClick = () => {
    setRightSidebarDialogOpen(false);
  };

  return (
    <Box
      sx={{
        minHeight: 'calc(100vh - 96px)',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box
        sx={{
          flexGrow: 1,
          display: 'grid',
          gridTemplateColumns: { 
            md: '240px 1fr ', 
            lg: '240px 1fr 240px', 
            xl: '320px 1fr 320px' 
          },
          mx: 'auto',
          px: { xs: 1, sm: 2 },
          maxWidth: { l: '1600px', xl: '1800px' },
          gap: '32px',
        }}
      >
        <Box 
          sx={{ 
            display: { xs: 'none', md: 'block' },
            ml: { xs: 1, sm: 0, md: 2, l: 2, xl: 4 } 
          }}
        >
          {leftSidebar && <LeftSidebar filename={filename} />}
        </Box>

        <Box
          sx={{
            mr: { xs: 0, sm: 0, md: 2, lg: 0 },
          }}
        >
          <ReactMarkdown rehypePlugins={[rehypeSlug]}>{content}</ReactMarkdown>
          
          {isLgScreen && !isMdScreen && (
            <Box
              sx={{
                borderRadius: '30px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Paper
                sx={{
                  position: 'fixed',
                  bottom: 16,
                  borderRadius: '30px',
                }}
                elevation={3}
              >
                <IconButton
                  color="inherit"
                  onClick={() => setRightSidebarDialogOpen(true)}
                  sx={{ mx: 1 }}
                >
                  <SegmentIcon />
                </IconButton>
              </Paper>

              <Dialog
                open={rightSidebarDialogOpen}
                onClose={() => setRightSidebarDialogOpen(false)}
                maxWidth="xs"
                fullWidth
                sx={{
                  position: 'fixed',
                  // left: dialogPositionLeft,
                  left: '120px',
                  transform: 'translateX(-25%)',
                  borderRadius: '16px',
                  width: '200%',
                  '.MuiPaper-root': {
                    borderRadius: '16px',
                  },
                }}
              >
                {rightSidebar && <RightSidebar headings={headings} onItemClick={handleRightSidebarItemClick} expandable={false} />}
              </Dialog>
            </Box>
          )}
        </Box>

        <Box 
          sx={{ 
            display: { xs: 'none', md: 'block' },
            mr: { xs: 1, sm: 0, l: 2, xl: 4 } 
          }}
        > 
          {rightSidebar && <RightSidebar headings={headings} />}
        </Box>
      </Box>

      <Divider sx={{ my: 4 }} />

      {isMdScreen && (
        <>
          <Paper
            sx={{
              position: 'fixed',
              bottom: 16,
              left: '50%',
              transform: 'translateX(-50%)',
              borderRadius: '30px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            elevation={3}
          >
            <IconButton
              color="inherit"
              onClick={() => setLeftSidebarDialogOpen(true)}
              sx={{ mx: 1 }}
            >
              <LibraryBooksIcon />
            </IconButton>
            <IconButton
              color="inherit"
              onClick={() => setRightSidebarDialogOpen(true)}
              sx={{ mx: 1 }}
            >
              <SegmentIcon />
            </IconButton>
          </Paper>
          <Dialog
            open={leftSidebarDialogOpen}
            onClose={() => setLeftSidebarDialogOpen(false)}
            maxWidth="xs"
            fullWidth
            sx={{
              borderRadius: '16px',
              '.MuiPaper-root': {
                borderRadius: '16px',
              },
            }}
          >
            {leftSidebar && <LeftSidebar filename={filename} defaultExpanded={true} />}
          </Dialog>
          <Dialog
            open={rightSidebarDialogOpen}
            onClose={() => setRightSidebarDialogOpen(false)}
            maxWidth="xs"
            fullWidth
            sx={{
              borderRadius: '16px',
              '.MuiPaper-root': {
                borderRadius: '16px',
              },
            }}
          >
            {rightSidebar && <RightSidebar headings={headings} onItemClick={handleRightSidebarItemClick} expandable={false} />}
          </Dialog>
        </>
      )}

    </Box>
  );
}
