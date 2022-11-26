import React from 'react';

import styles from './PrimaryButton.module.scss';

export default function PrimaryButton({
  title = 'None title',
  onClick = () => {},
}) {
  return (
    <button type='button' onClick={onClick} className={styles.primaryButton}>
      {title}
    </button>
  );
}
