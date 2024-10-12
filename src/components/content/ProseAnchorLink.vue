<script setup lang="ts">
import { computed, useSlots } from '#imports'
import type { PropType } from 'vue'

const props = defineProps({
  href: {
    type: String,
    default: '',
  },
  target: {
    type: String as PropType<'_blank' | '_parent' | '_self' | '_top' | (string & object) | null | undefined>,
    default: undefined,
    required: false,
  },
  rel: {
    type: String,
    default: '',
  },
})

const slots = useSlots()

const link = computed(() => {
  if (!slots.default) {
    return ''
  }

  const innerLink = slots.default()[0].children
  if (!innerLink) return ''
  if (typeof innerLink !== 'string') return ''

  return innerLink
})

const isValidHttpUrl = (possibleUrl: string): boolean => {
  try {
    const url = new URL(possibleUrl)
    return url.protocol === 'http:' || url.protocol === 'https:'
  } catch {
    return false
  }
}

const externalSite = computed(() => {
  return isValidHttpUrl(link.value)
})

// console.log(externalSite.value)
</script>

<template>
  <NuxtLink
    :href="props.href"
    :target="props.target"
    :rel="props.rel"
  >
    {{ link }}
  </NuxtLink>
</template>
