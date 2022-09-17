<template>
  <div>
    <form>
      <div>
        <label for="email">
          아이디
        </label>
      </div>
      <div>
        <input type="email" id="email" v-model="id" />
      </div>
      <div style="margin-top: 16px">
        <label for="password">
          비밀번호
        </label>
      </div>
      <div>
        <input type="password" id="password"  v-model="pw"/>
      </div>

      <div id="findpw" >
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
import {ref} from "vue";
import router from "@/router";

const id = ref("")
const pw = ref("")

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
