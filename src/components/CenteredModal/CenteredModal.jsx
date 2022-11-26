import React from 'react';
import Modal from 'react-modal';
import styles from './CenteredModal.module.scss';

Modal.setAppElement('#modal');

export default function CenteredModal({
  isOpen = false,
  onClose = () => {},
  children = '',
}) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={styles.modal}
      style={{
        content: {
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 2000,
          backgroundColor: 'transparent',
          width: '350px',
          height: '60px',
          display: 'grid',
          placeItems: 'center',
          padding: 10,
          overflow: 'visible',
          cursor: 'default',
          border: 'none',
        },
        overlay: {
          zIndex: 200,
          backgroundColor: '#0000004f',
        },
      }}
    >
      {children}
    </Modal>
  );
}
