<template>
  <footer>
    <div id="rootFooter" class="row">
      <div class="col-2" id="logos" >

          <img src="/logo.png">
          <div>
            Community Site for the<br>Popularization of Smart Factory<br>Development
          </div>
          <div id="logImgs">
            <img src="/favoritelogo.png">
            <img src="/tstory.png">
            <img src="/github.png">
          </div>

      </div>
      <q-space class="col-2">

      </q-space>
      <div class="col-2" id="aboutUs">
        <div class="title">
          About us
        </div>
        <div class="subTitle">
          My Project
        </div>
        <div class="subTitle">
          Privacy Policy
        </div>
        <div class="subTitle">
          My Story
        </div>
        <div class="subTitle">
          Email
        </div>
      </div>
      <div class="col-2">
        <div id="Team">
          <div class="title">
            Team
          </div>
          <div class="subTitle">
            Member
          </div>
        </div>
      </div>
      <div class="col-2">
        <div id="Process">
          <div class="title">
            Process
          </div>
          <div class="subTitle">
            Goal
          </div>
        </div>
      </div>
    </div>
    <div id="footerSince">
      Start Of 2022 Inc.
    </div>
  </footer>

</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
#footerSince {
  position: absolute;
  bottom: 38px;
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 18px;
  height: 28px;
  color: $mainColor4;
}
footer {
  width: 100%;
  display: flex;
  justify-content: center;
  height: 425px;
  position: relative;
}
#rootFooter {
  width: $rootWidth;
  #aboutUs {
    margin-top: 87px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-height: 204px;
    .title {
      font-size: 23px;
      font-weight: bold;
    }
    .subTitle{
      cursor: pointer;
      font-size: 18px;
      color: $mainColor4;
      &:hover {
        color: black;
      }
    }
  }
  #Team {
    margin-top: 87px;
    .title {
      font-size: 23px;
      font-weight: bold;
    }
    .subTitle{
      cursor: pointer;
      margin-top: 21px;
      font-size: 18px;
      color: $mainColor4;
      &:hover {
        color: black;
      }
    }
  }
  #Process {
    margin-top: 87px;
    .title {
      font-size: 23px;
      font-weight: bold;
    }
    .subTitle{
      cursor: pointer;
      margin-top: 21px;
      font-size: 18px;
      color: $mainColor4;
      &:hover {
        color: black;
      }
    }
  }
  #logos {
    margin-top: 124px;
    display: flex;
    flex-direction: column;
    height: 155px;
    gap: 7px;
    div:nth-child(2){
      font-size: 12px;
    }
    #logImgs {
      display: flex;
      gap: 21px;
      justify-content: space-between;
    }
  }
}


</style>
