<script lang="ts">
  import { useI18n } from "vue-i18n";
  import { config, impots, reference } from "~/lib/impots.js";
  export default {
    props: ["revenu", "charges"],
    setup() {
      const { t } = useI18n(); // use as global scope
      return { t };
    },
    data() {
      return {};
    },
    methods: {},
    computed: {
      imp() {
        return impots(this.revenu, config.tranches);
      },
      net() {
        return this.revenu * this.charges;
      },
      mensuel() {
        return this.net / 12;
      },
    },
  };
</script>

<template>
  <div class="container">
    <table>
      <tr>
        <td>{{ t('taxed') }}</td><td>{{ net.toFixed() }} €</td>
        <td>{{ t('monthly') }}</td><td>{{ mensuel.toFixed() }} €</td>
      </tr>
    </table>
  </div>
  <div class="container">
    <table class="table">
      <thead>
        <th>/</th>
        <td>{{ t("min") }}</td>
        <td>{{ t("max") }}</td>
        <td>{{ t("ratio") }}</td>
        <td>{{ t("base") }}</td>
        <td>{{ t("due") }}</td>
      </thead>
      <tbody>
        <tr v-for="tr in imp">
          <th>tr.</th>
          <td>{{ tr.lo }}</td>
          <td>{{ tr.hi }}</td>
          <td>{{ tr.percent }}</td>
          <td>{{ tr.base }}</td>
          <td>{{ tr.du }}€</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style>
  .container {
    display: flex;
    justify-content: center;
  }

  .table {
    border-collapse: collapse;
    border: thin solid ghostwhite;
    margin: 1em;
    padding: 1em;
  }

  th,
  td {
    border: thin solid gainsboro;
    padding: 0em 1em;
  }
</style>
