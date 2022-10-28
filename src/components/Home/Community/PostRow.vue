<template>
  <div id="rowRoot">
    <div id="writeInfo">
      <img  id="userImg" :src="post.writeUser.profileImgUrl" >
      <div id="nickName">
        {{post.writeUser.nickName}}
      </div>
      <div id="writeTime">
        {{ getWriteTime() }}
      </div>
    </div>
    <div id="postTitle">
      {{post.title}}
    </div>
    <div id="countInfo">
      <i class="spac-eye-solid"></i>
      <div>
        {{post.viewCount}}
      </div>
      <i class="spac-heart-solid"/>
      <div>
        {{post.likeCount}}
      </div>
      <i class="spac-reply">
      </i>
      <div>
        {{post.replyCount}}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {defineProps} from "vue";
import type {PostResDto} from "@/Bis/Post/Dto/PostResDto";
import TimeUtil from "@/Bis/Util/UseCase/TimeUtil";
import {DateTime} from "luxon";

const props = defineProps<{
  post: PostResDto
}>()

function getWriteTime() {
  let timeUtil = TimeUtil.getInstance();
  return timeUtil.nowDiffTimeStr(DateTime.fromISO(props.post.writeDate))
}

</script>

<style scoped lang="scss">
#rowRoot{
  padding: 16px;
  position: relative;
  cursor: pointer;
  border-bottom: 1px solid $mainColor4;
  &:hover {
    background-color: lightslategray;
    color: white;
    #postTitle{
     color: white;
    }
    #writeInfo {
      #nickName, #writeTime {
        color: white;
      }
    }

  }
  #postTitle{
    margin-top: 9px;
    @include koFont(22,black,true)
  }
  #countInfo {
    position: absolute;
    right: 16px;
    bottom: 16px;
    display: flex;
    font-size: 22px;
    div{
      margin-left: 6px;
    }
    i {
      margin-left: 16px;
    }
  }
  #writeInfo{
    display: flex;
    align-items: center;
    #userImg {
      border-radius: 50%;
      object-fit: cover;
      width: 48px;
      height: 48px;
      margin-right: 36px;
    }
    #nickName{
      margin-right: 36px;
      @include koFont(18,$mainColor4)
    }
    #writeTime {
      @include koFont(18,$mainColor4)
    }
  }
}
</style>
