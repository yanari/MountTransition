export const presets = {
  fade: {
    atEnter: {opacity: 1},
    atFrom: {opacity: 0},
    atLeave: {opacity: 0},
  },
  fadeAndZoom: {
    atEnter: {opacity: 1, transform: 'scale(1)'},
    atFrom: {opacity: 0, transform: 'scale(0)'},
    atLeave: {opacity: 0, transform: 'scale(0)'},
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
  verticalAccordionVh: {
    atEnter: {height: '100vh'},
    atFrom: {height: '0vh'},
    atInitial: {height: '0vh'},
    atLeave: {height: '0vh'},
  },
  zoom: {
    atEnter: {transform: 'scale(1)'},
    atFrom: {transform: 'scale(0)'},
    atLeave: {transform: 'scale(0)'},
  },
};