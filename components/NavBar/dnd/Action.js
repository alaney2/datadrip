import React, { forwardRef } from 'react';
import clsx from 'clsx';
import styles from './Action.module.css';

export const Action = forwardRef(({ active, className, cursor, style, ...props }, ref) => {
  return (
    <button
      ref={ref}
      {...props}
      className={clsx(styles.Action, className)}
      tabIndex={0}
      style={{
        ...style,
        cursor,
        '--fill': active?.fill,
        '--background': active?.background,
      }}
    />
  );
});

Action.displayName = 'Action';