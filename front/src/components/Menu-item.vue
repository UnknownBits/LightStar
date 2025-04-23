<script setup lang="ts">

</script>

<template>
  <div class="touch menu-item" tabindex="0">
    <div class="menu-item-content">
      <slot/>
    </div>
  </div>

</template>

<style scoped>
.menu-item-content {
  display: table-cell;
  vertical-align: middle;
}
.menu-item{
  display: table;
  text-align: center;
  width: 64px;
}
</style>