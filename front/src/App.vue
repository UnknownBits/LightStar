<script setup lang="ts">
import {RouterView} from 'vue-router'
import MenuItem from "@/components/Menu-item.vue";
import Bar from "@/components/Bar.vue";
import IconCreeper from "@/components/icons/IconCreeper.vue";
import IconCommunity from "@/components/icons/IconCommunity.vue";
import IconDocumentation from "@/components/icons/IconDocumentation.vue";
import IconEcosystem from "@/components/icons/IconEcosystem.vue";
import IconSupport from "@/components/icons/IconSupport.vue";
import IconTooling from "@/components/icons/IconTooling.vue";
</script>

<template>
  <Bar title="LightStar">
      <menu-item link="/">主页</menu-item>
    <div class="none"/>
      <menu-item link="/login">登录</menu-item>
      <menu-item link="/">注册</menu-item>
  </Bar>
  <RouterView/>
  <div class="none"/>
  <div class="side-bar">
    <div class="">
      <IconCreeper/>
      <icon-community/>
      <icon-documentation/>
      <icon-ecosystem/>
      <icon-support/>
      <icon-tooling/>
    </div>
    <div class="">

      <p>"Minecraft" 以及 "我的世界" 为 Mojang Synergies AB 的商标，本站与 Mojang 以及 Microsoft 没有从属关系</p>
      <p>© 2023 - 2025 UnknownBits || 由 LightStar Server 强力驱动。</p>
    </div>
  </div>
</template>

<style scoped>


.side-bar{
  display: flex;
  flex-direction: row;
  background: rgba(84, 84, 84, 0.6);
  padding: 24px;
  height: 400px;
  backdrop-filter: blur(20px);
}
</style>
