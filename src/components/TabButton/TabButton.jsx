import React from 'react';
import styles from './TabButton.module.scss';
import { ICON_GROUP, ICON_HOUSE, ICON_SETTING } from '../../assets/icons';

export default function TabButton({
  isSelected = false,
  onClick,
  type = 'Home',
}) {
  const icon = (() => {
    switch (type) {
      case 'Home':
        return (
          <ICON_HOUSE
            color={isSelected ? 'white' : 'black'}
            className={styles.house}
          />
        );
      case 'Group':
        return (
          <ICON_GROUP
            color={isSelected ? 'white' : 'black'}
            className={styles.house}
          />
        );
      case 'Setting':
        return (
          <ICON_SETTING
            color={isSelected ? 'white' : 'black'}
            className={styles.house}
          />
        );
      default:
        return (
          <ICON_HOUSE
            color={isSelected ? 'white' : 'black'}
            className={styles.house}
          />
        );
    }
  })();
  return (
    <button
      type='button'
      className={`${styles.selected} ${
        isSelected && styles['dark-background']
      }`}
      onClick={onClick}
    >
      {icon}
      <p
        className={`${styles['home-text']} ${
          isSelected ? styles['light-text'] : styles['dark-text']
        }`}
      >
        {type}
      </p>
    </button>
  );
}
