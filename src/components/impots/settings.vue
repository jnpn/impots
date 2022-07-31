<script setup lang="ts">
// default: config.tranches,
const props = defineProps<{
  tranches: Array
}>()
});
</script>

<template>
  <div id="tranches" class="form-group">
      <label class="form-label">Tranches</label>
      <ul>
          <div v-for="t in tranches" class="input-group input-group-sm mb-1">
              <span class="input-group-text" id="lo">lo</span>
              <input type="number" class="form-control" v-model:value="t.lo" placeholder="low" aria-label="low" aria-describedby="">
              <span class="input-group-text" id="hi">hi</span>
              <input type="number" class="form-control" v-model:value="t.hi" placeholder="hi" aria-label="hi" aria-describedby="hi">
              <input type="number" class="form-control" v-model:value="t.percent" placeholder="%" aria-label="percent" aria-describedby="percent">
              <span class="input-group-text" id="percent">%</span>
          </div>
      </ul>
  </div>
</template>
