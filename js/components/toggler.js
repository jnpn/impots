
// toggler

const Toggler = Vue.component('toggler', {
  props: ['onto'],
  data () {
    return {
      previous: null,
    }
  },
  methods: {
    go () {
      const router = this.$router;
      const current = router.currentRoute.path;
      const onto = this.$props.onto;
      if (onto !== current) {
        this.previous = current;
        router.push(onto || '/');
      } else {
        router.push(this.previous || '/');
        this.previous = null;
      }
    }
  },
  template: `<div class="toggler">
  <button type="button" class="btn btn-sm" @click="go">
      <i v-if="previous" class="bi bi-gear-fill"></i>
      <i v-else class="bi bi-gear"></i>
  </button>
<div>`,
});
