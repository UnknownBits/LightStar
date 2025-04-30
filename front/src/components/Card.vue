<script lang="ts" setup>

</script>

<template>
  <div class="card">
    <slot/>
  </div>
</template>

<style scoped>
.card {
  height: 64px;
  margin: 8px;
  border-radius: 0.5rem;;
  padding: 16px;
  background: var(--large-background);
  box-shadow: 0 0 1px rgba(0, 0, 0, .125), 0 1px 3px rgba(0, 0, 0, .2);
}
</style>