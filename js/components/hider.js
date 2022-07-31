
// hider

const Hider = Vue.component('hider', {
  props: ['startsHidden'],
  data () {
    return {
      hidden: this.$props.startsHidden,
    };
  },
  template: '#template-hider',
});
