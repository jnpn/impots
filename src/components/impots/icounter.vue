<script lang="ts">
  export default {
    props: ["initial"],
    data() {
      return { count: this.initial };
    },
    methods: {
      reset() {
        this.count = this.initial - 1;
      },
    },
  };
</script>

<template>
  <div class="counter">
    <button type="button" class="btn btn-sm btn-primary" @click="count++">
      Counter <span class="badge bg-black" @click="reset">{{ count }}</span>
    </button>
  </div>
</template>
