/**
 * author: 青牛前端
 * time: 2024-6-13
 * feature: 自动匹配自定义的组件ui，全局注册
 */
import { defineNuxtPlugin } from '#app';
import { store } from '~/store'
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(store);
});
