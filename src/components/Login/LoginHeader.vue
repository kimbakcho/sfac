<template>
  <div id="headerRoot">
    <img src="/logo.png" />
    <div id="brandName">
      <span >
        SFAC
      </span>
      <span>
        에 오신걸 환영 합니다.
      </span>
    </div>
    <div id="subTitle">
      SFAC은 공장 자동화에 대한 지식 공유 커뮤니티 입니다.
    </div>

  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
#headerRoot {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
#brandName {
  margin-top: 30px;
  font-size: 68px;
  span:nth-child(1) {
    @include enTitleFont(68,$mainColor3)
  }
}
#subTitle {
  margin-top: 15px;
  @include koFont(20)
}
</style>
