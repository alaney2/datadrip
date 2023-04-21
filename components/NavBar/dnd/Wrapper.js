import React from 'react';
import clsx from 'clsx';
import styles from './Wrapper.module.css';


export function Wrapper({children, center, style}) {
  return (
    <div
      className={clsx(styles.Wrapper, center && styles.center)}
      style={style}
    >
      {children}
    </div>
  );
}