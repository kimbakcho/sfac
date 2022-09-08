<template>
  <div id="root">
    <form>
      <div id="writeBody">
        <img :src="userInfo.userImg" />
        <textarea placeholder="댓글을 입력해주세요">

        </textarea>
      </div>
      <div id="actions">
        <button id="writeBtn" type="submit" class="relative-position" v-ripple>
          댓글 쓰기
        </button>
      </div>
      <div>


      </div>

    </form>

  </div>
</template>

<script setup lang="ts">
import {defineProps, h, onMounted, ref, render} from "vue";
import type {UserInfoResDto} from "@/Bis/User/Dto/UserInfoResDto";

const props = defineProps(['id'])

const userInfo = ref<UserInfoResDto>({
  userImg: "/cheese_1.png",
  userNickName: "백구"
})

</script>

<style scoped lang="scss">
#root {
  width: 100%;
  padding: 16px;
  border-radius: 10px;
  border: 1px solid $mainColor4;
  #actions{
    margin-top: 20px;
    display: flex;
    justify-content: flex-end;
    #writeBtn{
        width: 145px;
        height: 40px;
        border: none;
        cursor: pointer;
        background-color: $mainColor2;
        border-radius: 10px;
        @include koFont(12,black,true)
    }
  }
  #writeBody{
    display: flex;

    img{
      width: 48px;
      height: 48px;
      object-fit: cover;
      border-radius: 50%;
    }
    textarea{
      margin-left: 20px;
      flex-grow: 1;
      min-height: 120px;
      border-radius: 10px;
      border: 1px solid $mainColor4;
    }
  }
}
</style>
