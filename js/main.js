
// main

const app = new Vue({
  router,
  el: "#app",
  data () {
    return {
      app: 'Impots | FR',
    }
  },
  mounted () {
    const LOG = new Logger('impots.main');
    console.log(big);
    LOG.log('ready');
  },
});

