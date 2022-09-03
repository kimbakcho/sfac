<template>
  <div id="homeHeader">
    <img src="big_data_1.png" class="introIcon" id="icon1" alt="icon1">

    <img src="machine_learning_1.png" class="introIcon"  id="icon2" alt="icon2">

    <img src="smartphone_1.png" class="introIcon"  id="icon3" alt="icon3">

    <div class="row justify-center" id="introTitle">
      <div class="col-8 row justify-center">
        Trending Solution Smart Factory
      </div>
    </div>
    <div class="row justify-center" id="introSubTitle1">
      <div class="col-8 row justify-center">
        Current Information Community
      </div>
    </div>

    <div class="row justify-center" id="introSubTitle2">
      <div class="col-8 row justify-center">
        Smart factory 소통과 혁신 위한 Community를 <br>
        만들어 나가아고자 합니다.
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
#introSubTitle2 {
  position: absolute;
  bottom: 123px;
  width: 100%;
  font-size: 24px;
  font-weight: normal;
  color: $mainColor4;
}

#introSubTitle1 {
  position: absolute;
  top: 243px;
  width: 100%;
  @include enTitleFont(45, $mainColor3)
}

#introTitle{
  position: absolute;
  top: 135px;
  width: 100%;
  @include enTitleFont(68)
}

#homeHeader{
  height: 526px;
  width: 100%;
  position: relative;
  .introIcon {
    position: absolute;
    &#icon1 {
      top: 24px;
      left: 197px;
    }
    &#icon2 {
      top: 209px;
      right: 100px;
    }
    &#icon3 {
      bottom: 123px;
      left: 100px;
    }
  }

}
</style>
