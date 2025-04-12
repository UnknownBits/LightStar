<script setup lang="ts">

</script>

<template>
  <div class="button menu-item">
    <h4 class="text"><slot></slot></h4>
  </div>

</template>

<style scoped>
.text{

  display: table-cell;
  vertical-align: middle;
}
.menu-item{
  display: table;
  text-align: center;
  height: 64px;
  width: 64px;
}
</style>