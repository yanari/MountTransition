import React from 'react';
import PropTypes from 'prop-types';
import {animated, Transition} from 'react-spring/renderprops';
import {presets} from './presets';

function MountTransition (props) {
  const {
    children,
    className,
    preset,
    isMounted,
  } = props;
  return (
    <Transition
      enter = {presets[preset].atEnter}
      from = {presets[preset].atFrom}
      initial = {presets[preset].atInitial}
      items = {isMounted}
      leave = {presets[preset].atLeave}
      native = {true}
    >
      {(isShowing) => (
          isShowing ?
          (style) => {
            return <animated.div className = {className} style = {style}>{children}</animated.div>;
          }
          : null
        )
      }
    </Transition>
  );
}

MountTransition.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  preset: PropTypes.oneOf(['fade', 'slideTop', 'verticalAccordion', 'zoom']).isRequired,
  isMounted: PropTypes.bool.isRequired,
};

export default MountTransition;
