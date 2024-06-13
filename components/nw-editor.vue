<template>
  <div class="nw-editor w-full h-full bg-gray-900 overflow-auto">
    <div class="editor-wrap" ref="container"></div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref, computed } from 'vue';
import { useStore } from 'vuex'
import { useNuxtApp } from '#app'
import { MutationTypes } from '~/store/constants'
defineOptions({ name:'NwEditor' })
const props = defineProps({
  markdownContent:{
    type:String,
    defualt:''
  }
})
const uStore = useStore()
const nuxtApp = useNuxtApp()
const container = ref<HTMLDivElement | null>(null);
const createIns = ()=> {
  const wrapper:HTMLElement = document.createElement('div');
  wrapper.className = 'wrapper h-full w-full';
  if(container.value){
    container.value.appendChild(wrapper);
  }
  const editor = nuxtApp.$createEditor(wrapper,{
    value:props.markdownContent
  })
  editor.on('change', () => {
    uStore.commit(MutationTypes.SET_CONTENT,editor.getValue())
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
