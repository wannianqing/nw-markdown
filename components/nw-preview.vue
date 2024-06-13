
<template>
  <div class="nw-preview w-full h-full p-5 overflow-auto">
    <div class="preview-wrap" ref="container"></div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import converter from '~/libs/converter'
defineOptions({ name:'NwPreview' })
const container = ref<HTMLDivElement | null>(null);
onMounted(() => {
  let contentContainer = `<div class="preview-content">${converter.makeHtml('- Type some markdown in left side')}</div>`;
  if(container.value){
    console.log(contentContainer)
    container.value.innerHTML = contentContainer
  }
})
</script>

