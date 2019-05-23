'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _renderprops = require('react-spring/renderprops');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function TransitionRenderProps(props) {
  var children = props.children,
      className = props.className,
      handleClick = props.handleClick,
      measurementUnit = props.measurementUnit,
      openHeight = props.openHeight,
      preset = props.preset,
      show = props.show,
      tag = props.tag;

  var presets = {
    fadeInOut: {
      atEnter: { opacity: 1 },
      atFrom: { opacity: 0 },
      atLeave: { opacity: 0 }
    },
    toggle: {
      atEnter: { height: openHeight + measurementUnit },
      atFrom: { height: 0 + measurementUnit },
      atInitial: { height: 0 + measurementUnit },
      atLeave: { height: 0 + measurementUnit }
    },
    toggleFadeInOut: {
      atEnter: { height: openHeight + measurementUnit, opacity: 1 },
      atFrom: { height: 0 + measurementUnit, opacity: 0 },
      atInitial: { height: 0 + measurementUnit },
      atLeave: { height: 0 + measurementUnit, opacity: 0 }
    }
  };
  return _react2.default.createElement(
    _renderprops.Transition,
    {
      enter: presets[preset].atEnter,
      from: presets[preset].atFrom,
      initial: presets[preset].atInitial,
      items: show,
      leave: presets[preset].atLeave,
      native: true
    },
    function (isShowing) {
      return isShowing ? function (style) {
        if (tag === 'ul') {
          return _react2.default.createElement(
            _renderprops.animated.ul,
            { className: className, style: style },
            children
          );
        } else if (tag === 'nav') {
          return _react2.default.createElement(
            _renderprops.animated.nav,
            { className: className, style: style },
            children
          );
        } else if (tag === 'figure') {
          return _react2.default.createElement(
            _renderprops.animated.figure,
            { className: className, style: style },
            children
          );
        } else {
          return _react2.default.createElement(
            _renderprops.animated.div,
            { className: className, onClick: handleClick, style: style },
            children
          );
        }
      } : null;
    }
  );
}

TransitionRenderProps.propTypes = {
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  measurementUnit: _propTypes2.default.string,
  openHeight: _propTypes2.default.number,
  preset: _propTypes2.default.oneOf(['fadeInOut', 'toggle', 'toggleFadeInOut']).isRequired,
  show: _propTypes2.default.bool,
  tag: _propTypes2.default.oneOf(['div', 'figure', 'nav', 'ul'])
};

TransitionRenderProps.defaultProps = {
  measurementUnit: '%',
  openHeight: 100,
  tag: 'div'
};

exports.default = TransitionRenderProps;