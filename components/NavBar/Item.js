import React, {forwardRef} from 'react';

export const Item = forwardRef(({id, handleClick, ...props}, ref) => {
  return (
    <div {...props} ref={ref} onClick={() => handleClick(id)}>
      {id}
    </div>
  )
});

Item.displayName = 'Item';