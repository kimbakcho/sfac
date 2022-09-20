<template>
    <main>
      <header>
        <div class="row justify-between items-center" id="headerRoot">
          <div class="col-2">
            <img src="/logo.png" class="relative-position" v-ripple>
          </div>
          <nav class="col-6 row justify-between items-center">
            <div class="navBtn" :class="{active : isRouter('CommunityHomeView')}" @click="onGoCommunity">
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
            <div v-if="isLogin()" class="row items-center justify-end" id="userInfo">
              <div id="imgRoot" class="relative-position" v-ripple style="margin-right: 16px" @click="goUserInfo">
                <img :src="userStore1.userInfo.profileImgUrl" >
                <div>

                </div>
              </div>

              <div id="logOutBtn"  @click="onLogout">
                logout
              </div>
            </div>

            <div v-else class="row items-center justify-end" >
              <div id="signInBtn" @click="onSignIn">
                Sign In
              </div>
              <div id="signUpBtn" class="relative-position text-white" v-ripple @click="goSignUp">
                Sing Up
              </div>
            </div>
          </div>
        </div>
      </header>
      <router-view id="homeRouter">

      </router-view>

      <Footer>

      </Footer>

    </main>
</template>

<script setup lang="ts">
import Footer from "@/components/Home/Footer.vue"
import router from "@/router";
import {computed} from "vue";
import {userStore} from "@/stores/store";
import UserUseCase from "@/Bis/User/Domain/UserUseCase";
const userStore1 = userStore();

function goUserInfo() {
  router.push({
    name: "userInfo"
  })
}

function onSignIn(){
  router.push({
    name: "login"
  })
}

function onLogout() {
  let userUseCase = UserUseCase.getInstance();
  userUseCase.logout()
}

function goSignUp(){
  router.push({
    name: "SignUpView"
  })
}

function onGoCommunity(e: Event) {
  console.log(e.currentTarget)
  router.push({
    name: "CommunityMainHomeView"
  })
}



function isLogin(){
  return userStore1.isLogin
}

function isRouter(name: string) {
  const find = router.currentRoute.value.matched.find(value => (value.name==name))
  if(find) {
    return true;
  }else {
    return false;
  }
}
</script>

<style scoped lang="scss">
#homeRouter {
  margin-top: 124px;
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
    &.active{
      color: black;
      border-bottom: solid 2px black;
    }
  }
}
#loginButtons{
  font-weight: bold;
  font-size: 19px;
  #userInfo {
    #imgRoot {
      width: 48px;
      height: 48px;
      cursor: pointer;
      border-radius: 50%;
    }
  }
  #signInBtn{
    margin-right: 19px;
    cursor: pointer;
    color: $mainColor4;
    &:hover{
      color: black;
    }
  }
  #signUpBtn, #logOutBtn{
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
