<script setup lang="ts">
import { shallowRef } from 'vue'
import boldIcon from 'vue-material-design-icons/FormatBold.vue'
import redoIcon from 'vue-material-design-icons/RedoVariant.vue'
import undoIcon from 'vue-material-design-icons/UndoVariant.vue'
import italicIcon from 'vue-material-design-icons/FormatItalic.vue'
import orderList from 'vue-material-design-icons/OrderNumericDescending.vue'
import unorderList from 'vue-material-design-icons/FormatListBulletedSquare.vue'
import blockQuote from 'vue-material-design-icons/FormatQuoteClose.vue'
import linkIcon from 'vue-material-design-icons/Link.vue'
import tableIcon from 'vue-material-design-icons/Table.vue'
import type { Component } from 'vue'

const props = defineProps({
  name:{  // 组件名，决定渲染哪个icon
    type:String
  },
  size:{  // 设置图标的大小
    type:Number,
    default:18
  },
  fillColor:{ // 设置图标的填充色
    type:String,
    default:'#000000'
  }
});

interface IComponents {
  boldIcon:string;
  redoIcon:string;
  undoIcon:string;
  italicIcon:string;
  orderList:string;
  unorderList:string;
  blockQuote:string;
  linkIcon:string;
  tableIcon:string
}
const components = {
  boldIcon,
  redoIcon,
  undoIcon,
  italicIcon,
  orderList,
  unorderList,
  blockQuote,
  linkIcon,
  tableIcon
}
const tag = shallowRef(components[props.name as keyof IComponents])
</script>
<template>
  <component
    :is="tag"
    class="relative bg-inherit transition-colors"
  >
  </component>
</template>