/**
 * author: 青牛前端
 * time: 2024-6-13
 * feature: 依赖codemirror库创建编辑区
 */
import CodeMirror from 'codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/ayu-mirage.css';
import 'codemirror/addon/edit/continuelist';
import 'codemirror/mode/gfm/gfm';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/css/css';
import 'codemirror/mode/yaml/yaml';
import 'codemirror/mode/vue/vue';
import 'codemirror/keymap/sublime';
import { defineNuxtPlugin } from '#app';
import { shortcutHandler } from '~/utils'

export default defineNuxtPlugin((nuxtApp) => {
  const createEditor:any = (element:HTMLElement,options= {} )=> {
    if (!element) return console.error('必须传入一个element标签元素');
    const codemirror = CodeMirror(element, {
      value: '',
      tabSize: 2,
      keyMap: 'sublime',
      mode: 'text/x-gfm',
      theme: 'ayu-mirage',
      lineNumbers: true,
      lineWrapping: true,
      extraKeys: {
        'Ctrl-B': (editor) => shortcutHandler('bold', editor),
        'Ctrl-I': (editor) => shortcutHandler('italic', editor),
        'Ctrl-D': (editor) => shortcutHandler('strikethrough', editor),
      },
      ...options,
    });
    return codemirror
  }
  nuxtApp.provide('createEditor',createEditor)
});
