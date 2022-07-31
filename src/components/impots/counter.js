
// counter

const Counter = Vue.component('counter', {
  props: {
    zero: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      count: this.$props.zero,
    };
  },
  methods: {
    reset () {
      this.count = this.$props.zero - 1; // HACK triggers parent button count++
    },
  },
  template: `<div class="counter">
  <button type="button" class="btn btn-sm btn-primary" @click="count++">
    Counter <span class="badge bg-black" @click="reset">{{count}}</span>
  </button>
<div>`,
});
