<template>
  <div id="root">
    <img :src="post.mainImgUrl" id="mainImg" alt="mainCardImg">
    <div id="title">
      {{ post.title }}
    </div>
    <div id="bodyContent">
      {{ post.bodyContent }}
    </div>
    <div id="etcInfo">
      <div id="userInfo" style="display: flex;align-items: center">
        <img :src="userInfo.userImg">
        <div>
          {{ userInfo.userNickName }}
        </div>
      </div>
      <div id="writeDate">
        {{ post.writeDate }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {defineProps} from "vue";
import type {UserInfoResDto} from "@/Bis/User/Dto/UserInfoResDto";
import type {PostResDto} from "@/Bis/Post/Dto/PostResDto";

const props = defineProps<{
  post: PostResDto,
  userInfo: UserInfoResDto
}>()

</script>

<style scoped lang="scss">
#etcInfo {
  margin-top: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  #userInfo {
    img {
      width: 48px;
      height: 48px;
      border-radius: 50%;
    }
    div {
      @include koFont(18, "black", true);
      margin-left: 16px;
    }
    #writeDate {
      @include koFont(16, "black");
    }
  }
}
#bodyContent {
  @include koFont(22,$mainColor4,false);
  line-height: 32px;
}

#title {
  @include koFont(22,"black",true);
  line-height: 32px;
}

#mainImg {
  border-radius: 10px;
  height: 280px;
  object-fit: fill;
  width: 100%;
}

#root {
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    padding-bottom: 10px;
    transform: translateY(-5%);
  }
}


</style>
