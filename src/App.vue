<script setup lang="ts">
import { RouterView } from 'vue-router'

</script>

<template>
  <div id="appRoot">
    <RouterView id="rootRouterView"/>
  </div>

</template>

<style scoped lang="scss">
#appRoot {
  display: flex;
  justify-content: center;
  height: 100vh;
}
#rootRouterView {
  width: 100%;
  position: relative;
}
</style>
