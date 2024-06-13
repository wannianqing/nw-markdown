/**
 * author: 青牛前端
 * time: 2024-6-13
 * feature: 暴露markdown文本转html的方法
 */
import hljs from 'highlight.js/lib/core';
import xml from 'highlight.js/lib/languages/xml';
import css from 'highlight.js/lib/languages/css';
import bash from 'highlight.js/lib/languages/bash';
import yaml from 'highlight.js/lib/languages/yaml';
import javascript from 'highlight.js/lib/languages/javascript';
import typescript from 'highlight.js/lib/languages/typescript';
import showdown from 'showdown';
import { decodeHTML } from '~/utils';

hljs.registerLanguage('xml', xml);
hljs.registerLanguage('css', css);
hljs.registerLanguage('bash', bash);
hljs.registerLanguage('yaml', yaml);
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('typescript', typescript);
import { defineNuxtPlugin } from '#app';

export default defineNuxtPlugin((nuxtApp) => {
  function filter(text:string) {
    const left = '<pre><code\\b[^>]*>',
      right = '</code></pre>',
      flags = 'g',
      replacement = function (wholeMatch, match, left, right) {
        const lang = (left.match(/class=\"([^ \"]+)/) || [])[1];
        match = decodeHTML(match);
        return left + hljs.highlightAuto(match).value + right;
      };
    return showdown.helper.replaceRecursiveRegExp(text, replacement, left, right, flags);
  }
  const extension = [{
    type: 'output',
    filter,
  }]
  // 将markdown文本转换成html文本
  const converter = new showdown.Converter({
    strikethrough: true,
    omitExtraWLInCodeBlocks: true,
    tables: true,
    tasklists: true,
    smoothLivePreview: true,
    ghCodeBlocks: true,
    extensions: extension,
  });
  // 这里指定的是使用github风格
  converter.setFlavor('github');

  nuxtApp.provide('converter',converter)
});
