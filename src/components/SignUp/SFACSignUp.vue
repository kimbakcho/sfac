<template>
  <div>
    <form>
      <div style="display: flex;justify-content: center">
        <img :src="avatarImg">
      </div>
      <div>
        <label for="email">
          E-mail
        </label>
      </div>
      <div>
        <input type="email" id="email" v-model="signUpReqDto.email" @input="onInputEmail" />
      </div>
      <div style="margin-top: 16px">
        <label for="password">
          비밀번호
        </label>
      </div>
      <div>
        <input type="password" id="password" v-model="signUpReqDto.pw" />
      </div>

      <div style="margin-top: 16px">
        <label for="nickName">
          닉네임
        </label>
      </div>
      <div>
        <input type="text" id="nickName" v-model="signUpReqDto.nickName"/>
      </div>
      <div id="info">
        <div id="serviceInfo">
          서비스 이용 정보
        </div>
        <div id="privacyInfo">
          개인 정보 보호
        </div>
      </div>

      <button type="submit" @click="onSubmit" v-ripple class="relative-position">
        회원 가입
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { createAvatar } from '@dicebear/avatars';
import * as style from '@dicebear/avatars-bottts-sprites';
import {onMounted, reactive, ref} from "vue";
import { getStorage, connectStorageEmulator, ref as fRef, uploadString, getDownloadURL  } from "firebase/storage";
import { v4 as uuidv4 } from 'uuid';
import {useQuasar} from "quasar";
import { getApp } from "firebase/app";
import UserUseCase from "@/Bis/User/Domain/UserUseCase";
import type {SignUpReqDto} from "@/Bis/User/Dto/SignUpReqDto";
import {userStore} from "@/stores/store";
import router from "@/router";
import FireStorageUseCase from "@/Bis/FireStore/FireStorageUseCase";



const $q= useQuasar()

const signUpReqDto = reactive<SignUpReqDto>({
  email: "",
  nickName: "",
  profileImage: "",
  pw: ""
})

const userUseCase = UserUseCase.getInstance();

async function onSubmit(e: Event){
  e.preventDefault()

  let fireStorage = FireStorageUseCase.getInstance();
  try{
    $q.loading.show({
      message: "회원 가입중"
    })

    const downloadUrl = await fireStorage.uploadUserProfileImage(avatarImg.value)
    try{
      signUpReqDto.profileImage = downloadUrl
      let signResDto = await userUseCase.signUp(signUpReqDto)
      $q.loading.hide();
      let userStore1 = userStore();
      userStore1.setUserInfo({
        nickName: signResDto.nickName,
        user: {
          id: signResDto.id,
          email: signResDto.userEmail,
        },
        profileImgUrl: signResDto.profileImage
      })
      userStore1.setIsLogin(true)
      userUseCase.setToken(signResDto.access,signResDto.refresh)
      userUseCase.refreshTokenSchStart();
      await router.push({
        name: "homeIntroView"
      })
    } catch (e: any) {
      $q.loading.hide();
      $q.dialog({
        message: e.response.data.errorMessage
      })
    }
  }catch (e) {
    console.log(e)
    $q.dialog({
      message: "파일 업로드에 문제가 있습니다. \n 용량은 1MB 이하여야 합니다.",
    })
    return ;
  }
}
let avatarImg = ref("")

onMounted(()=>{
  avatarImg.value = createAvatar(style, {
    seed: Math.random().toFixed(),
    radius: 50,
    dataUri: true,
    size: 48
  })
})



function onInputEmail(){
  avatarImg.value = createAvatar(style, {
    seed: signUpReqDto.email,
    radius: 50,
    dataUri: true,
    size: 48
  })
}
</script>

<style scoped lang="scss">
#info {
  margin: 33px 0;
  display: flex;
  justify-content: center;
  @include koFont(19,$mainColor1);
  #serviceInfo {
    cursor: pointer;
  }
  #privacyInfo {
    cursor: pointer;
    margin-left: 29px;
  }
}
label {
  @include koFont(19)
}
input {
  border: 1px solid $mainColor4;
  border-radius: 10px;
  height: 64px;
  width: 100%;
  @include koFont(19);
  padding: 0px 16px;
}
button {
  width: 100%;
  height: 56px;
  border: none;
  border-radius: 18px;
  background-color: $mainColor3;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 25px;
  cursor: pointer;
  @include koFont(19,white)
}
</style>
