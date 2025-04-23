<script setup lang="ts">

</script>

<template>
  <header class="bar">
    <div class="touch title" tabindex="0">
      <a style="font-size: 24px">
        <img alt="" class="logo hidden-xs" src="@/assets/logo.svg"/>
        LightStar 社区
      </a>
    </div>
    <div class="menu">
      <slot name="menu"/>
    </div>
  </header>
</template>
<style scoped>
.bar{
  background: var(--small-background);
  height: 64px;
  padding: 0 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo{
  max-width: 64px;
  margin-right: 16px;
}

.menu{
  display: flex;
  flex: auto;
  justify-content: flex-end;
  align-items: center;
}
</style>