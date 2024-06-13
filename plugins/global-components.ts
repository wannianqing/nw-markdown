/**
 * author: 青牛前端
 * time: 2024-6-12
 * feature: 自动匹配自定义的组件ui，全局注册
 */
import { defineNuxtPlugin } from '#app';
export default defineNuxtPlugin((nuxtApp) => {
  // 匹配到指定目录下的所有的vue文件
  const components = (import.meta as ImportMeta).glob('../components/ui/*.vue',{eager:true});
  for (const path in components) {
    const component = components[path].default;
    const name = component.name || `nw-${path.replace(/^.*\/|\.vue$/gi, '').toLowerCase()}`;

    nuxtApp.vueApp.component(name, component);
  }
});
