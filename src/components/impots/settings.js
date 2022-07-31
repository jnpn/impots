
// settings

const Settings = Vue.component('settings', {
  props: {
    tranches: {
      default: config.tranches,
    }
  },
  template: '#template-settings',
});
