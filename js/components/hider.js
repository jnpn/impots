
// hider

const Hider = Vue.component('hider', {
  data () {
    return {
      hidden: false,
    };
  },
  template: '<div class="hider"><button type="button" class="btn btn-sm btn-primary" @click="hidden = !hidden">toggle<i class="bi-gear"></i></button><slot v-if="!hidden"></slot><div>',
});
