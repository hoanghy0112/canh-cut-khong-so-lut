/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import PropTypes from 'prop-types';
import React from 'react';
import { ICON_X } from '../../../../assets/icons';
import styles from './ImportedTag.module.scss';

export default function ImportedTag({ name, color, onClose }) {
  return (
    <div
      className={styles.container}
      style={{
        backgroundColor: color,
      }}
    >
      <p className={styles.textTag}>{name}</p>
      <img onClick={onClose} src={ICON_X} alt="close" />
    </div>
  );
}

ImportedTag.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
  onClose: PropTypes.func,
};

ImportedTag.defaultProps = {
  name: '',
  color: '#00A6CA',
  onClose: () => {},
};
