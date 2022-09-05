<template>
  <div>
    <form>
      <div>
        <label for="email">
          E-mail
        </label>
      </div>
      <div>
        <input type="email" id="email" />
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
function onSubmit(e: Event){
  e.preventDefault()
  console.log("회원 가입")
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
