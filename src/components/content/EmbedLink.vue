<script setup lang="ts">
import { ref, useAsyncData } from '#imports'
import { load } from 'cheerio'

const props = defineProps<{
  to: string
}>()

const title = ref('')
const description = ref('')

await useAsyncData(`embed-${props.to}`, async () => {
  const hello = await $fetch<string>('/api/hello')
  console.log({ hello })

  const data = await $fetch<string>(props.to)

  const loaded = load(data)
  const metaTags = loaded('meta')
  console.log({ metaTags })
})
</script>

<template>
  <NuxtLink
    :aria-label="title"
    class="focus:outline-none"
  >
    <div class="relative group isolate rounded-xl background-gradient ring-1 ring-gray-200 dark:ring-gray-800 before:hidden before:lg:block before:absolute before:-inset-[2px] before:h-[calc(100%+4px)] before:w-[calc(100%+4px)] before:z-[-1] before:rounded-[13px] flex-1 flex flex-col shadow transition-shadow duration-200">
      <UCard>
        <div>
          <p
            v-if="title"
            class="text-gray-900 dark:text-white text-base font-bold truncate"
          >
            {{ title }}
          </p>

          <div
            v-if="description"
            class="text-[15px] text-gray-500 dark:text-gray-400 mt-1"
          >
            {{ description }}
          </div>

          <img
            src="https://picsum.photos/640/360?grayscale"
            class="w-full rounded-md"
          >
        </div>
      </UCard>
    </div>
  </NuxtLink>

  <div class="flex items-center space-x-4">
    <USkeleton
      class="h-12 w-12"
      :ui="{ rounded: 'rounded-full' }"
    />
    <div class="space-y-2">
      <USkeleton class="h-4 w-[250px]" />
      <USkeleton class="h-4 w-[200px]" />
    </div>
  </div>
</template>
