<script lang="ts" setup>
interface Props {
  src?: string
  height?: string
  width?: string
}

const props = defineProps<Props>()
const BgSrc = 'url(' + props.src + ')'
</script>

<template>
  <div class="img"/>
</template>

<style scoped>
.img {
  height: v-bind(height);
  width: v-bind(width);
  background-size: contain;
  background-image: v-bind(BgSrc);
}
</style>