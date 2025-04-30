<script setup lang="ts">
defineProps({
  link: String,
})
</script>

<template>
  <router-link :to="link" class="touch menu-item" tabindex="0">
    <div class="menu-item-content">
      <slot/>
    </div>
  </router-link>

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