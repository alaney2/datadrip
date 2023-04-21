import React, {useState} from 'react';
import {
  DndContext, 
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';

import {TestSortableItem} from './TestSortableItem';

export default function TestList() {
  const [items] = useState(['1', '2', '3']);
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  return (
    <DndContext sensors={sensors} collisionDetection={closestCenter}>
      <SortableContext 
        items={items}
        strategy={verticalListSortingStrategy}
        handle
      >
        {items.map(id => <TestSortableItem handle key={id} id={id} />)}
      </SortableContext>
    </DndContext>
  );
}