import React, {forwardRef} from 'react';
import clsx from 'clsx';
import styles from './List.module.css';


export const List = forwardRef(({children, columns = 1, horizontal, style}, ref) => {
    return (
      <ul
        ref={ref}
        style={{
          ...style,
          '--columns': columns,
        }}
        className={clsx(styles.List, horizontal && styles.horizontal)}
      >
        {children}
      </ul>
    );
  }
);

List.displayName = 'List';