<template>
  <div id="root">
    <div id="title" class="row items-center">
      <img :src="iconImgUrl" />
      <div>
        {{summaryName}}
      </div>
    </div>
    <div class="post row" v-for="post in posts">
      <div class="postTitle col-10">
        {{post.title}}
      </div>
      <div class="col-1 replyRoot" >
        <img src="reply1.png">
        <div>
          {{post.replyCount}}
        </div>
      </div>
      <div class="col-1 viewRoot">
        <img src="view1.png">
        <div>
          {{post.viewCount}}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {defineProps, ref} from "vue";
import type {PostResDto} from "@/Bis/Post/Dto/PostResDto";

const props = defineProps<{
  postPart: string,
  summaryName: string,
  iconImgUrl: string
}>()

const posts = ref<PostResDto[]>([
  {
    title: "요즘 스마트 팩토리 관련 분야에 개발 중 이신 2030 개발자 분 계신가요?",
    writeDate: "2022/05/15",
    bodyContent: "",
    mainImgUrl: undefined,
    replyCount: 0,
    viewCount: 0
  },
  {
    title: "앞으로 FA 분야의 전망은 어떻게 될까요?",
    writeDate: "2022/03/15",
    bodyContent: "",
    mainImgUrl: undefined,
    replyCount: 0,
    viewCount: 0
  },
  {
    title: "처음 보는 PLC 인데 프로토콜이 이상하네요...",
    writeDate: "2022/05/13",
    bodyContent: "",
    mainImgUrl: undefined,
    replyCount: 0,
    viewCount: 0
  },
  {
    title: "이거 데이터 어떻게 따야 하지 ?? 감이 안잡히네 ",
    writeDate: "2022/05/10",
    bodyContent: "",
    mainImgUrl: undefined,
    replyCount: 0,
    viewCount: 0
  }
])
</script>

<style scoped lang="scss">
.postTitle{
  @include koFont(18,$mainColor4);
  cursor: pointer;
  &:hover {
    color: black;
  }
}
.post {
  margin-top: 16px;
}
.replyRoot, .viewRoot {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-right: 20px;
}

#root {
  border-radius: 12px;
  border: 1px solid $mainColor4;
  width: 100%;
  padding: 15px;
}
#title {
  @include koFont(22,black,true);
  div {
    margin-left: 14px;
  }
}
</style>
