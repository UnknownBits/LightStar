<script setup lang="ts">
import {RouterView} from 'vue-router'
import MenuItem from "@/components/Menu-item.vue";
import Bar from "@/components/Bar.vue";
</script>

<template>
  <Bar title="LightStar">
      <menu-item link="/">主页</menu-item>
      <menu-item link="/login">登录</menu-item>
      <menu-item link="/">注册</menu-item>
  </Bar>
  <RouterView/>
  <div class="none"/>
  <div class="side-bar">
    <div class="">
      <p>"Minecraft" 以及 "我的世界" 为 Mojang Synergies AB 的商标，本站与 Mojang 以及 Microsoft 没有从属关系 © 2023 -
        2025 UnknownBits || 由 LightStar Server 强力驱动。</p>
    </div>
  </div>
</template>

<style scoped>


.side-bar{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  background: rgba(84, 84, 84, 0.6);
  padding: 24px;
  height: 64px;
  backdrop-filter: blur(20px);
}
</style>
