<script lang="ts">
  import { useI18n } from "vue-i18n";
  import { charges, revenu } from '~/appconfig'

  export default {
    setup() {
      const { t } = useI18n(); // use as global scope
      return { t };
    },
    data() {
      return {
        charges,
        revenu,
      };
    },
    methods: {
      reset() {
        this.revenu = revenu;
      },
    },
    computed: {
    },
  };
</script>

<template>
  <div class="form-group">
    <label
      class="form-label"
      @click="reset"
      for="revenu"
      title="click to reset"
      aria-label="click to reset"
      tooltip="click to reset"
    >
      {{ t("salary") }}
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
    </p>
    <tranches :revenu="revenu" :charges="charges"/>
  </div>
</template>

<style>
  label[for="revenu"]:hover {
    color: var(--un-ring-color);
    cursor: pointer;
  }
</style>
