
// impots

const Impots = Vue.component('impots', {
  props: ['defaultRevenu'],
  data () {
    return {
      revenu: this.$props.defaultRevenu,
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
  methods: {
    reset () { this.revenu = this.$props.defaultRevenu; },
  },
  computed: {
    donsMax () {
      return this.revenu * 22 / 100;
    },
    reducMax () {
      return this.donsMax * 66 / 100;
    },
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
