<template>
  <div>
    <div id="viewRoot">

      <div id="contentRoot">
        <header>
          <LoginHeader>

          </LoginHeader>
        </header>
        <div class="row justify-center" style="margin-top: 30px">
          <div class="col-8" id="pwChangeDivide">
            <div style="border-bottom: 1px solid black; flex-grow: 1">
            </div>
            <div style="margin: 0px 15px">
              패스워드를 변경해 주세요.
            </div>
            <div style="border-bottom: 1px solid black;flex-grow: 1">
            </div>
          </div>
        </div>
        <div style="flex-grow: 1;display: flex;flex-direction: column;justify-content: space-between">
          <div>
            <div class="row justify-center">
              <div class="col-8">
                <BTextInput  style="margin-top: 16px" type="password" title="현재 패스워드" v-model="currentPw" >

                </BTextInput>
              </div>
            </div>
            <div class="row justify-center">
              <div class="col-8">
                <BTextInput  style="margin-top: 16px" type="password" title="신규 패스워드" v-model="newPw" >

                </BTextInput>
              </div>
            </div>
            <div class="row justify-center">
              <div class="col-8">
                <BTextInput class="col-8"  style="margin-top: 16px" type="password" title="신규 패스워드확인" v-model="newPwCheck" >

                </BTextInput>
              </div>
            </div>
          </div>
          <div class="row justify-center">
            <div class="col-8 relative-position" style="margin-bottom: 60px" v-ripple>
              <button id="pwChangeBtn" @click="onPwChange">
                패스워드 변경하기
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import LoginHeader from "@/components/Login/LoginHeader.vue"
import BTextInput from "@/components/Etc/BTextInput.vue"
import {ref} from "vue";
import UserUseCase from "@/Bis/User/Domain/UserUseCase";

const currentPw = ref("")
const newPw = ref("")
const newPwCheck = ref("")


async function onPwChange() {
  const userUseCase = UserUseCase.getInstance();
  await userUseCase.changeUserPw(currentPw.value,newPw.value)

}
</script>

<style scoped lang="scss">
#viewRoot {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;

  #contentRoot {
    width: $rootWidth;
    display: flex;
    flex-direction: column;

    #pwChangeDivide{
      display: flex;
      align-items: center;
      @include koFont(20)
    }
    #pwChangeBtn {
      border: none;
      border-radius: 10px;
      height: 55px;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      cursor: pointer;
      font-size: 19px;
      font-weight: bold;
      background-color: $mainColor1;
    }
  }

  header {
    margin-top: 113px;
  }
}
</style>
