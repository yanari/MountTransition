export const presets = {
  fade: {
    atEnter: {opacity: 1},
    atFrom: {opacity: 0},
    atLeave: {opacity: 0},
  },
  slideTop: {
    atEnter: {transform: 'translateY(0%)'},
    atFrom: {transform: 'translateY(-100%)'},
    atLeave: {transform: 'translateY(-100%)'},
  },
  verticalAccordion: {
    atEnter: {height: '100%'},
    atFrom: {height: '0%'},
    atInitial: {height: '0%'},
    atLeave: {height: '0%'},
  },
  zoom: {
    atEnter: {transform: 'scale(1)'},
    atFrom: {transform: 'scale(0)'},
    atLeave: {transform: 'scale(0)'},
  },
};