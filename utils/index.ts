/**
 * author: 青牛前端
 * time: 2024-6-13
 * feature: 工具函数文件
 */
import { markdownContent, type ImarkdownContent } from './constants'
export function shortcutHandler(name:string, editor:any) {
  const value = markdownContent[name as keyof ImarkdownContent];
  if (!value) return;
  const selectedText = editor.getSelection();
  editor.doc.replaceSelection(value.replace(/\$text/, selectedText || name));
}

export function decodeHTML(text:string) {
  return text.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>');
}