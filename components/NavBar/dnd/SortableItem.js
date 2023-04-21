// import React, {useEffect, useRef, useState} from 'react';
// import {createPortal} from 'react-dom';

// import {
//   Active,
//   Announcements,
//   closestCenter,
//   CollisionDetection,
//   DragOverlay,
//   DndContext,
//   DropAnimation,
//   KeyboardSensor,
//   KeyboardCoordinateGetter,
//   Modifiers,
//   MouseSensor,
//   MeasuringConfiguration,
//   PointerActivationConstraint,
//   ScreenReaderInstructions,
//   TouchSensor,
//   UniqueIdentifier,
//   useSensor,
//   useSensors,
//   defaultDropAnimationSideEffects,
// } from '@dnd-kit/core';
// import {
//   arrayMove,
//   useSortable,
//   SortableContext,
//   sortableKeyboardCoordinates,
//   SortingStrategy,
//   rectSortingStrategy,
//   AnimateLayoutChanges,
//   NewIndexGetter,
// } from '@dnd-kit/sortable';


// import { Item } from './Item';


// export function SortableItem({
//   disabled,
//   animateLayoutChanges,
//   getNewIndex,
//   handle,
//   handleClick,
//   id,
//   index,
//   items,
//   onRemove,
//   style,
//   renderItem,
//   useDragOverlay,
//   wrapperStyle,
// }) {
//   const {
//     active,
//     attributes,
//     isDragging,
//     isSorting,
//     listeners,
//     overIndex,
//     setNodeRef,
//     setActivatorNodeRef,
//     transform,
//     transition,
//   } = useSortable({
//     id,
//     animateLayoutChanges,
//     disabled,
//     getNewIndex,
//   });

//   return (
//     <Item
//       ref={setNodeRef}
//       value={id}
//       disabled={disabled}
//       dragging={isDragging}
//       sorting={isSorting}
//       handle={handle}
//       handleProps={
//         handle
//           ? {
//               ref: setActivatorNodeRef,
//             }
//           : undefined
//       }
//       renderItem={renderItem}
//       index={index}
//       items={items}
//       style={style({
//         index,
//         id,
//         isDragging,
//         isSorting,
//         overIndex,
//       })}
//       onClick={handleClick ? () => handleClick(id) : undefined}
//       onRemove={onRemove ? () => onRemove(id) : undefined}
//       transform={transform}
//       transition={transition}
//       wrapperStyle={wrapperStyle?.({index, isDragging, active, id})}
//       listeners={listeners}
//       data-index={index}
//       data-id={id}
//       dragOverlay={!useDragOverlay && isDragging}
//       {...attributes}
//     />
//   );
// }
