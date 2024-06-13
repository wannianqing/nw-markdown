<template>
  <div class="toolbar">
    <nw-button
      v-for="item in actions"
      :key="item.id"
      type="primary"
      class="mr-1"
      icon
    >
      <nw-icon :name="item.icon"></nw-icon>
    </nw-button>
  </div>
</template>
<script setup lang="ts">
const actions = [
  { id:'undo', icon:'undoIcon', name:'撤销(Ctrl + Z)' },
  { id:'redo', icon:'redoIcon', name:'重做(Ctrl + Y)' },
  { id:'bold', icon:'boldIcon', name:'粗体(Ctrl + B)' },
  { id:'italic', icon:'italicIcon', name:'斜体(Ctrl + I)' },
  { id:'unorder', icon:'unorderList', name:'无序列表' },
  { id:'order', icon:'orderList', name:'有序列表' },
  { id:'quote', icon:'blockQuote', name:'引用' },
  { id:'link', icon:'linkIcon', name:'链接' },
  { id:'table', icon:'tableIcon', name:'表格' },
]
</script>