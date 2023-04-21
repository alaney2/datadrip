import React from 'react';
import {MeasuringStrategy, UniqueIdentifier} from '@dnd-kit/core';
import {restrictToWindowEdges} from '@dnd-kit/modifiers';
import {
  AnimateLayoutChanges,
  defaultAnimateLayoutChanges,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import {
  restrictToVerticalAxis,
  restrictToFirstScrollableAncestor,
} from '@dnd-kit/modifiers';

import {createRange} from './createRange';
import {Sortable} from './Sortable';

const props = {
  strategy: verticalListSortingStrategy,
  itemCount: 50,
};

export const RemovableItems = () => {
  const animateLayoutChanges = (args) =>
    defaultAnimateLayoutChanges({...args, wasDragging: true});

  return (
    // <Sortable
    //   {...props}
    //   activationConstraint={{
    //     delay: 250,
    //     tolerance: 5,
    //   }}
    // />
    // <Sortable
    //   {...props}
    //   animateLayoutChanges={animateLayoutChanges}
    //   measuring={{droppable: {strategy: MeasuringStrategy.Always}}}
    //   // removable
    //   modifiers={[restrictToVerticalAxis, restrictToWindowEdges]}
    //   handle
    // />
    <Sortable {...props} handle />
  );
};