import { defineCollection, z } from 'astro:content';

const homepage = defineCollection({
  type: 'data',
  schema: z.object({
    hero_line1: z.string().optional(),
    hero_line2: z.string().optional(),
    hero_subtext: z.string().optional(),
    stat1_label: z.string().optional(),
    stat1_value: z.string().optional(),
    stat2_label: z.string().optional(),
    stat2_value: z.string().optional(),
    stat3_label: z.string().optional(),
    stat3_value: z.string().optional(),
  }),
});

const updates = defineCollection({
  type: 'content',
  schema: z.object({
    date_label: z.string().optional(),
    date: z.string(),
    type: z.string().optional(),
    headline: z.string(),
    body: z.string().optional(),
    published: z.boolean().default(true),
  }),
});

const portfolio = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    cover: z.string().optional(),
  }),
});

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    description: z.string().optional(),
    cover: z.string().optional(),
  }),
});

export const collections = { homepage, updates, portfolio, blog };