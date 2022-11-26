/* eslint-disable react/jsx-curly-newline */
/* eslint-disable implicit-arrow-linebreak */
import React, { useEffect, useRef, useState } from 'react';

import PropTypes from 'prop-types';

import Modal from 'react-modal';
import { CSSTransition } from 'react-transition-group';

import styles from './HoverBox.module.scss';

Modal.setAppElement('#modal');

export default function HoverBox({
  mainBox,
  infoBox,
  onOpen,
  parentRect,
  canAppear,
}) {
  const [isAppear, setIsAppear] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const mainBoxRef = useRef();
  const infoBoxRef = useRef();

  useEffect(() => {
    if (isHovering) {
      const timeout = setTimeout(() => {
        setIsHovering(false);
      }, 5000);

      return () => clearTimeout(timeout);
    }

    return () => {};
  }, [isHovering]);

  useEffect(() => {
    if (!isHovering) {
      const timeout = setTimeout(() => {
        if (canAppear) setIsAppear(false);
      }, 300);

      return () => clearTimeout(timeout);
    }
    if (canAppear) setIsAppear(isHovering);

    return () => {};
  }, [isHovering, canAppear]);

  useEffect(() => {
    onOpen(isAppear);
  }, [isAppear]);

  useEffect(() => {
    if (!canAppear) setIsAppear(false);
  }, [canAppear]);

  const PADDING = 7;

  const left = (() => {
    if (mainBoxRef?.current && infoBoxRef?.current) {
      const mainBoxRect = mainBoxRef.current.getBoundingClientRect();
      const infoBoxRect = infoBoxRef.current.getBoundingClientRect();
      let l = mainBoxRect.width + PADDING;
      if (l + infoBoxRect.width + mainBoxRect.left > parentRect.right) {
        l = -infoBoxRect.width - PADDING - 3;
      }

      return l;
    }
    return 0;
  })();
  // , [mainBoxRef, infoBoxRef, parentRect, isAppear, isHovering]);

  const top = (() => {
    if (mainBoxRef?.current && infoBoxRef?.current) {
      const mainBoxRect = mainBoxRef.current.getBoundingClientRect();
      const infoBoxRect = infoBoxRef.current.getBoundingClientRect();
      let t = 0;
      if (t + infoBoxRect.height + mainBoxRect.top > parentRect.bottom) {
        t = -infoBoxRect.height + mainBoxRect.height;
      }

      return t;
    }
    return 0;
  })();
  // , [mainBoxRef, infoBoxRef, parentRect, isAppear, isHovering]);

  function stopPropagation(e) {
    e.stopPropagation();
  }

  return (
    <div
      onMouseMove={() => {
        setIsHovering(true);
      }}
      onMouseLeave={() => {
        setIsHovering(false);
      }}
      className={styles.container}
    >
      <div ref={mainBoxRef} className={styles.mainBox}>
        {mainBox}
      </div>
      <div
        onClick={stopPropagation}
        onMouseDown={stopPropagation}
        className={styles.infoBox}
        style={{ left, top }}
      >
        <CSSTransition
          in={isHovering && canAppear}
          timeout={400}
          classNames={{
            enter: styles.enter,
            enterActive: styles.enterActive,
            enterDone: styles.enterDone,
            exit: styles.exit,
            exitActive: styles.exitActive,
            exitDone: styles.exitDone,
          }}
        >
          <div
            className={styles.infoBoxTransition}
            onMouseMove={(e) =>
              (!isHovering || !canAppear) && e.stopPropagation()
            }
            ref={infoBoxRef}
          >
            {infoBox}
          </div>
        </CSSTransition>
      </div>
    </div>
  );
}

HoverBox.propTypes = {
  mainBox: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  infoBox: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  canAppear: PropTypes.bool,
  parentRect: PropTypes.instanceOf(DOMRect),
  onOpen: PropTypes.func,
};

HoverBox.defaultProps = {
  mainBox: <div />,
  infoBox: <div />,
  canAppear: true,
  parentRect: new DOMRect(0, 0, 0, 0),
  onOpen: () => {},
};
