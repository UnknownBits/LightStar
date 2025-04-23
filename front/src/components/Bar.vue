<script setup lang="ts">

</script>

<template>
  <header class="bar">
    <div class="title" tabindex="0">
      <div class="icon">
        <img alt="" src="@/assets/logo.svg"/>
      </div>
      <div class="text">LightStar 社区</div>
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
}

.title {
  display: flex;
  align-items: center;
}

.icon {
  display: flex;
  height: 48px;
  padding-right: 16px;
}

.text {
  font-size: 24px;
}
.menu{
  display: flex;
  flex: auto;
  justify-content: flex-end;
  align-items: center;
}
</style>