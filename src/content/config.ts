import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.string(), // ISO format
    image: z.string().optional(),
    author: z.string().default('Dukaan AI Team'),
    tags: z.array(z.string()).default([]),
    lang: z.string(),
  }),
});

export const collections = {
  'blog': blogCollection,
};
