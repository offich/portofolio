<template>
  <span class="inline-block overflow-hidden rounded-md">
    <NuxtImg
      :src="refinedSrc"
      :alt="alt"
      :width="width"
      :height="height"
      class="not-prose rounded-md transition-all duration-300 hover:scale-110"
    />
  </span>
</template>

<script setup lang="ts">
import { useRuntimeConfig, computed } from '#imports'
import { withTrailingSlash, withLeadingSlash, joinURL } from 'ufo'

const props = defineProps({
  src: {
    type: String,
    default: '',
  },
  alt: {
    type: String,
    default: '',
  },
  width: {
    type: [String, Number],
    default: undefined,
  },
  height: {
    type: [String, Number],
    default: undefined,
  },
})

const refinedSrc = computed(() => {
  if (props.src?.startsWith('/') && !props.src.startsWith('//')) {
    const _base = withLeadingSlash(withTrailingSlash(useRuntimeConfig().app.baseURL))
    if (_base !== '/' && !props.src.startsWith(_base)) {
      return joinURL(_base, props.src)
    }
  }
  return props.src
})
</script>
