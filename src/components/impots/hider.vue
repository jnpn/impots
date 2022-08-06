<script lang="ts">
  export default {
    props: ["startsHidden"],
    data() {
      return { hidden: this.startsHidden };
    },
  };
</script>

<template>
  <div class="hider">
    <button
      type="button"
      class="btn btn-sm"
      @click="hidden = !hidden"
      :class="[hidden ? 'btn-secondary' : 'btn-primary']"
      title="click to hide"
      aria-label="click to hide"
      tooltip="click to hide"
    >
      <slot name="hider-button-text"></slot>
      <slot name="hider-button-icon">
        <div v-if="hidden" i-carbon-bookmark-add></div>
        <div v-else i-carbon-bookmark></div>
      </slot>
    </button>
    <slot name="hider-mini-view" v-if="hidden">
      <button type="button"><div i-carbon-caret-right></div></button>
    </slot>
    <slot v-if="!hidden">fallback when visible</slot>
  </div>
</template>
