<template>
  <div>
    <div style="display: flex;column-gap: 20px">
      <div v-for="(item,index) in modelValue" class="attachItem shadow-4"  :key="index">
        <img :src="getImgSrc(item)" class="attachImg">
        <button class="deleteBtn" @click="onDeleteItem(index)">
          <q-icon name="close" size="1.5rem">

          </q-icon>
        </button>
      </div>
      <div v-if="modelValue.length < limitCount">
        <label for="fileItem" id="mainImageLabel" class="shadow-4">
          <img src="/image_file_add.png">
        </label>
        <input type="file" id="fileItem" hidden accept="image/png, image/gif, image/jpeg" @input="onInputFile">
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import type {ImageAttachFile} from "@/components/Etc/Dto/ImageAttachFile";
import {ref} from "vue";

const props = withDefaults(defineProps<{
  limitCount?: number
  modelValue?: Array<ImageAttachFile>
}>(),{
  limitCount: 1,
  modelValue: ()=>[]
})

function onDeleteItem(index: number){
  props.modelValue.splice(index,1)
}

const emits = defineEmits<{
  (e:"update:modelValue", value: Array<ImageAttachFile>): void
}>()

async function onInputFile(e: Event){
  const target = e.target as HTMLInputElement
  const file = target.files![0];
  let item = {} as ImageAttachFile;
  item.file = file
  item.base64Url = await readFileToBase64Url(file)
  props.modelValue.push(item)
  emits("update:modelValue",props.modelValue)
}

function readFileToBase64Url(file: File): Promise<string>{
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = e => resolve(e.target!.result as string)
    reader.onerror = e => reject(e)
    reader.readAsDataURL(file);
  })
}

function getImgSrc(item: ImageAttachFile){
  if(item.base64Url){
    return item.base64Url
  }
  if(item.url){
    return item.url
  }
}
</script>

<style scoped lang="scss">
.attachItem{
  position: relative;
  border-radius: 10px;
  .deleteBtn{
    border-radius: 50%;
    position: absolute;
    right: 0;
    top: 0;
    width: calc(1.5rem + 4px);
    height: calc(1.5rem + 4px);
    padding: 2px;
    transform: translate(50%,-50%);
    background-color: white;
    border: 1px solid;
    z-index: 2;
    cursor: pointer;
    &:hover{
      background-color: $mainColor4;
      color: white;
    }
  }
  .attachImg{
    width: 275px;
    height: 120px;
    object-fit: cover;
  }
}

#mainImageLabel {
  background-color: #D9D9D9;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 275px;
  height: 119px;
  opacity: 0.5;
  cursor: pointer;
  &:hover{
    opacity: 1;
  }
}
</style>
