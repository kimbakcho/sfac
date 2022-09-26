<template>
  <div>
    <form style="height: 100%">
    <div id="viewRoot">
      <div id="contentRoot">
        <header>
          <LoginHeader>

          </LoginHeader>
        </header>
        <div class="row justify-center" style="margin-top: 30px">
          <div class="col-8" id="pwFindDivide">
            <div style="border-bottom: 1px solid black; flex-grow: 1">
            </div>
            <div style="margin: 0 15px">
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
                <BTextInput  style="margin-top: 16px" type="email" title="E-mail" v-model="Email" >

                </BTextInput>
              </div>
            </div>
            <div>
              <div class="row justify-center">
                <div class="col-8">
                  <div style="display: flex;justify-content: center;align-items: center;margin-top: 20px;font-size: 20px">
                    가입 하신 E-Mail 로 PW 변경 메일을 보내 드립니다.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div class="row justify-center" style="margin-bottom: 60px">
              <button type="submit" class="col-8 relative-position" id="passFindBtn" v-ripple @click="onFindPw">
                패드워드 찾기
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import LoginHeader from "@/components/Login/LoginHeader.vue"
import BTextInput from "@/components/Etc/BTextInput.vue"
import {ref} from "vue";
import UserUseCase from "@/Bis/User/Domain/UserUseCase";
import axios from "axios";
import router from "@/router";
import {useQuasar} from "quasar";

const Email = ref("")

const $q = useQuasar()

async function onFindPw(e: Event) {
  e.preventDefault()

  if(!Email.value){
    $q.dialog({
      message: "E-Mail을 적어 주세요."
    })
    return
  }

  let userUseCase = UserUseCase.getInstance();
  if(await userUseCase.findPwReq(Email.value)){
    $q.dialog({
      message: "email로 변경 메일을 발송 했습니다."
    }).onDismiss(async ()=>{
      await router.push({
        name: "login"
      })
    })
  }


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

    #pwFindDivide{
      display: flex;
      align-items: center;
      @include koFont(20)
    }
    #passFindBtn{
      background-color: $mainColor1;
      border: none;
      border-radius: 10px;
      font-size: 20px;
      font-weight: bold;
      color: white;
      height: 56px;
      cursor: pointer;
    }
  }

  header {
    margin-top: 113px;
  }
}
</style>
