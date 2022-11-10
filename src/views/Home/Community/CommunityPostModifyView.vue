<template>
  <div>
    <div id="rootView">
      <form id="content">
        <div id="titleBox">
          <div>
            글수정 하기
          </div>
          <img src="/pencil_1.png">
        </div>
        <div id="subTitle">
          정보를 공유하여 소통해 보세요.
        </div>
        <div id="topicArea">
          <label for="topic">
            토픽
          </label>
          <select name="topic" id="topic" v-model="post.category1">
            <option value="">토픽을 선택해 주세요</option>
            <option value="Tech And Talk">Tech & Talk</option>
            <option value="lifeTalk">사는 이야기</option>
            <option value="qna">Q & A</option>
          </select>
        </div>
        <div id="titleInputArea">
          <div>
            <label for="title">
              제목
            </label>
          </div>
          <input type="text" id="title" v-model="post.title" placeholder="제목을 입력해주세요">
        </div>
        <div id="titleImgArea">
          <div id="titleImage">
            <span>
              메인 이미지
            </span>
            <span>
              글 메인에 등록할 이미지 입니다.
            </span>
          </div>
          <BImageAttachments v-model="attachMainImg" style="margin-top: 16px">

          </BImageAttachments>
        </div>
        <div id="postContentArea">
          <div id="postContentTitle">
            상세 정보
          </div>
          <Editor
              v-model="post.bodyContent"
              tinymce-script-src="/tinymce/tinymce.min.js"
              :init="{ plugins: 'lists link image table code help emoticons media',
                  toolbar: 'undo redo | emoticons | styles | fontfamily fontsize bold italic | forecolor backcolor | alignleft aligncenter alignright alignjustify | outdent indent',
                  language: 'ko_KR',
                  font_family_formats: 'Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats;Noto Sans KR=Noto Sans KR;나눔 고딕=Nanum Gothic',
                  images_upload_handler: imageUpload,
                  statusbar: false}"
          >
          </Editor>
        </div>
        <button type="submit" @click="onModify" id="postModifyBtn" class="relative-position" v-ripple>
          수정 하기
        </button>
      </form>
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
import type {PostResDto} from "@/Bis/Post/Dto/PostResDto";
import BImageAttachments from "@/components/Etc/BImageAttachments.vue"
import type {ImageAttachFile} from "@/components/Etc/Dto/ImageAttachFile";
import {imageUpload} from "@/Bis/TinyMceUtil/TinyMceUtil"
import {useQuasar} from "quasar";
import FireStorageUseCase from "@/Bis/FireStore/FireStorageUseCase";
import router from "@/router";
import Editor from '@tinymce/tinymce-vue'
const props = defineProps<{ id: string, post: PostResDto }>()
const attachMainImg = ref<Array<ImageAttachFile>>([])
onMounted(()=>{
  if(props.post.mainImageUrl){
    attachMainImg.value.push({
      url: props.post.mainImageUrl
    })
  }
})

const $q = useQuasar()

async function onModify(e: Event){
  e.preventDefault()
  const postUseCase = PostUseCase.getInstance();
  $q.loading.show({
    message: "글을 업로드 중입니다."
  })
  try{
    let mainImageUrl = ""
    if(attachMainImg.value.length > 0 && attachMainImg.value[0].file) {
      if(attachMainImg.value[0].file){
        const fireStorageUseCase = FireStorageUseCase.getInstance();
        mainImageUrl = await fireStorageUseCase.uploadPostImage(attachMainImg.value[0].file)
      }else if(attachMainImg.value[0].url){
        mainImageUrl =attachMainImg.value[0].url
      }
    }
    const post =  await postUseCase.postModify({
      id: Number(props.id),
      title: props.post.title,
      bodyContent: props.post.bodyContent,
      category1: props.post.category1,
      mainImageUrl: mainImageUrl
    })
    await router.push({
      name: "CommunityPost",
      params: {
        id: props.id
      }
    })

    $q.loading.hide()
  }catch (e) {
    $q.loading.hide()
    $q.dialog({
      message: "작성에 실패 했습니다."
    })
  }
}

</script>

<style scoped lang="scss">
#rootView{
  width: 100%;
  display: flex;
  justify-content: center;
  #content {
    width: $rootWidth;
    #postModifyBtn{
      margin-top: 16px;
      width: 100%;
      height: 56px;
      background: $mainColor1;
      border-radius: 10px;
      border: none;
      @include koFont(22,white)
    }
    #postContentArea {
      margin-top: 33px;
      #postContentTitle {
        @include koFont(22)
      }
      #postContentValue{
        margin-top: 9px;
        width: 100%;
        height: 482px;
      }
    }
    #topicArea {
      @include koFont(22);
      margin-top: 38px;
      select {
        width: 100%;
        height: 66px;
        border: 1px solid #696969;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        padding: 0 16px;
        margin-top: 9px;
        appearance: none;
        background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
        background-repeat: no-repeat;
        background-position: right 1rem center;
        background-size: 1em;
      }
    }

    #titleBox {
      @include koFont(50);
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
    #subTitle {
      @include koFont(30);
      line-height: 43px;
      margin-top: 9px;
    }

    #titleInputArea {
      margin-top: 26px;
      @include koFont(22);
      input {
        width: 100%;
        height: 66px;
        padding: 16px;
        border: 1px solid $mainColor4;
        border-radius: 10px;
        margin-top: 9px;
        &::placeholder {
          font-size: 22px;
        }
      }
    }

    #titleImgArea {
      margin-top: 28px;
      #titleImage{
        span:nth-child(1){
          @include koFont(22)
        }
        span:nth-child(2){
          margin-left: 16px;
          @include koFont(15,$mainColor4)
        }
      }
    }
  }
}
</style>
