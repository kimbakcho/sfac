<template>
  <div id="root">
    <label :for="inputId">
      {{title}}
    </label>
    <input :id="inputId" :type="type" v-model="modelValue" @input="emits('update:modelValue', $event.target.value)">
  </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";
import { v4 as uuidv4 } from 'uuid';

const props = defineProps<{
  title: string,
  modelValue: string,
  type: string
}>()

const inputId = ref("")
onMounted(()=>{

  inputId.value = uuidv4()
})
const emits = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()
</script>

<style scoped lang="scss">
#root{
  width: 100%;
  label {
    @include koFont(19)
  }
  input {
    border: 1px solid $mainColor4;
    border-radius: 10px;
    height: 64px;
    width: 100%;
    @include koFont(19);
    padding: 0px 16px;
  }
}
</style>
