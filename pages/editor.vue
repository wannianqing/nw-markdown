<template>
  <div class="h-full flex">
    <nw-editor v-bind="{markdownContent}"></nw-editor>
    <nw-preview v-bind="{markdownContent}"></nw-preview>
  </div>  
  </template>
  <script setup lang="ts">
  import { computed } from 'vue';
  import { useStore } from 'vuex'
  const uStore = useStore()
  const markdownContent = computed(()=>uStore.getters.getContent)
  </script>