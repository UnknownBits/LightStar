<script setup lang="ts">

</script>

<template>
  <header class="bar">
    <h1 class="button title">
      <a style="font-size: 24px">
        <img class="logo" src="@/assets/logo.webp" alt=""/>
        LightStar 社区
      </a>
    </h1>
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
.title{
  justify-content: flex-start;
  align-items: flex-start;
}
.logo{
  margin-right: 16px;
}
.menu{
  display: flex;

  flex: auto;
  justify-content: flex-end;
  align-items: center;
}
</style>