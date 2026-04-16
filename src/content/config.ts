import { defineCollection, z } from 'astro:content';

const profileCollection = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    title: z.string(),
    email: z.string().email(),
    phone: z.string().optional(),
    location: z.string().optional(),
    avatar: z.string().optional(),
    bio: z.string(),
    github: z.string().optional(),
    linkedin: z.string().optional(),
    website: z.string().optional(),
  }),
});

const experienceCollection = defineCollection({
  type: 'data',
  schema: z.object({
    company: z.string(),
    position: z.string(),
    startDate: z.string(),
    endDate: z.string().optional(),
    current: z.boolean().default(false),
    description: z.string(),
    highlights: z.array(z.string()).default([]),
  }),
});

const projectCollection = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string().optional(),
    link: z.string().optional(),
    github: z.string().optional(),
    tags: z.array(z.string()).default([]),
    highlights: z.array(z.string()).default([]),
  }),
});

const skillCollection = defineCollection({
  type: 'data',
  schema: z.object({
    category: z.string(),
    items: z.array(z.object({
      name: z.string(),
      level: z.number().min(1).max(5).default(3),
    })),
  }),
});

const aboutCollection = defineCollection({
  type: 'data',
  schema: z.object({
    personality: z.array(z.string()).default([]),
    hobbies: z.array(z.string()).default([]),
    dailyLife: z.string(),
    values: z.array(z.string()).default([]),
  }),
});

export const collections = {
  profile: profileCollection,
  experience: experienceCollection,
  project: projectCollection,
  skill: skillCollection,
  about: aboutCollection,
};
