import React from 'react';
import PropTypes from 'prop-types';
import {animated, useTransition} from 'react-spring';
import {presets} from './presets';

function MountTransition (props) {
  const {
    children,
    className,
    preset,
    isMounted,
  } = props;
  const transitions = useTransition(isMounted, (isMountedKey) => {
    return isMountedKey;
  }, {
    enter: presets[preset].atEnter,
    from: presets[preset].atFrom,
    initial: presets[preset].atInitial,
    leave: presets[preset].atLeave,
  });
  return transitions.map(({item, key, props}) => {
    return item ? (
      <animated.div
        className = {className}
        key = {key}
        style = {props}
      >
        {children}
      </animated.div>
    ) : null;
  });
}

MountTransition.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  preset: PropTypes.oneOf([
    'fade',
    'slideTop',
    'verticalAccordion',
    'zoom',
  ]).isRequired,
  isMounted: PropTypes.bool.isRequired,
};

export default MountTransition;
