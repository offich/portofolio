<script setup lang="ts">
defineProps<{ images: { src: string, alt: string }[] }>()

const ui = {
  indicators: {
    wrapper: 'absolute flex items-center justify-center gap-3 bottom-2 inset-x-0',
    base: 'rounded-full h-1.5 w-1.5',
    active: 'bg-primary-500 dark:bg-primary-400',
    inactive: 'bg-gray-100 dark:bg-gray-800',
  },
}
</script>

<template>
  <UCarousel
    v-slot="{ item }"
    :items="images"
    indicators
    :ui="ui"
    class="rounded-xl overflow-hidden not-prose"
  >
    <NuxtImg
      :src="item.src"
      :alt="item.alt"
      width="360"
      height="300"
      draggable="false"
      class="object-cover"
    />
  </UCarousel>
</template>
