<template>
  <div>
    <div id="title">
      SNS 회원 가입
    </div>
    <div id="loginButtons">
      <div class="btn">
        <i class="spac-googleicon">
        </i>
      </div>
      <div class="btn">
        <i class="spac-navericon">
        </i>
      </div>
      <div class="btn">
        <i class="spac-kakaotalk">
        </i>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
#title{
  @include koFont(20);

}
#loginButtons {
  margin-top: 16px;
  display: flex;
  gap: 20px;
  .btn{
    width: 176px;
    height: 39px;
    background: #FFFFFF;
    border: 1px solid $mainColor4;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    i{
      color: $mainColor4;
    }
    &:hover{
      i{
        color: #000000;
      }
    }
  }
}

</style>
