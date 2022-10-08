<template>
  <div>
    <div id="viewRoot">
      <div id="contentRoot">
        <header>
          <LoginHeader>

          </LoginHeader>
        </header>
        <div id="spinner">
          <q-spinner-box size="20rem" color="primary">

          </q-spinner-box>
        </div>

        <div id="loadingLogin">
          로그인 중 입니다
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import LoginHeader from "@/components/Login/LoginHeader.vue"
import axios from "axios";
import {onMounted} from "vue";
import {userStore} from "@/stores/store";
import router from "@/router";
import UserUseCase from "@/Bis/User/Domain/UserUseCase";
import type {SignUpResDto} from "@/Bis/User/Dto/SignUpResDto";

const props = defineProps<{
  code: string,
  state: string
}>()
onMounted(() => {
  login()
})

const userUseCase = UserUseCase.getInstance();

async function login() {
  const snsType = props.state.split("_")[0];
  if (snsType == "google") {
    const signUpResDto = await userUseCase.googleLogin({
      code: props.code,
      redirect_uri: import.meta.env.VITE_RE_DIRECT_URL,
      state: props.state
    });
    await snsLogin(signUpResDto);
  } else if (snsType == "naver") {
    const signUpResDto = await userUseCase.naverLogin({
      code: props.code,
      redirect_uri: import.meta.env.VITE_RE_DIRECT_URL,
      state: props.state
    })
    await snsLogin(signUpResDto);
  } else if (snsType == "kakao") {
    const signUpResDto = await userUseCase.kakaoLogin({
      code: props.code,
      redirect_uri: import.meta.env.VITE_RE_DIRECT_URL,
      state: props.state
    })
    await snsLogin(signUpResDto);
  }
}
async function snsLogin(signUpResDto: SignUpResDto){
  const userUseCase = UserUseCase.getInstance();
  const userStore1 = userStore();

  userStore1.setUserInfo(signUpResDto.userInfo)
  userStore1.setIsLogin(true)
  userUseCase.setToken(signUpResDto.access, signUpResDto.refresh)

  userUseCase.refreshTokenSchStart();
  await router.push({
    name: "homeIntroView"
  })
}

</script>

<style scoped lang="scss">
#viewRoot {
  width: 100%;
  display: flex;
  justify-content: center;

  #contentRoot {
    width: $rootWidth;

    #loginArea {
      margin-top: 71px;

      #loginDivide {
        display: flex;
        align-items: center;
        @include koFont(20)
      }
    }

    #snsSignUp {
      margin-top: 64px;
    }

    header {
      margin-top: 113px;
    }

    #spinner {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    #loadingLogin {
      margin-top: 20px;
      font-size: 30px;
      font-weight: bold;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
