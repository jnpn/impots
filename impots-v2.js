// une tranche est un intervalle et un pourcentage
var defaut = {
  tranches: [
    {lo:0, hi:9964, percent:0},
    {lo:9964, hi:27519, percent:14},
    {lo:27519, hi:73779, percent:30},
    {lo:73779, hi:156244, percent:41},
    {lo:156244, hi:999999999999, percent:45}
  ]
}

// prelude

let ratio = (a,b) => (b/a)*100
let add = (a,b) => a+b
let percentage = x => x/100

// fonction qui determine la part imposable
// d'un salaire pour une tranche [lo,hi]
//
//          value   hi    lo
// >>> part(3000, 1000, 2000) => 1000 (hi - lo) see rule 1
// >>> part(999,  1000, 2000) => 999            see rule 0
// >>> part(1500, 1000, 2000) => 500            see rule @

function part(value,lo,hi) {
  if (value <= lo) {         // rule 0
    return value;
  } else if (hi <= value) {  // rule 1
    return hi - lo;
  } else {
    return value - lo;       // rule 2
  }
}

// Etends chaque tranche t <= revenu r
// pour y ajouter la part imposable definie par t sur r
//
// e.g:
// revenu , tranche
// 40000  , {lo:0, hi:9964, percent:0}			=> base: 9964, du: base * 0%
// 40000  , {lo:9964, hi:27519, percent:14}		=> base: 17555, du: base * 14%
// 40000  , {lo:27519, hi:73779, percent:30}		=> base: 12481, du: base * 30%
// 40000  , {lo:73779, hi:156244, percent:41}		=> filtered out
// 40000  , {lo:156244, hi:999999999999, percent:45}	=> filtered out
//
// [
//   {...., base, du, ... } *
// ]
//


function impots(revenu,tranches) {
  let ponction = ({lo:lo,hi:hi,percent:percent}) => {
    let base = part(revenu,lo,hi)
    let ratio = percentage(revenu,base)
    let du = base*percent/100
    let augmentee = { lo:lo, hi:hi, percent:percent, base:base, ratio:ratio, du:du }
    return augmentee
  }
  return _.chain(tranches)
    .takeWhile(({lo:lo}) => lo <= revenu) // pour chaque tranche t dont la borne inf <= revenu
    .map(ponction)                        // augmente t avec la part, taux et somme
    .value()
}

let reference = (revenu,is_frais,reduction) => is_frais ? revenu-(revenu*percentage(reduction)) : revenu

// main

var app = new Vue({
  el: "#app",
  data: {
    revenu: 40000,
    frais: true,
    reduction: 10,
    tranches: defaut.tranches,
  },
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
      return impots(this.revenu, defaut.tranches);
    },
    tot: function () {
      let revenu = reference(this.revenu, this.frais, this.reduction)
      return impots(revenu, defaut.tranches)
        .map(({du:du}) => du)
        .reduce(add)
    }
  }
})
