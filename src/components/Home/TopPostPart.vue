<template>
  <div class="row no-wrap justify-start" style="column-gap: 20px;padding-top: 29px;padding-bottom: 20px">
    <TopPostCard :post="post.post" :user-info="post.user" class="col-4 topPostCard" v-for="post in posts">

    </TopPostCard>
  </div>
</template>

<script setup lang="ts">
import TopPostCard from "@/components/Home/TopPostCard.vue"
import type {PostResDto} from "@/Bis/Post/Dto/PostResDto";
import type {UserInfoResDto} from "@/Bis/User/Dto/UserInfoResDto";
const posts = [
  {
    post: {
      mainImgUrl: "postexample1.png",
      title: "반도체 공정에서 스마트 팩토리를 위해 기본 용어를 알아 보자!",
      writeDate: "2022-08-22",
      bodyContent: "반도체 제조 공정 에서 사용 되는 기본 적인 용어들이 있습니다.  이 용어들을 알고 있으면 스마트 팩토리 적용에 개발자가 소통에 많이 용이 합니다.",
      replyCount: 0,
      viewCount: 0
    } as PostResDto,
    user: {
      profileImgUrl: "userexample1.png",
      nickName: "백구",
      user: 3
    } as UserInfoResDto
  },
  {
    post: {
      mainImgUrl: "postexample1.png",
      title: "반도체 공정에서 스마트 팩토리를 위해 기본 용어를 알아 보자!",
      writeDate: "2022-08-22",
      bodyContent: "반도체 제조 공정 에서 사용 되는 기본 적인 용어들이 있습니다.  이 용어들을 알고 있으면 스마트 팩토리 적용에 개발자가 소통에 많이 용이 합니다.",
      replyCount: 0,
      viewCount: 0
    } as PostResDto,
    user: {
      profileImgUrl: "userexample1.png",
      nickName: "백구",
      user: 3
    } as UserInfoResDto
  },
  {
    post: {
      mainImgUrl: "postexample1.png",
      title: "반도체 공정에서 스마트 팩토리를 위해 기본 용어를 알아 보자!",
      writeDate: "2022-08-22",
      bodyContent: "반도체 제조 공정 에서 사용 되는 기본 적인 용어들이 있습니다.  이 용어들을 알고 있으면 스마트 팩토리 적용에 개발자가 소통에 많이 용이 합니다.",
      replyCount: 0,
      viewCount: 0
    } as PostResDto,
    user: {
      profileImgUrl: "userexample1.png",
      nickName: "백구",
      user: 3
    } as UserInfoResDto
  },
]
</script>

<style scoped lang="scss">

</style>
