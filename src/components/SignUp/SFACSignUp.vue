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
        <input type="email" id="email" v-model="email" @input="onInputEmail" />
      </div>
      <div style="margin-top: 16px">
        <label for="password">
          비밀번호
        </label>
      </div>
      <div>
        <input type="password" id="password" />
      </div>

      <div style="margin-top: 16px">
        <label for="nickName">
          닉네임
        </label>
      </div>
      <div>
        <input type="text" id="nickName" />
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
import {onMounted, ref} from "vue";
import { getStorage, connectStorageEmulator, ref as fRef, uploadString, getDownloadURL  } from "firebase/storage";
import { v4 as uuidv4 } from 'uuid';
import {useQuasar} from "quasar";
import { getApp } from "firebase/app";

const email = ref("")

const $q= useQuasar()

async function onSubmit(e: Event){
  e.preventDefault()
  let storage = getStorage();
  console.log(import.meta.env.MODE)
  if(import.meta.env.MODE == 'development'){
    connectStorageEmulator(storage, "localhost", 9199);
  }else {
    const firebaseApp = getApp();
    storage = getStorage(firebaseApp, "gs://sfac-81ca6.appspot.com/");
  }
  const storageRef = fRef(storage, `/profileImage/${uuidv4()}.svg`);
  try{
    const result = await uploadString(storageRef,avatarImg.value,'data_url')
    const downloadUrl = await getDownloadURL(result.ref)
  }catch (e) {
    console.log(e)
    $q.dialog({
      message: "파일 업로드에 문제가 있습니다. \n 용량은 1MB 이하여야 합니다.",
    })
    return ;
  }

  console.log("회원 가입")
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
    seed: email.value,
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
