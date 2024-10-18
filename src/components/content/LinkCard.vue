<script setup lang="ts">
import { computed, ref, useAsyncData, useFetch, useRuntimeConfig } from '#imports'

export type SiteMetadata = {
  url: string
  title: string | null
  imageUrl: string | null
}

const props = defineProps<{
  url: string
}>()

const config = useRuntimeConfig()
const apiDomain = computed(() => {
  if (import.meta.dev) {
    return import.meta.server ? config.apiDomain : config.public.apiDomain
  }

  return config.apiDomain
})

const urlOrigin = computed<string>(() => {
  return new URL(props.url).origin
})

const { data } = await useAsyncData<{ metadata: SiteMetadata | null }>(`embed-${props.url}`, async () => {
  const { data } = await useFetch<{ metadata: SiteMetadata | null }>(`${apiDomain.value}/api/metadata`, { query: { url: props.url } })
  return { metadata: data.value ? data.value.metadata : null }
})

const imageLoaded = ref(true)
const onImageLoadError = (): void => {
  imageLoaded.value = false
}
</script>

<template>
  <a
    v-if="data"
    :href="url"
    class="my-2 w-full rounded-xl h-15 not-prose rounded-xl ring-1 ring-gray-200 dark:ring-gray-800 gap-1 flex shadow transition-shadow duration-200"
  >
    <div class="p-2 flex-1 overflow-hidden flex flex-col justify-center">
      <p class="text-gray-900 dark:text-white text-16 font-bold line-clamp-2">
        {{ data.metadata?.title || url }}
      </p>

      <div class="flex items-center">
        <img
          v-if="imageLoaded"
          :src="`https://www.google.com/s2/favicons?domain=${encodeURIComponent(url)}&size=64`"
          :alt="data.metadata?.title || ''"
          height="16"
          width="16"
          class="mr-1 ml-0.5 w-2 h-2"
          loading="lazy"
          @error="onImageLoadError"
        >
        <p class="text-15">{{ urlOrigin }}</p>
      </div>

    </div>

    <div
      v-if="data.metadata && data.metadata.imageUrl"
      class="h-15 w-15"
    >
      <img
        :src="data.metadata.imageUrl"
        :alt="data.metadata.title || url"
        class="h-full w-full rounded-xl"
      >
    </div>
  </a>
</template>
