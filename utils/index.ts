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
function isSessionStorageSupported() {
  try {
    const testKey = '__test__';
    sessionStorage.setItem(testKey, testKey);
    sessionStorage.removeItem(testKey);
    return true;
  } catch (e) {
    return false;
  }
};
export function setStorage<T>(key:string,value:T){
  if (!isSessionStorageSupported()) {
    console.warn('SessionStorage is not supported by this browser.');
    return;
  }
  try {
    const serializedValue = JSON.stringify(value);
    sessionStorage.setItem(key, serializedValue);
  } catch (e) {
    console.error(`Failed to store item with key "${key}":`, e);
  }
}

export function getStorage(key:string){
  if (!isSessionStorageSupported()) {
    console.warn('SessionStorage is not supported by this browser.');
    return null;
  }

  try {
    const serializedValue = sessionStorage.getItem(key);
    return serializedValue ? JSON.parse(serializedValue) : null;
  } catch (e) {
    console.error(`Failed to retrieve item with key "${key}":`, e);
    return null;
  }
}