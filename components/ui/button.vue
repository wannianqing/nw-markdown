<script setup lang="ts">

const props = defineProps({
  color: {
    type: String as () => string,
    default: '',
  },
  tag: {
    type: String as () => string,
    default: 'button',
  },
  type: {
    type: String as () => string,
    default: 'default',
  },
  icon: {
    type: Boolean as () => boolean,
    default: false,
  },
  circle: {
    type: Boolean as () => boolean,
    default: false,
  }
});
const { color, tag, type, icon, circle } = props;

interface IVariants {
  default?:string;
  primary?:string;
  danger?:string;
}
const variants:IVariants = {
  default: 'bg-gray-100 bg-opacity-5 focus:bg-opacity-10 hover:bg-opacity-10',
  primary: 'bg-primary text-white focus:bg-blue-600 hover:bg-gray-900',
  danger: 'bg-red-500 text-white focus:bg-red-600 hover:bg-red-600',
};
</script>
<template>
  <component
    :is="tag"
    class="relative bg-inherit transition-colors"
    :class="[
      color ? color : variants[type as keyof IVariants],
      icon ? 'p-2' : 'py-2 px-4',
      circle ? 'rounded-full' : 'rounded-xl',
    ]"
  >
    <slot></slot>
  </component>
</template>