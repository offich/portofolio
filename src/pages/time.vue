<script setup lang="ts">
import { useAsyncData, useFetch, useRuntimeConfig } from '#imports'

export type SiteMetadata = {
  url: string
  site_name?: string
  title?: string
  description?: string
  image?: string
  type?: string
}

const { apiDomain } = useRuntimeConfig()

const { data } = await useAsyncData(async () => {
  const { data } = await useFetch<{ metadata: SiteMetadata }>(`${apiDomain}/fruits`, { query: { url: 'https://www.teamlab.art/jp/e/tokyo' } })
  if (!data.value) return { time: 'notime' }

  return { time: data.value.metadata }
})
</script>

<template>
  <p>{{ data }}</p>
</template>
