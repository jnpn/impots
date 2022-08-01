<script setup lang="ts">
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
</script>

<template>
  <RouterView />
</template>
