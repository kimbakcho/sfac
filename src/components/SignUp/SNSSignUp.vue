<template>
  <div>
    <div id="title">
      SNS 회원 가입
    </div>
    <div id="loginButtons">
      <button class="btn" @click="goGoogleLogin">
        <i class="spac-googleicon">
        </i>
      </button>
      <button class="btn" @click="goNaverLogin">
        <i class="spac-navericon">
        </i>
      </button>
      <button class="btn" @click="goKakaoLogin">
        <i class="spac-kakaotalk">
        </i>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import {v4 as uuidv4} from "uuid";
import UserUseCase from "@/Bis/User/Domain/UserUseCase";

const userUseCase = UserUseCase.getInstance();

function goGoogleLogin() {
  userUseCase.goGoogleLogin()
}
function goNaverLogin(){
  userUseCase.goNaverLogin()
}
function goKakaoLogin(){
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
