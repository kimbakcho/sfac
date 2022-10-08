<template>
  <div>
    <div id="title">
      SNS 로그인
    </div>
    <div id="loginButtons">
      <button class="btn" @click="onLoginGoogle">
        <i class="spac-googleicon">
        </i>
      </button>
      <button class="btn" @click="onLoginNaver">
        <i class="spac-navericon">
        </i>
      </button>
      <button class="btn" @click="onLoginKakao">
        <i class="spac-kakaotalk">
        </i>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import UserUseCase from "@/Bis/User/Domain/UserUseCase";
import {userStore} from "@/stores/store";
import router from "@/router";
const userUseCase = UserUseCase.getInstance();
async function onLoginGoogle(){
  userUseCase.goGoogleLogin()
}

async function onLoginNaver(){
  userUseCase.goNaverLogin()
}
async function onLoginKakao(){
  userUseCase.goKakaoLogin()
}
</script>

<style scoped lang="scss">
#title{
  @include koFont(20);

}
#loginButtons {
  margin-top: 16px;
  display: flex;
  gap: 20px;
  .btn{
    width: 176px;
    height: 39px;
    background: #FFFFFF;
    border: 1px solid $mainColor4;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    i{
      color: $mainColor4;
    }
    &:hover{
      i{
        color: #000000;
      }
    }
  }
}

</style>
