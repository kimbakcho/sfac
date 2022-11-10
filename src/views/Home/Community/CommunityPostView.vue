<template>
  <div>
    <div id="rootView">
      <div id="title">
        {{ post.title }}
      </div>
      <img v-if="post.mainImageUrl" :src="post.mainImageUrl" id="mainImage">

      <div id="content">
        <div id="writerInfo">
          <div id="user">
            <img :src="post.writeUser.profileImgUrl">
            <div id="userName">
              {{ post.writeUser.nickName }}
            </div>
            <div id="writeDate">
              {{ post.writeDate }}
            </div>
          </div>
          <div style="display: flex;align-items: center">
            <div v-if="isCanModifyPost()" id="postModifyBtn" @click="goModifyPage" v-ripple class="relative-position">
              수정
            </div>
            <div style="margin-left: 16px">
              <i class="spac-heart-solid" id="heart">
              </i>
            </div>
          </div>

        </div>
        <div id="bodyContent" v-html="post.bodyContent">

        </div>

        <!--        <ReplyComponent class="replyComponent">-->

        <!--        </ReplyComponent>-->

      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import PostUseCase from "@/Bis/Post/Domain/PostUseCase";

export default defineComponent({
  async beforeRouteEnter(to: any, from, next: any) {
    const id = to.params.id
    const postUseCase = PostUseCase.getInstance();
    to.params.post = await postUseCase.getPost(Number(id))
    next()
  }
})

</script>


<script setup lang="ts">
import {defineProps, onMounted, ref} from "vue";
import ReplyComponent from "@/components/Reply/ReplyComponent.vue"
import type {PostResDto} from "@/Bis/Post/Dto/PostResDto";
import {userStore} from "@/stores/store";
import router from "@/router";

const props = defineProps<{ id: string, post: PostResDto }>()
onMounted(() => {

})

function isCanModifyPost() {
  const userStore1 = userStore();
  return userStore1.isLogin && userStore1.userInfo!.id == props.post.writeUser.id;
}
function goModifyPage(){
  router.push({
    name: "CommunityPostModifyView",
    params:{
      id: props.id
    }
  })
}


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

    .replyComponent {
      margin-top: 85px;
    }

    #writerInfo {
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
          @include koFont(18, black, true)
        }

        #writeDate {
          margin-left: 16px;
          color: $mainColor4;
          font-size: 16px;
        }
      }

      #postModifyBtn {
        width: 117px;
        height: 41px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 19px;
        color: white;
        background-color: $mainColor3;
        border-radius: 10px;
        cursor: pointer;
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

  #title {
    width: $rootWidth;
    @include koFont(36, black, true);
    padding: 16px 0;
  }

}
</style>
