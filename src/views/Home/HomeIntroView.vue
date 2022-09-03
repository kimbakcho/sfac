<template>
  <div>
    <div id="homeHeader">
      <img src="big_data_1.png" class="introIcon" id="icon1" alt="icon1">

      <img src="machine_learning_1.png" class="introIcon"  id="icon2" alt="icon2">

      <img src="smartphone_1.png" class="introIcon"  id="icon3" alt="icon3">

      <div class="row justify-center" id="introTitle">
        <div class="col-8 row justify-center">
          Trending Solution Smart Factory
        </div>
      </div>
      <div class="row justify-center" id="introSubTitle2">
        <div class="col-8 row justify-center">
          Smart factoy 소통과 혁신 위한 Commutity를 <br>
          만들어 나가아고자 합니다.
        </div>
      </div>
    </div>
    <div class="row no-wrap justify-start" style="column-gap: 20px" >
      <TopPostCard :post="post.post" :user-info="post.user" class="col-4 topPostCard" v-for="post in posts">

      </TopPostCard>
    </div>
  </div>
</template>

<script setup lang="ts">
import type {PostResDto} from "@/Bis/Post/Dto/PostResDto";
import type {UserInfoResDto} from "@/Bis/User/Dto/UserInfoResDto";
import TopPostCard from "@/components/Home/TopPostCard.vue"

const posts = [
  {
    post: {
      mainImgUrl: "postexample1.png",
      title: "반도체 공정에서 스마트 팩토리를 위해 기본 용어를 알아 보자!",
      writeDate: "2022-08-22",
      bodyContent: "반도체 제조 공정 에서 사용 되는 기본 적인 용어들이 있습니다.  이 용어들을 알고 있으면 스마트 팩토리 적용에 개발자가 소통에 많이 용이 합니다."
    } as PostResDto,
    user: {
      userImg: "userexample1.png",
      userNickName: "백구"
    } as UserInfoResDto
  },
  {
    post: {
      mainImgUrl: "postexample1.png",
      title: "반도체 공정에서 스마트 팩토리를 위해 기본 용어를 알아 보자!",
      writeDate: "2022-08-22",
      bodyContent: "반도체 제조 공정 에서 사용 되는 기본 적인 용어들이 있습니다.  이 용어들을 알고 있으면 스마트 팩토리 적용에 개발자가 소통에 많이 용이 합니다."
    } as PostResDto,
    user: {
      userImg: "userexample1.png",
      userNickName: "백구"
    } as UserInfoResDto
  },
  {
    post: {
      mainImgUrl: "postexample1.png",
      title: "반도체 공정에서 스마트 팩토리를 위해 기본 용어를 알아 보자!",
      writeDate: "2022-08-22",
      bodyContent: "반도체 제조 공정 에서 사용 되는 기본 적인 용어들이 있습니다.  이 용어들을 알고 있으면 스마트 팩토리 적용에 개발자가 소통에 많이 용이 합니다."
    } as PostResDto,
    user: {
      userImg: "userexample1.png",
      userNickName: "백구"
    } as UserInfoResDto
  },
]
</script>

<style scoped lang="scss">

#introSubTitle2 {
  position: absolute;
  bottom: 123px;
  width: 100%;
  font-size: 24px;
  font-weight: normal;
  color: $mainColor4;
}

#introSubTitle1 {
  position: absolute;
  top: 243px;
  width: 100%;
  @include enTitleFont(45, $mainColor3)
}

#introTitle{
  position: absolute;
  top: 135px;
  width: 100%;
  @include enTitleFont(68)
}

#homeHeader{
  height: 553px;
  width: 100%;
  position: relative;
  .introIcon {
    position: absolute;
    &#icon1 {
      top: 24px;
      left: 197px;
    }
    &#icon2 {
      top: 209px;
      right: 100px;
    }
    &#icon3 {
      bottom: 123px;
      left: 100px;
    }
  }

}
</style>
