<template>
  <nav class="w-full shadow-lg h-16 px-5">
    <div
      v-if="route.fullPath === '/editor'"
      class="w-full flex h-16 items-center justify-between"
    >
      <ToolsNwTool />
      <ToolsNwMenu />
    </div>
    <div
      v-else
      class="w-full h-16"
    >
      <div class="m-auto max-w-7xl h-16 flex items-center justify-between">
        
      </div>
    </div>
  </nav>
</template>
<script setup lang="ts">
import { useRoute } from 'vue-router'
defineOptions({ name:'NwBar' })

const route = useRoute()
</script>