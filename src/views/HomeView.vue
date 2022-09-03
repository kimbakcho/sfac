<template>
    <main>
      <header>
        <div class="row justify-between items-center" id="headerRoot">
          <div class="col-2">
            <img src="logo.png">
          </div>
          <nav class="col-6 row justify-between items-center">
            <div class="navBtn">
              Community
            </div>
            <div class="navBtn">
              About us
            </div>
            <div class="navBtn">
              Trend
            </div>
            <div class="navBtn">
              We Project
            </div>
          </nav>
          <div class="col-3 row items-center justify-end" id="loginButtons">
            <div id="signInBtn">
              Sign In
            </div>
            <div id="signUpBtn" class="relative-position text-white" v-ripple>
              Sing Up
            </div>
          </div>
        </div>
      </header>
      <router-view id="homeRouter">

      </router-view>
      <footer>

      </footer>
    </main>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
#homeRouter {
  margin-top: 123px;
  width: 100%;
}
header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: white;
  padding: 47px 0 34px 0;
  width: 100%;
  display: flex;
  justify-content: center;
  #headerRoot{
    width: $rootWidth;
  }
}
nav{
  font-weight: bold;
  font-size: 19px;
  padding: 0 59px 0 78px;
  .navBtn {
    cursor: pointer;
    color: $mainColor4;
    &:hover{
      color: black;
    }
    &.isActive{
      border-bottom: solid 2px black;
    }
  }
}
#loginButtons{
  font-weight: bold;
  font-size: 19px;
  #signInBtn{
    margin-right: 19px;
    cursor: pointer;
    color: $mainColor4;
    &:hover{
      color: black;
    }
  }
  #signUpBtn{
    display: flex;
    align-items: center;
    background-color: $mainColor3;
    justify-content: center;
    font-weight: bold;
    cursor: pointer;
    font-size: 19px;
    color: white;
    height: 41px;
    width: 117px;
    border-radius: 7px;
    &:hover {
      color: black !important;
    }
  }
}

</style>
