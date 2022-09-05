<template>
  <div>
    <div id="rootView">
      <div id="content">
        <div id="titleBox">
          <div>
            글작성 하기
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
            <select name="topic" id="topic">
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

          <input type="text" id="title" placeholder="제목을 입력해주세요">

        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
#rootView{
  width: 100%;
  display: flex;
  justify-content: center;
  #content{
    width: $rootWidth;
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
  }
}
</style>
