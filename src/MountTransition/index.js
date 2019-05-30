import React from 'react';
import PropTypes from 'prop-types';
import {animated, Transition} from 'react-spring/renderprops';
import {presets} from './presets';

function MountTransition (props) {
  const {
    children,
    className,
    preset,
    show,
    tag,
  } = props;
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
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  preset: PropTypes.oneOf(['fadeInOut', 'toggle', 'toggleFadeInOut', 'zoomInOut']).isRequired,
  show: PropTypes.bool.isRequired,
  tag: PropTypes.oneOf(['div', 'figure', 'nav', 'ul']),
};

MountTransition.defaultProps = {
  tag: 'div',
};

export default MountTransition;
