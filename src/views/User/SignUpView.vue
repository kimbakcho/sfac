<template>
  <div>
    <div id="viewRoot">
      <div id="contentRoot">
        <header>
          <LoginHeader>

          </LoginHeader>
        </header>
        <div class="row justify-center">
          <SNSSignUp class="col-8" id="snsSignUp">

          </SNSSignUp>
        </div>
        <div class="row justify-center" id="loginArea">
          <div class="col-8" id="loginDivide">
            <div style="border-bottom: 1px solid black; flex-grow: 1">

            </div>
            <div style="margin: 0 15px">
              회원 가입에 필요한 정보를 입력 해주세요.
            </div>
            <div style="border-bottom: 1px solid black;flex-grow: 1">

            </div>
          </div>
        </div>
        <div class="row justify-center" style="margin-top: 13px;margin-bottom: 74px">
          <SFACSignUp class="col-8">

          </SFACSignUp>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import LoginHeader from "@/components/Login/LoginHeader.vue"
import SNSSignUp from "@/components/SignUp/SNSSignUp.vue"
import SFACSignUp from "@/components/SignUp/SFACSignUp.vue"
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
  }
}
</style>
