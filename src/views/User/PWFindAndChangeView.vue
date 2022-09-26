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
                  <BTextInput style="margin-top: 16px" type="password" title="신규 패스워드" v-model="newPw">

                  </BTextInput>
                </div>
              </div>
              <div class="row justify-center">
                <div class="col-8">
                  <BTextInput class="col-8" style="margin-top: 16px" type="password" title="신규 패스워드확인"
                              v-model="newPwCheck">

                  </BTextInput>
                </div>
              </div>
            </div>

            <div class="row justify-center">
              <div class="col-8 relative-position" style="margin-bottom: 60px" v-ripple>
                <button type="submit" id="pwChangeBtn" @click="onPwChange">
                  패스워드 변경하기
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
import {useQuasar} from "quasar";
import UserUseCase from "@/Bis/User/Domain/UserUseCase";
import router from "@/router";

const props = defineProps<{
  token: string
}>()

const newPw = ref()
const newPwCheck = ref()

const $q = useQuasar();

async function onPwChange(e: Event) {
  e.preventDefault();
  if (!newPw.value || !newPwCheck.value) {
    $q.dialog({
      message: "항목을 채워 주세요."
    })
    return
  }
  if (newPw.value != newPwCheck.value) {
    $q.dialog({
      message: "pw확인 부분이 다릅니다. 확인해 주세요."
    })
    return
  }
  let userUseCase = UserUseCase.getInstance();
  if (await userUseCase.findPwChangeReq(props.token, newPw.value)) {
    await $q.dialog({
      message: " 패스워드변경이 완료 되었습니다."
    }).onDismiss(async ()=>{
      await router.push(
          {
            name: "login"
          }
      )
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

    #pwChangeDivide {
      display: flex;
      align-items: center;
      @include koFont(20)
    }

    #pwChangeBtn {
      background-color: $mainColor1;
      border: none;
      border-radius: 10px;
      font-size: 20px;
      font-weight: bold;
      color: white;
      height: 56px;
      cursor: pointer;
      width: 100%;
    }

  }

  header {
    margin-top: 113px;
  }
}
</style>
