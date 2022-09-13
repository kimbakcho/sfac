<template>
  <div ref="root">
    <div v-for="reply in tempReplyData" :key="reply.uuid" :ref="setReplyView" class="replyView">
      <div class="userInfo">
        <img :src="reply.user.userImg" />
        <div class="textInfo">
          <div>
            {{reply.user.userNickName}}
          </div>
          <div>
            {{reply.writeTime}}
          </div>
        </div>
      </div>
      <div class="replyContent">
        {{reply.replyContent}}
      </div>
      <div v-if="reply.subReply.length > 0" class="moreReplyInfo">
        <div class="moreReply" @click="onSubOpen(reply)">
          <i v-if="!reply.subReplyOpen" class="spac-arrowdown">
          </i>
          <i v-else class="spac-arrowup">

          </i>
          <div>
            {{`댓글 보기 ${reply.subReply.length}개`}}
          </div>
        </div>
        <div class="replyWrite">
          댓글 쓰기
        </div>
      </div>
      <div v-else>
        <div class="replyWrite">
          댓글 쓰기
        </div>
      </div>

      <div v-if="reply.subReplyOpen  && reply.subReply">
        <ReplyViews :depth="depth+1" reply-id="10" :subReply="reply.subReply" >

        </ReplyViews>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import {defineProps, onMounted, ref, type Ref} from "vue";
import type {UserInfoResDto} from "@/Bis/User/Dto/UserInfoResDto";
import type {PostReplyResDto} from "@/Bis/Reply/PostReplyResDto";
import ReplyViews from "@/components/Reply/ReplyViews.vue";

const props = defineProps<{
  replyId: string,
  depth: number,
  subReply: PostReplyResDto[] | null
}>()

const root = ref< HTMLDivElement| null>(null)

const subOpen = ref(false)

function onSubOpen(reply: PostReplyResDto) {
  console.log(reply.subReplyOpen)
  reply.subReplyOpen = !reply.subReplyOpen;
}

function setReplyView(el: HTMLDivElement){
  if(!props.depth) {
    el.style.paddingBottom = '20px'
  }
}

const tempReplyData = ref<PostReplyResDto[]>([])

onMounted(()=>{
  if(props.depth){
    console.log(root.value)
    root.value!.style.marginLeft=`${20*props.depth}px`
  }

  if(!props.subReply){
    tempReplyData.value.push({
      uuid: "tet1",
      user: {
        userImg: "/cheese_1.png",
        userNickName: "하얀"
      } as UserInfoResDto,
      replyContent: "오호 OPC 의 클래식의 시작은 여기서 부터 였군요. \n" +
          "재미 있어요 ^^ 좋은 정보 감사 해요 ",
      subReplyCount: 2,
      writeTime: "6일전",
      subReplyOpen: false,
      subReply: [
        {
          uuid: "tet2",
          user: {
            userImg: "/cheese_1.png",
            userNickName: "하얀2"
          } as UserInfoResDto,
          replyContent: "오호 OPC 의 클래식의 시작은 여기서 부터 였군요. \n" +
              "재미 있어요 ^^ 좋은 정보 감사 해요 ",
          subReplyCount: 0,
          writeTime: "3일전",
          subReply: [{
            uuid: "tet11",
            user: {
              userImg: "/cheese_1.png",
              userNickName: "하얀"
            } as UserInfoResDto,
            replyContent: "오호 OPC 의 클래식의 시작은 여기서 부터 였군요. \n" +
                "재미 있어요 ^^ 좋은 정보 감사 해요 ",
            subReplyCount: 2,
            writeTime: "6일전",
            subReplyOpen: false,
            subReply: [] as  PostReplyResDto[]
          }] as PostReplyResDto[],
          subReplyOpen: false
        },
        // {
        //   uuid: "tet3",
        //   user: {
        //     userImg: "/cheese_1.png",
        //     userNickName: "하얀3"
        //   } as UserInfoResDto,
        //   writeTime: "오늘",
        //   replyContent: "오호 OPC 의 클래식의 시작은 여기서 부터 였군요. \n" +
        //       "재미 있어요 ^^ 좋은 정보 감사 해요 ",
        //   subReplyCount: 0,
        //   subReply: [] as PostReplyResDto[],
        //   subReplyOpen: false
        // }
      ]
    })
    tempReplyData.value.push({
      uuid: "tet4",
      writeTime: "2일전",
      user: {
        userImg: "/cheese_1.png",
        userNickName: "하얀3"
      } as UserInfoResDto,
      replyContent: "오호 OPC 의 클래군요. \n" +
          "재미 있어요 ^^ 좋은 정보 감사 해요 ",
      subReplyCount: 2,
      subReplyOpen: false,
      subReply: [
        {
          uuid: "tet5",
          writeTime: "1일전",
          user: {
            userImg: "/cheese_1.png",
            userNickName: "하얀4"
          } as UserInfoResDto,
          replyContent: "오호 OPC 의 클래식의 시작은 여기서 부터 \n" +
              "재미 있어요 ^^ 좋은 정보 감사 해요 ",
          subReplyCount: 0,
          subReply: [] as PostReplyResDto[],
          subReplyOpen: false
        },
        {
          uuid: "tet6",
          writeTime: "2일전",
          user: {
            userImg: "/cheese_1.png",
            userNickName: "하얀3"
          } as UserInfoResDto,
          replyContent: "오호 OPC 의 클래식의 32 였군요. \n" +
              "재미 있어요 ^^ 좋은 정보 감사 해요 ",
          subReplyCount: 0,
          subReply: [] as PostReplyResDto[],
          subReplyOpen: false
        }
      ]
    })
  }else {
    props.subReply.forEach((item)=>{
      tempReplyData.value.push(item)
    })
  }

})



</script>

<style scoped lang="scss">
.replyView{
  padding: 20px 20px 0px;
  border-bottom: 1px solid $mainColor4;
}
.replyView:last-child {
  border-bottom: none;
}
.userInfo{
  display: flex;
  img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    object-fit: cover;
  }
  .textInfo {
    @include koFont(12);
    margin-left: 20px;
    div:nth-child(2) {
      margin-top: 8px;
    }
  }
}
.replyContent{
  margin-top: 25px;
  @include koFont(12)
}
.moreReplyInfo{
  margin-top: 20px;
  display: flex;
  .moreReply{
    cursor: pointer;
    display: flex;
    @include koFont(12,$mainColor3);
    i {
      color: $mainColor3;
      margin-right: 8px;
    }
  }
  .replyWrite{
    cursor: pointer;
    margin-left: 20px;
    margin-top: 0px;
    margin-bottom: 0px;
    @include koFont(12,$mainColor4);
  }
}

.replyWrite{
  cursor: pointer;
  margin-top: 20px;
  margin-left: 0px;
  margin-bottom: 20px;
  @include koFont(12,$mainColor4);
}
</style>
