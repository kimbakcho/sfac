

<template>
  <div id="appRoot">
    <RouterView id="rootRouterView"/>
  </div>

</template>

<script setup lang="ts">

</script>
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
