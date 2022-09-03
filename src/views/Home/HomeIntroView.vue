<template>
  <div>
    <div id="homeIntroView">
      <div id="content">
        <HomeHeader/>
        <TopPostPart/>
        <CommunityPart/>
      </div>

    </div>
    <div id="homeBottomView">
      <img src="homebottomb.png">
      <div id="bottomTitle">
        <div>
          a playground for smart factory developers
        </div>
      </div>
      <div id="myProfile">
        <div id="btn" class="relative-position" v-ripple>
          <div>
            My Profile
          </div>

        </div>

      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import HomeHeader from "@/components/Home/HomeHeader.vue"
import CommunityPart from "@/components/Home/CommunityPart.vue"
import TopPostPart from "@/components/Home/TopPostPart.vue"

</script>
<style scoped lang="scss">
#homeIntroView, #homeBottomView {
  width: 100%;
  display: flex;
  justify-content: center;
  #content {
    max-width: $rootWidth;
  }
}
#homeBottomView{
  margin-top: 50px;
  height: 678px;
  position: relative;
  img{
    position: absolute;
    top: 0;
    left: 0;
    object-fit: fill;
    height: 678px;
    width: 100%;
  }
  #bottomTitle {
    position: absolute;
    @include enTitleFont(64);
    color: white;
    top: 131px;
    left: 0;
    line-height: 77px;
    width: 100%;
    display: flex;
    justify-content: center;
  }
  #myProfile {
    position: absolute;
    display: flex;
    justify-content: center;
    width: 100%;
    bottom: 228px;
    #btn{
      cursor: pointer;
      width: 281px;
      height: 76px;
      border-radius: 18px;
      background-color: white;
      color: $mainColor4;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 32px;
      &:hover {
        color: black;
      }
    }
  }
}

</style>
