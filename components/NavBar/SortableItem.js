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
import { useTheme, lighten } from '@mui/material/styles';


export function SortableItem({ id, item, handle=false, handleRemoveFromReadingList, animateLayoutChanges, isBeingDragged }) {
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
  } = useSortable({ id, animateLayoutChanges });
  const theme = useTheme();

  const style = {
    transform: isBeingDragged ? `${CSS.Transform.toString(transform)} scale(1.05)` : CSS.Transform.toString(transform),
    backgroundColor: theme.palette.background.paper,
    color: isBeingDragged ? theme.palette.text.secondary : theme.palette.text.primary,
    // color: isSorting ? theme.palette.text.secondary : theme.palette.text.primary,
    // color: isSorting ? theme.palette.background.paper : theme.palette.text.primary,
    borderRadius: '4px',
    marginBottom: '4px',
    padding: '4px',
    boxShadow: isBeingDragged ? '0 4px 6px rgba(0, 0, 0, 0.1)' : 'none',
    // zIndex: isBeingDragged ? 2 : 1,
    // transition: transition || 'none',
    transition: 'all 150ms ease', // Faster transition
  };

  const dragHandleListeners = {
    ...listeners,
    onClick: null,
  };

  const dragIndicatorStyle = {
    cursor: isBeingDragged ? 'grabbing' : 'grab',
  };

  const handleClick = () => {
    router.push(`/${item.id}`);
  };

  const listItemButtonStyle = {
    '&:hover': {
      backgroundColor: theme.palette.background.paper,
    },
  };  

  return (
    <ListItem ref={setNodeRef} style={style} {...attributes} {...listeners}>
        <ListItemButton 
          onClick={handleClick} 
          sx={{...dragIndicatorStyle, ...listItemButtonStyle}}
        >
          <ListItemText primary={item.title} />
        </ListItemButton>
        <IconButton
          edge="end"
          color="inherit"
          onClick={(e) => {
            e.stopPropagation();
            handleRemoveFromReadingList(item);
          }}
        >
          <CloseIcon />
        </IconButton>
      {handle && (
        <DragIndicatorIcon sx={dragIndicatorStyle} {...dragHandleListeners} />
      )}
    </ListItem>
  );
}
