import React from 'react';
import { useRouter } from 'next/router';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { useTheme } from '@mui/material/styles';


export function SortableItem({ handle=false, id, item, index, handleRemoveFromReadingList, isBeingDragged }) {
  const router = useRouter();
  const { 
    active, 
    attributes, 
    isDragging,
    isSorting, 
    listeners, 
    setNodeRef, 
    transform, 
    transition 
  } = useSortable({ id });
  const theme = useTheme();

  const style = {
    transform: isBeingDragged ? `${CSS.Transform.toString(transform)} scale(1.0)` : CSS.Transform.toString(transform),
    backgroundColor: theme.palette.background.paper,
    color: isBeingDragged ? theme.palette.text.secondary : theme.palette.text.primary,
    borderRadius: '4px',
    // marginBottom: '4px',
    // padding: '4px',
    boxShadow: isBeingDragged ? '0 4px 6px rgba(0, 0, 0, 0.1)' : 'none',
    zIndex: isBeingDragged ? 2 : 1,
  };

  const dragHandleListeners = {
    ...listeners,
    onClick: null,
  };

  const dragIndicatorStyle = {
    cursor: 'grab',
  };

  const handleClick = () => {
    router.push(`/${item.id}`);
  };

  return (
    <ListItem ref={setNodeRef} style={style} {...attributes} {...listeners} sx={{m: 0, p: 0}}>
      {/* <ListItemButton 
        onClick={handleClick} 
        sx={{
          ...dragIndicatorStyle,
          py: 0,
          // px: 2,
          // ml: '8px',
          m: 1.5,
          borderLeft: '2px solid transparent',
          '&:hover': {
            borderLeft: `2px solid ${theme.palette.primary.main}`,
            backgroundColor: 'transparent',
          },
        }}
      > */}
      <ListItemButton
        onClick={handleClick}
        sx={{
          ...dragIndicatorStyle,
          py: 0,
          px: 2,
          ml: '8px',
          m: 0,
          borderLeft: index % 2 === 0 ? `2px solid ${theme.palette.primary.main}` : '2px solid transparent', // Conditionally add border to every other item
          '&:hover': {
            backgroundColor: 'transparent',
          },
        }}
      >
        <ListItemText 
          primary={item.title} 
          sx={{
            m: 0,
            p: 0,
            '&:hover': {
              color: theme.palette.primary.main,
              backgroundColor: 'transparent',
            },
          }}
          primaryTypographyProps={{
            variant: 'body2',
          }}
        />
      </ListItemButton>
      <IconButton
        color="inherit"
        onClick={(e) => {
          e.stopPropagation();
          handleRemoveFromReadingList(item);
        }}
        sx={{
          borderRadius: '4px',
          '&:hover': {
            backgroundColor: 'transparent', // Removes the hover effect
          },
          '&:active': {
            backgroundColor: 'rgba(255, 192, 203, 0.1)', // Makes the background appear a little pink when clicked
          },
        }}
      >
        <CloseIcon />
      </IconButton>
      {handle && <DragIndicatorIcon sx={dragIndicatorStyle} {...dragHandleListeners} />}
    </ListItem>
  );
}
