import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useRouter } from 'next/router';
import { ReadingListContext } from '@/components/ReadingListContext';
// import {
//   AnimateLayoutChanges,
//   defaultAnimateLayoutChanges,
//   verticalListSortingStrategy,
// } from '@dnd-kit/sortable';
import {
  restrictToWindowEdges,
  restrictToVerticalAxis,
  restrictToFirstScrollableAncestor,
  restrictToParentElement
} from '@dnd-kit/modifiers';
import { DndContext, closestCenter, DragOverlay, MouseSensor, TouchSensor, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { SortableItem } from '@/components/NavBar/SortableItem';
import { arrayMove } from '@dnd-kit/sortable';
import { RemovableItems } from './dnd/RemovableItems';
import {createPortal} from 'react-dom';


export default function ReadingList() {
  const router = useRouter();
  const { readingList, removeFromReadingList, setReadingList } = React.useContext(ReadingListContext);
  const [activeId, setActiveId] = React.useState(null);
  // const sensors = useSensors(useSensor(PointerSensor));
  const activationConstraint = {
    delay: 250,
    tolerance: 5,
  }
  const sensors = useSensors(
    useSensor(MouseSensor, {
      activationConstraint,
    }),
    useSensor(TouchSensor, {
      activationConstraint,
    }),
    // useSensor(KeyboardSensor, {
    //   // Disable smooth scrolling in Cypress automated tests
    //   scrollBehavior: 'Cypress' in window ? 'auto' : undefined,
    //   coordinateGetter,
    // })
  );

  const handleRemoveFromReadingList = (item) => {
    removeFromReadingList(item);
  };

  const handleDragStart = (event) => {
    if (!event.active) {
      return;
    }

    setActiveId(event.active.id);
  };

  const handleDragEnd = (event) => {
    setActiveId(null);
    const { active, over } = event;
    if (over && active.id !== over.id) {
      setReadingList((currentList) => {
        const oldIndex = currentList.findIndex(item => item.id === active.id);
        const newIndex = currentList.findIndex(item => item.id === over.id);
        return arrayMove(currentList, oldIndex, newIndex);
      });
    }
  };

  return (
    <>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        modifiers={[restrictToVerticalAxis, restrictToWindowEdges, restrictToParentElement]}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        
      >
        <SortableContext items={readingList} strategy={verticalListSortingStrategy}>
          <List>
            {readingList.map((item, index) => (
              <SortableItem
                key={index}
                id={item.id}
                index={index}
                item={item}
                handleRemoveFromReadingList={handleRemoveFromReadingList}
                isBeingDragged={item.id === activeId}
              />
            ))}
          </List>
        </SortableContext>
        {/* {createPortal(
          <DragOverlay>
            {activeId ? (
              <SortableItem
                id={activeId}
                item={readingList.find(item => item.id === activeId)}
                isBeingDragged={true}
              />
            ) : null}
          </DragOverlay>
          , document.body
        )} */}
        <DragOverlay>
          {activeId ? (
            <SortableItem
              id={activeId}
              item={readingList.find(item => item.id === activeId)}
              isBeingDragged={true}
            />
          ) : null}
        </DragOverlay>
      </DndContext>
      {/* <RemovableItems /> */}
    </>
  );
}
