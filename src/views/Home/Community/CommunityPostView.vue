<template>
  <div>
    <div id="rootView">
      <div id="title">
        {{post.title}}
      </div>
      <img :src="post.mainImgUrl" id="mainImage">

      <div id="content">
        <div id="writerInfo">
          <div id="user">
            <img :src="post.writeUser.userImg">
            <div id="userName">
              {{post.writeUser.userNickName}}
            </div>
            <div id="writeDate">
              {{post.writeDate}}
            </div>
          </div>
          <i class="spac-heart-solid" id="heart">
          </i>
        </div>
        <div id="bodyContent">
          {{post.bodyContent}}
        </div>

        <ReplyComponent class="replyComponent">

        </ReplyComponent>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {defineProps, ref} from "vue";
import type {PostResDto} from "@/Bis/Post/Dto/PostResDto";
import ReplyComponent from "@/components/Reply/ReplyComponent.vue"

const props = defineProps(['id'])

const post = ref<PostResDto>({
  title: "OPC는 어디서 시작 되었을까?",
  writeDate: "2022/02/02",
  bodyContent: "temp",
  mainImgUrl: "/samplepostimage.png",
  writeUser: {
    userImg: "/cheese_1.png",
    userNickName: "치즈"
  },
  likeCount: 0,
  viewCount: 0,
  replyCount: 3
})
</script>

<style scoped lang="scss">
#rootView {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  #content {
    width: $rootWidth;
    .replyComponent{
      margin-top: 85px;
    }
    #writerInfo{
      display: flex;
      padding: 26px 0;
      justify-content: space-between;
      #user {
        display: flex;
        align-items: center;
        img {
          border-radius: 50%;
          width: 48px;
          height: 48px;
        }
        #userName {
          margin-left: 16px;
          @include koFont(18,black,true)
        }
        #writeDate{
          margin-left: 16px;
          color: $mainColor4;
          font-size: 16px;
        }
      }
      #heart {
        font-size: 30px;
        cursor: pointer;
        color: $mainColor4;
      }
    }
  }
  #mainImage {
    width: 100%;
    height: 430px;
    object-fit: cover;

  }
  #title{
    width: $rootWidth;
    @include koFont(36,black,true);
    padding: 16px 0;
  }

}
</style>
