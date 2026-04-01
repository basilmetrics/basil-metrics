import { defineCollection, z } from 'astro:content';

const homepage = defineCollection({
  type: 'content',
  schema: z.object({
    hero_line1: z.string(),
    hero_line2: z.string(),
    hero_subtext: z.string(),
    stat1_label: z.string(),
    stat1_value: z.string(),
    stat2_label: z.string(),
    stat2_value: z.string(),
    stat3_label: z.string(),
    stat3_value: z.string(),
  }),
});

const updates = defineCollection({
  type: 'content',
  schema: z.object({
    date_label: z.string(),
    date: z.date(),
    type: z.string(),
    headline: z.string(),
    body: z.string(),
    published: z.boolean().default(true),
  }),
});

export const collections = { homepage, updates };
