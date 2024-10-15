import { defineEventHandler } from '#imports'

export default defineEventHandler(() => {
  return {
    time: new Date().toISOString(),
  }
})
