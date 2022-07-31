const Tranches = Vue.component('tranches', {
  props: ['specs'],
  computed: {
    sousTranches () {
      return tranches(this.$props.specs);
    }
  },
  filters:{
    currency(value) {
      return new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR" }).format(value);
    },
  },
  template: '#template-tranches',
})
