import React from 'react';
import PropTypes from 'prop-types';
import {animated, Transition} from 'react-spring/renderprops';

function MountTransition (props) {
  const {
    children,
    className,
    preset,
    show,
    tag,
  } = props;
  const presets = {
    fadeInOut: {
      atEnter: {opacity: 1},
      atFrom: {opacity: 0},
      atLeave: {opacity: 0},
    },
    slideTop: {
      atEnter: {transform: 'translateY(0%)'},
      atFrom: {transform: 'translateY(-100%)'},
      atLeave: {transform: 'translateY(-100%)'},
    },
    toggle: {
      atEnter: {height: '100%'},
      atFrom: {height: '0%'},
      atInitial: {height: '0%'},
      atLeave: {height: '0%'},
    },
  };
  return (
    <Transition
      enter = {presets[preset].atEnter}
      from = {presets[preset].atFrom}
      initial = {presets[preset].atInitial}
      items = {show}
      leave = {presets[preset].atLeave}
      native = {true}
    >
      {(isShowing) => (isShowing
        ? (style) => {
          if (tag === 'ul') {
            return <animated.ul className = {className} style = {style}>{children}</animated.ul>;
          } else if (tag === 'nav') {
            return <animated.nav className = {className} style = {style}>{children}</animated.nav>;
          } else if (tag === 'figure') {
            return <animated.figure className = {className} style = {style}>{children}</animated.figure>;
          } else {
            return <animated.div className = {className} style = {style}>{children}</animated.div>;
          }
        }
        : null)
      }
    </Transition>
  );
}

MountTransition.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  preset: PropTypes.oneOf(['fadeInOut', 'toggle', 'toggleFadeInOut']).isRequired,
  show: PropTypes.bool,
  tag: PropTypes.oneOf(['div', 'figure', 'nav', 'ul']),
};

MountTransition.defaultProps = {
  tag: 'div',
};

export default MountTransition;
