<script setup lang="ts">
import {useRoute} from "vue-router";
import {ref, watch} from "vue";
import Img from "@/components/Img.vue";
import SearchBox from "@/components/SearchBox.vue";

interface Props {
  title: string
  bar?: number
}

const props = defineProps<Props>();

const route = useRoute()
let isBarShow = ref(true);
console.log(route)
watch(() => route.name, async newName => {
  isBarShow.value = true;
  // if (newName === "login") isBarShow.value = false;
  // if (newName === "register") isBarShow.value = false;
})
</script>

<template>
  <header v-if="isBarShow" class="bar">
    <div class="title touch" tabindex="0">
      <img class="logo" src="@/assets/logo.webp"/>
      <div class="text">{{ title }}</div>
    </div>
    <SearchBox></SearchBox>
    <div class="menu">
      <slot/>
    </div>
  </header>
</template>

<style scoped>
.bar{
  height: 64px;
  padding: 0 8px;
  display: flex;
  align-items: center;
  backdrop-filter: blur(15px);
}

.title {
  display: flex;
  padding: 0 8px;
  margin: 4px 8px;
  align-items: center;
}

.logo {
  display: flex;
  height: 48px;
  padding-right: 16px;
}

.text {
  font-weight: bolder;
  font-size: 24px;
}

.menu{
  display: flex;
  flex: auto;
  justify-content: flex-end;
  align-items: center;
}
</style>