import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeSlug from 'rehype-slug';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';
import 'katex/dist/katex.min.css';
import Box from '@mui/material/Box';
import LeftSidebar from '@/components/PageContent/LeftSidebar';
import RightSidebar from '@/components/PageContent/RightSidebar';
import Divider from '@mui/material/Divider';
import { useMediaQuery, Dialog, IconButton } from '@mui/material';
import { styled, alpha, useTheme } from '@mui/material/styles';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import SegmentIcon from '@mui/icons-material/Segment';
import Paper from '@mui/material/Paper';
import Slide from '@mui/material/Slide';
import ReadingListButton from '@/components/PageContent/ReadingListButton';
import Heading from '@/components/PageContent/Heading';
import { getPageObject } from '@/components/utilities';
import EditButton from '@/components/PageContent/EditButton';

function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = React.useState('up');
  const [scrollPosition, setScrollPosition] = React.useState(0);
  const prevScrollY = React.useRef(0);

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;
      setScrollDirection(prevScrollY.current > currentScrollY ? 'up' : 'down');
      setScrollPosition(currentScrollY);
      prevScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { scrollDirection, scrollPosition };
}

export default function Markdown({ content, headings, filename, leftSidebar, rightSidebar }) {
  const [leftSidebarDialogOpen, setLeftSidebarDialogOpen] = React.useState(false);
  const [rightSidebarDialogOpen, setRightSidebarDialogOpen] = React.useState(false);
  const isMdScreen = useMediaQuery('(max-width:900px)');
  const isLgScreen = useMediaQuery('(max-width:1200px)');
  const { scrollDirection, scrollPosition } = useScrollDirection();
  const theme = useTheme();
  const nameWithoutExtension = filename.slice(0, filename.lastIndexOf('.'));
  const editUrl = `https://github.com/alaney2/datadrip/blob/main/data/${filename}`;

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
            xs: '1fr',
            md: leftSidebar ? '240px 1fr' : '1fr', 
            lg: '240px 1fr 240px',
            xl: '320px 1fr 320px',
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
          <EditButton editUrl={editUrl} />
          <ReactMarkdown
            remarkPlugins={[remarkMath]}
            rehypePlugins={[rehypeSlug, rehypeKatex]}
            components={{
              h1: (props) => <Heading {...props} slug={props.id} filename={filename} />,
              h2: (props) => <Heading {...props} slug={props.id} filename={filename} />,
              h3: (props) => <Heading {...props} slug={props.id} filename={filename} />,
              h4: (props) => <Heading {...props} slug={props.id} filename={filename} />,
              h5: (props) => <Heading {...props} slug={props.id} filename={filename} />,
              h6: (props) => <Heading {...props} slug={props.id} filename={filename} />,
            }}
          >
          {/* <ReactMarkdown rehypePlugins={[rehypeSlug]} > */}
            {content}
          </ReactMarkdown>
          
          {isLgScreen && !isMdScreen && (
            <Box
              sx={{
                borderRadius: '30px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Slide direction="up" in={scrollDirection === 'up' || scrollPosition <= 0}>
                <Paper
                  sx={{
                    position: 'fixed',
                    bottom: 24,
                    borderRadius: '30px',
                    zIndex: theme.zIndex.tooltip,
                    boxShadow: theme.shadows[6],
                    bgcolor: alpha(theme.palette.text.secondary, 0.85),
                  }}
                  elevation={5}
                >
                  <IconButton
                    size="medium"
                    sx={{ 
                      mx: 1,
                      boxShadow: 0,
                    }}
                    disableRipple
                  >
                    <ReadingListButton item={getPageObject(nameWithoutExtension)} color="secondary" disableRipple={true} />
                  </IconButton>
                  <IconButton
                    size="medium"
                    onClick={() => setRightSidebarDialogOpen(!rightSidebarDialogOpen)}
                    sx={{ 
                      mx: 1,
                      boxShadow: 0,
                    }}
                    disableRipple
                  >
                    <SegmentIcon color="secondary"  />
                  </IconButton>
                </Paper>
              </Slide>

              <Dialog
                open={rightSidebarDialogOpen}
                onClose={() => setRightSidebarDialogOpen(false)}
                maxWidth="xs"
                fullWidth
                sx={{
                  position: 'fixed',
                  left: '120px',
                  transform: 'translateX(-25%)',
                  borderRadius: '16px',
                  width: '200%',
                  height: '100%',
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
            display: { xs: 'none', lg: 'block' },
            mr: { xs: 1, sm: 0, l: 2, xl: 4 } 
          }}
        > 
          {rightSidebar && <RightSidebar headings={headings} />}
        </Box>
      </Box>

      <Divider sx={{ my: 4 }} />

      {isMdScreen && (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Slide direction="up" in={scrollDirection === 'up' || scrollPosition <= 0}>
            <Paper
              sx={{
                position: 'fixed',
                bottom: 24,
                borderRadius: '30px',
                zIndex: theme.zIndex.tooltip,
                boxShadow: theme.shadows[6],
                bgcolor: alpha(theme.palette.text.secondary, 0.85),
              }}
              elevation={3}
            >
              <IconButton
                onClick={() => {
                  setLeftSidebarDialogOpen(!leftSidebarDialogOpen);
                  setRightSidebarDialogOpen(false);
                }}
                size="medium"
                sx={{ 
                  mx: 1,
                  boxShadow: 0,
                }}
                disableRipple
              >
                <LibraryBooksIcon color="secondary" />
              </IconButton>

              <IconButton
                size="medium"
                sx={{ 
                  mx: 1,
                  boxShadow: 0,
                }}
                disableRipple
              >
                <ReadingListButton color="secondary" item={getPageObject(nameWithoutExtension)} />
              </IconButton>

              <IconButton
                size="medium"
                onClick={() => {
                  setRightSidebarDialogOpen(!rightSidebarDialogOpen); 
                  setLeftSidebarDialogOpen(false);
                }}
                sx={{ 
                  mx: 1,
                  boxShadow: 0,
                }}
                disableRipple
              >
                <SegmentIcon color="secondary" />
              </IconButton>
            </Paper>
          </Slide>

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
              bottom: 48,
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
              bottom: 48,
            }}
          >
            {rightSidebar && <RightSidebar headings={headings} onItemClick={handleRightSidebarItemClick} expandable={false} />}
          </Dialog>
        </Box>
      )}
    </Box>
  );
}
