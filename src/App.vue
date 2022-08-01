<script setup lang="ts">
  import { onMounted } from 'vue'
  import { Logger } from '~/lib/logger.js'
  import { prolog } from '~/lib/prolog.js'

  useHead({
    title: "Impots",
    meta: [
      { name: "description", content: "Impots" },
      {
        name: "theme-color",
        content: computed(() => (isDark.value ? "#00aba9" : "#ffffff")),
      },
    ],
  });

  onMounted(() => {
    new Logger('app.mounted').log('ready');
    prolog();
  });
</script>

<template>
  <RouterView />
</template>
