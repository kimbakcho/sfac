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
}

#root {
  width: 375px;
  height: 550px;
}


</style>
