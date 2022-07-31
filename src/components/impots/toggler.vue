<script setup lang="ts">
  export default {
  props: ['onto'],
  data () {
    return {
      previous: null,
    }
  },
  methods: {
    go () {
      const def = '/';
      const router = this.$router;
      const current = this.$route;
      const onto = this.$props.onto;
      if (onto !== current) {
        this.previous = current;
        router.push(onto || def);
      } else {
        router.push(this.previous || def);
        this.previous = null;
      }
    },
   }
  }
</script>

<template>
  <div class="toggler">
    <button type="button" class="btn btn-sm" @click="go">
        <i v-if="previous" class="bi bi-gear-fill"></i>
        <i v-else class="bi bi-gear"></i>
    </button>
  <div>
</template>
