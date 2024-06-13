<template>
  <div class="nw-preview w-full h-full p-5 overflow-auto">
    <div class="preview-wrap" ref="container"></div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import converter from '~/libs/converter'
import '~/assets/css/markdown.css';

defineOptions({ name:'NwPreview' })
const props = defineProps({
  markdownContent:{
    type:String,
    defualt:''
  }
})

const container = ref<HTMLDivElement | null>(null);

function mdToHtml(){
  const content = converter.makeHtml(props.markdownContent || '')
  let contentContainer = `<div class="preview-content">${content}</div>`;
  if(container.value){
    container.value.innerHTML = contentContainer
  }
}

watch(
  ()=>props.markdownContent,
  ()=>{
    mdToHtml()
  },
  { deep: true }
)
onMounted(()=>{
  mdToHtml()
})
</script>

