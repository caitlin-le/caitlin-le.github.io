import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const papers = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/papers' }),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    venue: z.string(),
    year: z.number(),
    url: z.string().url(),
    thumbnail: z.string().optional(),
    video: z.string().optional(),
    authors: z.string(),
    abstract: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const recipes = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/recipes' }),
  schema: z.object({
    id: z.string(),
    emoji: z.string(),
    name: z.string(),
    desc: z.string(),
    time: z.string(),
    serves: z.string(),
    tags: z.array(z.string()).optional(),
    image: z.string().optional(),
    note: z.string().optional(),
    ingredients: z.array(z.string()).optional(),
    steps: z.array(z.string()).optional(),
    sections: z.array(z.object({
      title: z.string(),
      ingredients: z.array(z.string()).optional(),
      steps: z.array(z.string()),
    })).optional(),
  }),
});

export const collections = { papers, recipes };
