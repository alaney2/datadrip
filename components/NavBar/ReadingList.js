import React, { useRef, useEffect } from 'react';
import List from '@mui/material/List';
import { ReadingListContext } from '@/components/ReadingListContext';
import {
  restrictToWindowEdges,
  restrictToVerticalAxis,
  restrictToFirstScrollableAncestor,
  restrictToParentElement
} from '@dnd-kit/modifiers';
import { DndContext, closestCenter, DragOverlay, MouseSensor, TouchSensor, PointerSensor, KeyboardSensor, useSensor, useSensors } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy, sortableKeyboardCoordinates } from '@dnd-kit/sortable';
import { SortableItem } from '@/components/NavBar/SortableItem';
import { arrayMove } from '@dnd-kit/sortable';
import {createPortal} from 'react-dom';


const screenReaderInstructions = {
  draggable: `
    To pick up a sortable item, press the space bar.
    While sorting, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `,
};

export default function ReadingList() {
  const { readingList, removeFromReadingList, setReadingList } = React.useContext(ReadingListContext);
  const [activeId, setActiveId] = React.useState(null);
  const isFirstAnnouncement = useRef(true);
  const getIndex = (id) => readingList.indexOf(id);
  const getPosition = (id) => getIndex(id) + 1;

  const announcements = {
    onDragStart({active: {id}}) {
      return `Picked up sortable item ${String(
        id
      )}. Sortable item ${id} is in position ${getPosition(id)} of ${
        readingList.length
      }`;
    },
    onDragOver({active, over}) {
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

  const activationConstraint = {
    delay: 100,
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
      scrollBehavior: 'Cypress' in window ? 'auto' : undefined,
      coordinateGetter: sortableKeyboardCoordinates,
    })
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
        accessibility={{
          announcements,
          screenReaderInstructions,
        }}
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
    </>
  );
}
