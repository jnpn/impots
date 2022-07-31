
// main

const app = new Vue({
  router,
  el: "#app",
  data () {
    return {
      app: 'Impots | FR',
      specs: def_spec,
    }
  },
  mounted () {
    const LOG = new Logger('impots.main');
    console.log(big);
    LOG.log('ready');
  },
});

