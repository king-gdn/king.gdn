import { defineCollection, defineContentConfig, z } from '@nuxt/content'

const entry = z.object({
  author: z.string().optional(),
  publishedAt: z.string(),
  posterImage: z.string().optional(),
  tags: z.array(z.string()).optional(),
})

export default defineContentConfig({
  collections: {
    home: defineCollection({
      type: 'page',
      source: 'home.md',
    }),
    projects: defineCollection({
      type: 'page',
      source: 'projects/*.md',
      schema: entry,
    }),
    updates: defineCollection({
      type: 'page',
      source: 'updates/*.md',
      schema: entry,
    }),
  },
})
