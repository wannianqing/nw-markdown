// types/nuxt.d.ts
import { NuxtApp } from 'nuxt/app';

declare module 'nuxt/app' {
  interface NuxtApp {
    $createEditor: (param1,param2) => void;
  }
}
