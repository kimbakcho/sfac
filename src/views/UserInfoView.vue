<template>
  <div>
    <div id="viewRoot">

      <div id="contentRoot">

          <header>
            <LoginHeader>

            </LoginHeader>
          </header>
          <div class="row justify-center" style="margin-top: 30px">
            <div class="col-8" id="userInfoDivide">
              <div style="border-bottom: 1px solid black; flex-grow: 1">

              </div>
              <div style="margin: 0px 15px">
                회원 가입에 필요한 정보를 수정 해주세요.
              </div>
              <div style="border-bottom: 1px solid black;flex-grow: 1">

              </div>
            </div>
          </div>
          <div style="display: flex;flex-direction: column;flex-grow: 1;justify-content: space-between">
            <div>
              <div class="row justify-center">
                <div id="userProfileImageArea" @click="onProfileChange">
                  <img :src="getUserImg()" >
                  <div>
                    변경
                  </div>
                </div>
              </div>

              <div class="row justify-center">
                <div class="col-8">
                  <div style="margin-top: 11px" id="userInfo">
                    <div>
                      닉네임
                    </div>
                    <input type="text" id="nickName" v-model="nickName">
                  </div>
                </div>
              </div>
            </div>
            <div id="modifyBtn" class="row justify-center">
              <button type="submit"  class="col-8 relative-position" v-ripple @click="onUpdateUserInfo">
                수정 하기
              </button>
            </div>
          </div>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import LoginHeader from "@/components/Login/LoginHeader.vue"
import ProfileImageChangeDialog from "@/components/Login/ProfileImageChangeDialog.vue"
import {userStore} from "@/stores/store";
import {useQuasar} from "quasar";
import {onMounted, ref} from "vue";
import UserUseCase from "@/Bis/User/Domain/UserUseCase";
import router from "@/router";

let userStore1 = userStore();

const $q = useQuasar()

const nickName = ref("")

onMounted(()=>{
  nickName.value = userStore1.userInfo!.nickName
})

function getUserImg(){
  return userStore1.userInfo!.profileImgUrl
}


async function onUpdateUserInfo() {
  try{
    $q.loading.show({
      message: "유저의 정보를 변경하는중 입니다."
    })
    const userUseCase = UserUseCase.getInstance();
    userStore1.setUserInfo(await userUseCase.userInfoUpdate({
      nickName: nickName.value
    }))
    $q.loading.hide();
    await router.push({
      name: 'homeIntroView'
    })
  }catch (e: any) {
    $q.loading.hide();
    $q.dialog({
      message: e.response.data.errorMessage
    })
  }
}

async function onProfileChange(){
  await $q.dialog({
    component: ProfileImageChangeDialog,
    componentProps: {
      initUserImgUrl: getUserImg()
    }
  });


}

</script>

<style scoped lang="scss">
#viewRoot{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  #contentRoot {
    width: $rootWidth;
    display: flex;
    flex-direction: column;
  }
  header{
    margin-top: 113px;
  }
  #userInfoDivide{
    display: flex;
    align-items: center;
    @include koFont(20)
  }
  #userProfileImageArea{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 15px;
    border-radius: 50%;
    position: relative;
    cursor: pointer;
    width: calc(48px *2);
    height: calc(48px *2);
    div{
      position: absolute;
      top: 50%;
      left: 50%;
      font-size: 22px;
      font-weight: bold;
      color: white;
      transform: translate(-50%,-50%);
      border-radius: 50%;
      width: calc(48px *2);
      height: calc(48px *2);
      display: flex;
      justify-content: center;
      align-items: center;
      visibility: hidden;
    }
    img {
      width: calc(48px *2);
      height: calc(48px *2);
      border-radius: 50%;
    }
    &:hover {
      div {
        background-color: #6969697F;
        visibility: visible;
        z-index: 1;
      }
    }
  }
  #modifyBtn{
    width: 100%;
    margin-bottom: 74px;
    button {
      background-color: $mainColor3;
      height: 55px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 19px;
      font-weight: bold;
      color: white;
      border-radius: 10px;
      border: none;
    }
  }
  #userInfo{
    font-size: 19px;
    #nickName {
      border-radius: 10px;
      border: 1px solid $mainColor4;
      margin-top: 3px;
      width: 100%;
      height: 65px;
      padding: 0 16px;
    }
  }
}
</style>
