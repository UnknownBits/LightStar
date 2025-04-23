<script setup lang="ts">
import {RouterView} from 'vue-router'
import MenuItem from "@/components/Menu-item.vue";
import Bar from "@/components/Bar.vue";
</script>

<template>
  <Bar>
    <template v-slot:menu>
      <menu-item>主页</menu-item>
      <menu-item>登录</menu-item>
      <menu-item>注册</menu-item>
    </template>
  </Bar>
  <RouterView/>
  <div class="none"/>
  <div class="side-bar">

  </div>
</template>

<style scoped>


.side-bar{
  height: 64px;
}
</style>
