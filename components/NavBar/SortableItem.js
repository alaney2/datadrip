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


export function SortableItem({ handle=false, id, item, handleRemoveFromReadingList, isBeingDragged }) {
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

  // const style = {
  //   transform: isBeingDragged ? `${CSS.Transform.toString(transform)} scale(1)` : CSS.Transform.toString(transform),
  //   backgroundColor: isBeingDragged ? lighten(theme.palette.background.paper, 0.1) : theme.palette.background.paper,
  //   color: isBeingDragged ? theme.palette.text.secondary : theme.palette.text.primary,
  //   borderRadius: '4px',
  //   marginBottom: '4px',
  //   padding: '4px',
  //   boxShadow: isBeingDragged ? '0 4px 6px rgba(0, 0, 0, 0.1)' : 'none',
  //   zIndex: isBeingDragged ? 2 : 1,
  //   // transition: transition || 'none',
  // };

  const style = {
    transform: isBeingDragged ? `${CSS.Transform.toString(transform)} scale(1.0)` : CSS.Transform.toString(transform),
    backgroundColor: theme.palette.background.paper,
    color: isBeingDragged ? theme.palette.text.secondary : theme.palette.text.primary,
    // color: isSorting ? theme.palette.text.secondary : theme.palette.text.primary,
    // color: isSorting ? theme.palette.background.paper : theme.palette.text.primary,
    borderRadius: '4px',
    marginBottom: '4px',
    padding: '4px',
    boxShadow: isBeingDragged ? '0 4px 6px rgba(0, 0, 0, 0.1)' : 'none',
    zIndex: isBeingDragged ? 2 : 1,
    // transition: transition || 'none',
  };

  const dragHandleListeners = {
    ...listeners,
    onClick: null,
  };

  const dragIndicatorStyle = {
    cursor: 'grab',
    // marginRight: '8px',
  };

  const handleClick = () => {
    router.push(`/${item.id}`);
  };

  return (
    <ListItem ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <ListItemButton onClick={handleClick} sx={{...dragIndicatorStyle, }}>
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
      {handle && <DragIndicatorIcon sx={dragIndicatorStyle} {...dragHandleListeners} />}
    </ListItem>
  );
}
