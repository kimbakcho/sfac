<template>
  <div>
    <form>
      <BTextInput title="아이디" type="email" v-model="id">
      </BTextInput>
      <BTextInput style="margin-top: 16px" title="비밀번호" v-model="pw" type="password">

      </BTextInput>

      <div id="findpw" @click="gotoPWFind">
        <div>
          비밀번호 찾기
        </div>

      </div>
      <button type="submit" @click="onSubmit" v-ripple class="relative-position" >
        로그인
      </button>
    </form>

  </div>
</template>

<script setup lang="ts">
import UserUseCase from "@/Bis/User/Domain/UserUseCase";
import BTextInput from "@/components/Etc/BTextInput.vue"
import {ref} from "vue";
import router from "@/router";

const id = ref("")
const pw = ref("")

function gotoPWFind() {
  router.push({
    name: "PwFindView"
  })
}

async function onSubmit(e: Event){
  e.preventDefault();
  let userUseCase = UserUseCase.getInstance();
  const result = await userUseCase.login(id.value,pw.value);
  if(result){
    await router.push({
      name: "homeIntroView"
    })
  }

}
</script>

<style scoped lang="scss">
#findpw {
  display: flex;
  justify-content: flex-end;
  margin-top: 19px;
  cursor: pointer;
  @include koFont(19,$mainColor1)
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
