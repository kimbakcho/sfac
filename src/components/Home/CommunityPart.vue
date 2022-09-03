<template>
  <div style="padding-top: 50px;padding-bottom: 20px">
    <div class="row items-center" id="title">
      <div>
        Community
      </div>
      <img src="right_arrow_1.png" />
    </div>
    <CommunitySummaryBoard icon-img-url="new_1.png" post-part="최신글" summary-name="최신글" style="margin-top: 20px"/>
    <CommunitySummaryBoard icon-img-url="talkandtech_1.png" post-part="Tech & Talk" summary-name="Tech & Talk" style="margin-top: 20px"/>
    <CommunitySummaryBoard icon-img-url="lifestyle_1.png" post-part="사는이야기" summary-name="사는이야기" style="margin-top: 20px"/>
    <CommunitySummaryBoard icon-img-url="faq_1.png" post-part="Q&A" summary-name="Q&A" style="margin-top: 20px"/>
  </div>
</template>

<script setup lang="ts">
import CommunitySummaryBoard from "@/components/Home/CommunitySummaryBoard.vue"
</script>

<style scoped lang="scss">
#title {
  @include enTitleFont(38);

  img {
    margin-left: 14px;
  }
}
</style>
