export const presets = {
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
  zoomInOut: {
    atEnter: {transform: 'scale(1)'},
    atFrom: {transform: 'scale(0)'},
    atLeave: {transform: 'scale(0)'},
  },
};