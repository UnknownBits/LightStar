<script setup lang="ts">
import Bar from "./components/Bar.vue";
import MenuItem from "@/components/Menu-item.vue";
</script>

<template>
<div class="main">
  <Bar>
    <template v-slot:menu>
      <menu-item>主页</menu-item>
      <menu-item>登录</menu-item>
      <menu-item>注册</menu-item>
    </template>
  </Bar>
  <div class="content">

  </div>
  <div class="side-bar">

  </div>
</div>
</template>

<style scoped>
.main {
  background: var(--big-background);
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}
.content {
  flex: 1;
}
.side-bar{
  height: 64px;
}
</style>
