<template>
  <div class="nw-editor w-full h-full bg-gray-900 overflow-auto">
    <div class="editor-wrap" ref="container"></div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useNuxtApp } from '#app'
defineOptions({ name:'NwEditor' })
const nuxtApp = useNuxtApp()
const container = ref<HTMLDivElement | null>(null);
const createIns = ()=> {
  const wrapper:HTMLElement = document.createElement('div');
  wrapper.className = 'wrapper h-full w-full';
  if(container.value){
    container.value.appendChild(wrapper);
  }
  const editor = nuxtApp.$createEditor(wrapper)
  editor.on('change', () => {
    console.log(editor.getValue(),'======')
  });
}
onMounted(createIns)
</script>
<style>
.editor-wrap .CodeMirror {
  font-family: 'Fira Code', monospace;
  height: 100%;
}
.editor-wrap .CodeMirror,
.editor-wrap .CodeMirror .CodeMirror-gutters {
  background-color: transparent;
}
.editor-wrap .CodeMirror pre {
  word-break: break-word;
}
</style>
