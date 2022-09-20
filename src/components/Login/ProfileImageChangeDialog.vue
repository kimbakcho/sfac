<template>
  <q-dialog ref="dialogRef" @hide="onDialogHide"  >
    <q-card class="q-dialog-plugin" style="max-width: 280px">
      <q-card-section>
        <div class="row justify-center">
          <div id="userImgArea">
            <img :src="imgUrl">
          </div>
          <label id="uploadBtn" for="newUserProfile">
            <div style="font-size: 20px">
              이미지 업로드
            </div>
            <div>
              권장사이즈 48x48px
            </div>
            <div>
              최대 1Mb
            </div>
          </label>
          <input type="file" hidden id="newUserProfile"  accept=".png, .jpg, .jpeg" @input="onInputImage">
        </div>
      </q-card-section>
      <q-card-actions style="padding: 0 16px 16px 16px;">
        <button id="changeBtn" @click="onChangeProfileImage" class="relative-position" v-ripple>
          변경
        </button>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import {useDialogPluginComponent, useQuasar} from 'quasar'
import {ref, defineProps, onMounted} from "vue";
import {connectStorageEmulator, getStorage, ref as fRef} from "firebase/storage";
import {getApp} from "firebase/app";
import {v4 as uuidv4} from "uuid";
import FireStorageUseCase from "@/Bis/FireStore/FireStorageUseCase";
import UserUseCase from "@/Bis/User/Domain/UserUseCase";
import {userStore} from "@/stores/store";
const props = defineProps<{
  initUserImgUrl: string
}>()

const $q=useQuasar();
let userStore1 = userStore();
async function onChangeProfileImage (){
  if(changeFile){
    try{
      $q.loading.show({
        message: "프로필의 이미지를 변경하는중 입니다."
      })
      const imageUrl = await FireStorageUseCase.getInstance().uploadUserProfileImage(changeFile.value!);
      const userUseCase = UserUseCase.getInstance();
      userStore1.setUserInfo(await userUseCase.userInfoUpdate({
        profileImgUrl: imageUrl
      }))

      $q.loading.hide();
      onDialogOK()
    }catch (e) {
      $q.dialog({
        message: "이미지 업로드에 문제가 생겼습니다."
      })
      $q.loading.hide();
      return ;
    }
  }else {
    $q.dialog({
      message: "업로드할 이미지를 선택해 주세요."
    })
  }
}

const changeFile = ref<File | null>(null)

async function onInputImage(e: InputEvent){
  const input = e.currentTarget as HTMLInputElement
  if(input.files && input.files.length > 0){
    const file = input.files[0];
    if(file.size>(1024*1024)){
      $q.dialog({
        message: "파일용량은 1Mb 이하여야 합니다."
      })
      return;
    }
    changeFile.value = file
    imgUrl.value = await toBase64(file)
  }
}
function toBase64(file: File):Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = error => reject(error);
  })
}

const imgUrl = ref("")

onMounted(()=>{
  imgUrl.value = props.initUserImgUrl
})

defineEmits([
  ...useDialogPluginComponent.emits
])
const { dialogRef, onDialogHide, onDialogOK, onDialogCancel } = useDialogPluginComponent()

function onOKClick(){
  onDialogOK()
}

</script>

<style scoped lang="scss">
#changeBtn{
  background-color: $mainColor1;
  border: none;
  color: white;
  width: 100%;
  height: 35px;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;
}
#uploadBtn{
  margin-top: 16px;
  width: 100%;
  border-radius: 10px;
  background-color: $mainColor3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  row-gap: 3px;
  color: white;
  padding: 8px;
}
#userImgArea{
  img{
    width: calc(48px *2);
    height: calc(48px *2);
    border-radius: 50%;
  }
}
</style>
