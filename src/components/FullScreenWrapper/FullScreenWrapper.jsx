import React, { useLayoutEffect, useState } from 'react';

import styles from './FullScreenWrapper.module.scss';

export default function FullScreenWrapper({
  isOpen = false,
  clickOutsideToHide = true,
  children = '',
}) {
  const [open, setOpen] = useState(isOpen);

  useLayoutEffect(() => {
    if (!clickOutsideToHide) {
      setOpen(isOpen);
    }
  }, [isOpen]);

  function handleClick(e) {
    e.stopPropagation();

    if (clickOutsideToHide) setOpen(!open);
  }

  return (
    <div
      onClick={handleClick}
      onKeyDown={() => {}}
      className={styles.container}
      style={{
        visibility: open ? 'visible' : 'hidden',
      }}
    >
      <div className={styles.wrapper} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}
