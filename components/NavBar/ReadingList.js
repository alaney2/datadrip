import React, { useRef, useEffect } from 'react';
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
import { 
  DndContext, 
  closestCenter,
  DragOverlay, 
  MouseSensor,
  MeasuringStrategy,
  defaultDropAnimationSideEffects, 
  TouchSensor, 
  PointerSensor, 
  KeyboardSensor,
  useSensor, 
  useSensors,
} from '@dnd-kit/core';
import { 
  arrayMove, 
  SortableContext, 
  sortableKeyboardCoordinates, 
  verticalListSortingStrategy, 
  rectSortingStrategy,
} from '@dnd-kit/sortable';
import { SortableItem } from '@/components/NavBar/SortableItem';
import { RemovableItems } from './dnd/RemovableItems';
import { createPortal } from 'react-dom';


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
    useSensor(KeyboardSensor, {
      // Disable smooth scrolling in Cypress automated tests
      scrollBehavior: 'Cypress' in window ? 'auto' : undefined,
      sortableKeyboardCoordinates,
    })
  );
  const getIndex = (id) => readingList.indexOf(id);
  const getPosition = (id) => getIndex(id) + 1;
  const isFirstAnnouncement = useRef(true);

  const announcements = {
    onDragStart({active: {id}}) {
      return `Picked up sortable item ${String(
        id
      )}. Sortable item ${id} is in position ${getPosition(id)} of ${
        readingList.length
      }`;
    },
    onDragOver({active, over}) {
      // In this specific use-case, the picked up item's `id` is always the same as the first `over` id.
      // The first `onDragOver` event therefore doesn't need to be announced, because it is called
      // immediately after the `onDragStart` announcement and is redundant.
      if (isFirstAnnouncement.current === true) {
        isFirstAnnouncement.current = false;
        return;
      }
      if (over) {
        return `Sortable item ${
          active.id
        } was moved into position ${getPosition(over.id)} of ${readingList.length}`;
      }
      return;
    },
    
    onDragEnd({active, over}) {
      if (over) {
        return `Sortable item ${
          active.id
        } was dropped at position ${getPosition(over.id)} of ${readingList.length}`;
      }

      return;
    },
    onDragCancel({active: {id}}) {
      return `Sorting was cancelled. Sortable item ${id} was dropped and returned to position ${getPosition(
        id
      )} of ${readingList.length}.`;
    },
  };

  useEffect(() => {
    if (!activeId) {
      isFirstAnnouncement.current = true;
    }
  }, [activeId]);

  const screenReaderInstructions = {
    draggable: `
      To pick up a sortable item, press the space bar.
      While sorting, use the arrow keys to move the item.
      Press space again to drop the item in its new position, or press escape to cancel.
    `,
  };

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
    const { active, over } = event;
    if (over && active.id !== over.id) {
      setReadingList((currentList) => {
        const oldIndex = currentList.findIndex(item => item.id === active.id);
        const newIndex = currentList.findIndex(item => item.id === over.id);
        return arrayMove(currentList, oldIndex, newIndex);
      });
    }
    setActiveId(null);
  };

  const dropAnimationConfig = {
    sideEffects: defaultDropAnimationSideEffects({
      styles: {
        active: {
          opacity: '0.5',
        },
      },
    }),
  };

  return (
    <>
      <DndContext
        // accessibility={{
        //   announcements,
        //   screenReaderInstructions,
        // }}
        sensors={sensors}
        collisionDetection={closestCenter}
        modifiers={[restrictToVerticalAxis, restrictToWindowEdges, restrictToParentElement]}
        measuring={{droppable: {strategy: MeasuringStrategy.Always}}}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        // onDragCancel={() => setActiveId(null)}
      >
        <SortableContext items={readingList} strategy={rectSortingStrategy}>
          <List>
            {readingList.map((item, index) => (
              <SortableItem
                key={index}
                id={item.id}
                item={item}
                handleRemoveFromReadingList={handleRemoveFromReadingList}
                isBeingDragged={item.id === activeId}
              />
            ))}
          </List>
        </SortableContext>
        {createPortal(
          <DragOverlay
            // adjustScale={true}
            // dropAnimation={dropAnimationConfig}
          >
            {activeId ? (
              <SortableItem
                id={activeId}
                item={readingList.find(item => item.id === activeId)}
                isBeingDragged={true}
                handle={false}
              />
            ) : null}
          </DragOverlay>,
          document.body
        )}
      </DndContext>
      <RemovableItems />
    </>
  );
}
