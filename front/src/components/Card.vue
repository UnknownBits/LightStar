<script lang="ts" setup>
interface Props {
  title?: string

}

const props = defineProps<Props>();
</script>

<template>
  <div class="card">
    <div class="card-head">

    </div>
    <div class="card-body">
      <slot/>
    </div>
    <div class="card-footer">

    </div>
  </div>
</template>

<style scoped>
.card {
  padding: 16px;
  backdrop-filter: blur(15px);
}

.img {
  background-image: url("/img.png");
}
</style>