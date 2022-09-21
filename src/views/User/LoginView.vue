<template>
  <div>
    <div id="viewRoot">
      <div id="contentRoot">
        <header>
          <LoginHeader>

          </LoginHeader>
        </header>
        <div class="row justify-center">
          <SnsLogin id="snsLogin" class="col-8">

          </SnsLogin>
        </div>

        <div class="row justify-center" id="loginArea">
          <div class="col-8" id="loginDivide">
            <div style="border-bottom: 1px solid black; flex-grow: 1">

            </div>
            <div style="margin: 0px 15px">
              SFAC 아이디로 로그인
            </div>
            <div style="border-bottom: 1px solid black;flex-grow: 1">

            </div>
          </div>
        </div>
        <div class="row justify-center">
          <SFACLogin id="sfacLogin" class="col-8">

          </SFACLogin>
        </div>
        <div class="row justify-center" id="singUpPart">
          <div class="col-3" id="signUpText1" style="">
            아직 회원이 아니신가요 ?
          </div>
          <div class="col-1" id="signUpText2" @click="onSignUp">
            회원 가입
          </div>
        </div>

      </div>
    </div>


  </div>
</template>

<script setup lang="ts">
import LoginHeader from "@/components/Login/LoginHeader.vue"
import SnsLogin from "@/components/Login/SnsLogin.vue"
import SFACLogin from "@/components/Login/SFACLogin.vue"
import router from "@/router";


function onSignUp(){
  router.push({
    name: "SignUpView"
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
    header {
      margin-top: 113px;
    }
    #loginArea {
      margin-top: 71px;
      #loginDivide {
        display: flex;
        align-items: center;
        @include koFont(20)
      }
    }
    #singUpPart {
      margin-top: 48px;
      margin-bottom: 39px;
    }
    #signUpText2 {
      cursor: pointer;
      display: flex;
      justify-content: center;
      @include koFont(19,$mainColor1)
    }
    #signUpText1 {
      display: flex;
      justify-content: center;
      @include koFont(19,black,true)
    }
    #snsLogin {
      margin-top: 64px;
    }

    #sfacLogin {
      margin-top: 13px;
    }
  }


}


</style>
