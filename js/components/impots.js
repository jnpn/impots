
// impots

const Impots = Vue.component('impots', {
  data () {
    return {
      revenu: 40000,
      frais: true,
      reduction: 10,
      tranches: config.tranches,
    };
  },
  template: '#template-impots',
  filters:{
    currency(value) {
      return new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR" }).format(value);
    },
  },
  computed: {
    ref: function () {
      return reference(this.revenu, this.frais, this.reduction)
    },
    imp: function () {
      return impots(this.revenu, this.tranches);
    },
    tot: function () {
      let revenu = reference(this.revenu, this.frais, this.reduction)
      return impots(revenu, this.tranches)
        .map(({du:du}) => du)
        .reduce(add)
    }
  }
});
