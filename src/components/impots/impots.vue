<script setup lang="ts">
  const props = defineProps<{
    defaultRevenu: number
  }>()

  const data = () => ({
        revenu: this.$props.defaultRevenu,
        frais: true,
        reduction: 10,
        tranches: config.tranches,
  });

  const filters = {
      currency(value) {
        return new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR" }).format(value);
      },
  };

    // methods: {
    //   reset () { this.revenu = this.$props.defaultRevenu; },
    // },
    // computed: {
    //   donsMax () {
    //     return this.revenu * 22 / 100;
    //   },
    //   reducMax () {
    //     return this.donsMax * 66 / 100;
    //   },
    //   ref: function () {
    //     return reference(this.revenu, this.frais, this.reduction)
    //   },
    //   imp: function () {
    //     return impots(this.revenu, this.tranches);
    //   },
    //   tot: function () {
    //     let revenu = reference(this.revenu, this.frais, this.reduction)
    //     return impots(revenu, this.tranches)
    //       .map(({du:du}) => du)
    //       .reduce(add)
    //   }
    // }

  })
</script>

<template>
  <div>
    <div class="form-group">
      <label
        class="form-label"
        @click="reset"
        for="revenu"
        title="click to reset"
        aria-label="click to reset"
        tooltip="click to reset"
      >
        Revenu
      </label>
      <div class="input-group">
        <input
          id="revenu"
          class="form-control"
          placeholder="revenu"
          v-model="revenu"
          autofocus
        />
        <span class="input-group-text">€</span>
      </div>
      <p>
        <input
          id="revenu"
          type="range"
          min="3000"
          max="100000"
          step="500"
          list="revenus"
          class="form-range"
          placeholder="revenu"
          v-model="revenu"
          autofocus
        />
        <datalist id="revenus">
          <option value="0"></option>
          <option value="10000"></option>
          <option value="20000"></option>
          <option value="30000" label="30k"></option>
          <option value="40000"></option>
          <option value="50000"></option>
          <option value="60000" label="60k"></option>
          <option value="70000"></option>
          <option value="80000"></option>
          <option value="90000" label="90k"></option>
          <option value="100000"></option>
        </datalist>
      </p>
    </div>
    <div class="form-group form-check">
      <input
        class="form-check-input"
        id="frais"
        type="checkbox"
        v-model="frais"
      />
      <label class="form-check-label" for="frais"
        >-10% de frais<span v-if="frais"> = {{ ref | currency }}</span></label
      >
    </div>
    <hr />
    <table class="table-sm table-borderless">
      <!-- <caption>impots par tranche</caption> -->
      <thead class="thead-light">
        <tr>
          <td>Tranche</td>
          <td>Base</td>
          <td>Taux</td>
          <td>Montant</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="t in imp">
          <td>{{ t.hi }}</td>
          <td>{{ t.base }}</td>
          <td>{{ t.percent }}</td>
          <td>€{{ t.du.toFixed(2) }}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td>Taux moyen</td>
          <td>{{ ((100 * tot) / revenu).toFixed(2) }} %</td>
          <td>Total</td>
          <td>{{ tot | currency }}</td>
        </tr>
        <tr class="opt">
          <td>Dons max</td>
          <td>{{ donsMax | currency }}</td>
          <td>Reduc max</td>
          <td>{{ reducMax | currency }}</td>
        </tr>
        <tr>
          <td>Rapport</td>
          <td>{{ (tot / ((revenu * config.charges) / 12)).toFixed(1) }}</td>
          <td>Mensuel</td>
          <td>{{ ((revenu * config.charges) / 12) | currency }}</td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>
