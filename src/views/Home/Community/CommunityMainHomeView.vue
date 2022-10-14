<template>
  <div>
   <div id="rootView">
     <div id="content">
       <div id="titleBox">
         <div>
           COMMUNITY
         </div>
         <img src="/community.png">
       </div>
       <header class="row justify-center">
         <button id="writeBtn" v-ripple class="relative-position">
           <img src="/pencil_2.png">
           <div @click="onGoWritePage">
             작성 하기
           </div>
         </button>
         <div class="col-6" id="categoryMenus">
           <div class="menu active">
             전체
           </div>
           <div class="menu">
             Tech & Talk
           </div>
           <div class="menu">
             사는 이야기
           </div>
           <div class="menu">
             Q&A
           </div>
         </div>
       </header>
       <div class="row justify-center items-center" id="searchBar">
         <div class="col-4" id="searchCom">
           <input type="text">
           <div>
             <img src="search_1.png">
           </div>
         </div>
         <div id="topPagination">
           <div class="pageBtn" >
             <img src="arrowback.png">
           </div>
           <div class="pageBtn hasPage">
             <img src="arrowforword.png">
           </div>
         </div>
       </div>
       <div id="posts">
         <PostRow v-for="post in posts" :post="post">

         </PostRow>
       </div>
       <div class="row justify-center items-center" id="bottomPaginationArea">

         <div class="pageBtn" >
           <img src="arrowback.png">
         </div>
         <div class="pageBtn hasPage">
           <img src="arrowforword.png">
         </div>
         <div class="col-6" id="pagination">
           <q-pagination  :max="100" flat :max-pages="10" :model-value="2" active-color="primary"  color="grey-4" id="qpage">

           </q-pagination>
         </div>
       </div>
     </div>

   </div>
  </div>
</template>
<script setup lang="ts">
import  PostRow from "@/components/Home/Community/PostRow.vue"
import type {PostResDto} from "@/Bis/Post/Dto/PostResDto";
import router from "@/router";
import {userStore} from "@/stores/store";
import {useQuasar} from "quasar";

const userStore1 = userStore();

const $q = useQuasar()

function onGoWritePage(){
  if(!userStore1.isLogin){
    $q.dialog({
      message: "로그인이 필요 합니다.",
      title: "글 작성하기"
    }).onOk(()=>{
      router.push({
        name: "login"
      })
      return
    })
  }else {
    router.push({
      name: "CommunityPostWriteView"
    })
  }

}
const posts = [
  {
    title: "ModBus 가 뭔가요?",
    replyCount: 0,
    viewCount: 0,
    likeCount: 0,
    writeUser: {
      userImg: "/cheese_1.png",
      userNickName: "치즈",
    },
    mainImgUrl: "",
    bodyContent: "",
    writeDate: "2022/02/22"
  },
  {
    title: "ModBus 가 뭔가요?",
    replyCount: 0,
    viewCount: 0,
    likeCount: 0,
    writeUser: {
      userImg: "/cheese_1.png",
      userNickName: "치즈",
    },
    mainImgUrl: "",
    bodyContent: "",
    writeDate: "2022/02/22"
  },
  {
    title: "ModBus 가 뭔가요?",
    replyCount: 0,
    viewCount: 0,
    likeCount: 0,
    writeUser: {
      userImg: "/cheese_1.png",
      userNickName: "치즈",
    },
    mainImgUrl: "",
    bodyContent: "",
    writeDate: "2022/02/22"
  },
  {
    title: "Protocol Convering 작업 도와 주실분 ?",
    replyCount: 0,
    viewCount: 0,
    likeCount: 0,
    writeUser: {
      userImg: "/cheese_1.png",
      userNickName: "치즈",
    },
    mainImgUrl: "",
    bodyContent: "",
    writeDate: "2022/02/22"
  }
] as PostResDto[]
</script>

<style lang="scss">
#qpage {
  span{
    font-size: 20px;
  }
}
</style>
<style scoped lang="scss">
#rootView {
  width: 100%;
  display: flex;
  justify-content: center;
  #content {
    width: $rootWidth;
    #bottomPaginationArea {
      position: relative;
      width: 100%;
      height: 48px;
      margin-top: 41px;
      #pagination {
        display: flex;
        justify-content: center;
      }
      .pageBtn {
        cursor: pointer;
        opacity: 0.5;
        &.hasPage {
          opacity: 1;
        }
      }
      .pageBtn:nth-child(1){
        position: absolute;
        left: 16px;
      }
      .pageBtn:nth-child(2){
        position: absolute;
        right: 16px;
      }
    }
    #searchBar {
      padding: 30px;
      border-bottom: 1px solid $mainColor4;
      position: relative;
      #topPagination{
        position: absolute;
        right: 0;
        top: 25px;
        display: flex;
        .pageBtn{
          cursor: pointer;
          opacity: 0.5;
          &.hasPage {
            opacity: 1;
          }
        }
      }
      #searchCom {
        display: flex;
        input {
          flex-grow: 3;
          border: 1px solid $mainColor4;
          border-radius: 20px;
          padding: 16px;
          height: 45px;
        }
        div {
          flex-grow: 1;
          cursor: pointer;
          margin: 0 20px;
          display: flex;
          justify-content: center;
          align-items: center;
          opacity: 0.5;
          &:hover {
            opacity: 1;
          }
        }
      }
    }

    header {
      position: relative;
      margin-top: 35px;
      padding: 30px;
      border-bottom: 1px solid $mainColor4;
      #categoryMenus{
       @include koFont(22,$mainColor4);
        font-weight: bold;
        .menu {
          cursor: pointer;
          &.active{
            color: black;
          }
        }
      }
      #writeBtn {
        position: absolute;
        left: 0;
        display: flex;
        align-items: center;
        padding: 0 13px;
        @include koFont(19,white);
        background-color: $mainColor3;
        border-radius: 7px;
        border: none;
        height: 41px;
        cursor: pointer;
        img{
          margin-right: 14px;
        }
        div {
          margin-right: 14px;
        }
      }
      #categoryMenus {
        display: flex;
        justify-content: space-between;
      }
    }

    #titleBox {
      @include enTitleFont(50);
      background: rgba(91, 255, 225, 0.5);
      border-radius: 10px;
      margin-top: 80px;
      position: relative;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 150px;
      img {
        position: absolute;
        right: 31px;
        bottom: 60px;
      }
    }
  }
}
</style>
