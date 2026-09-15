import type { APIRoute, GetStaticPaths } from 'astro';
import { OGImageRoute } from 'astro-og-canvas';

const pages = {
  index: {
    title: 'Caitlin Le',
    description: "PhD candidate at Princeton's Faboratory. Soft robotics · Granular media.",
  },
  research: {
    title: 'Research',
    description: 'Burrowing soft robots, granular media, and planetary exploration.',
  },
  icecream: {
    title: 'Ice Cream Kitchen',
    description: '13 original ice cream recipes.',
  },
  about: {
    title: 'About',
    description: 'Caitlin Le — roboticist, mentor, and volunteer.',
  },
};

const ogRoute = await OGImageRoute({
  pages,
  getImageOptions(_path: string, page: { title: string; description: string }) {
    return {
      title: page.title,
      description: page.description,
      bgGradient: [[28, 53, 87], [74, 106, 138]],
      font: {
        title: {
          size: 64,
          weight: 'ExtraBold',
          families: ['sans-serif'],
          color: [255, 255, 255],
        },
        description: {
          size: 30,
          color: [200, 215, 235],
          families: ['sans-serif'],
        },
      },
      padding: 80,
    };
  },
});

export const getStaticPaths: GetStaticPaths = ogRoute.getStaticPaths;
export const GET: APIRoute = ogRoute.GET;
