import type { ParsedContent } from '@nuxt/content'

export interface CustomParsedContent extends ParsedContent {
  title?: string
  description?: string
  publishedAt?: string
  updatedAt?: string
  categories?: string[]
  draft?: boolean
}
