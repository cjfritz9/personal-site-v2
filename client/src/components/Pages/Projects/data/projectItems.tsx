import astraThumbnail from '../../../../assets/astra-thumbnail.webp';
import launchTrackerThumbnail from '../../../../assets/launch-tracker-thumb.webp';
import socialSiteThumbnail from '../../../../assets/social-site-thumb.webp';
import catGptThumbnail from '../../../../assets/cat-gpt-thumb.webp';

export const projectItems = [
  {
    title: 'astra-skincare',
    description: 'Astra Skincare is a custom mock Shopify concept',
    links: [
      'https://www.astra-skincare.com',
      'https://github.com/cjfritz9/astra-skincare'
    ],
    thumbnail: astraThumbnail,
    technologies: ['react', 'graphql']
  },
  {
    title: 'launch-tracker',
    description: 'NASA + SpaceX launch tracker and simulator',
    links: [
      'https://nasa-project-4yjnpj6ixq-uc.a.run.app',
      'https://github.com/cjfritz9/nasa-project'
    ],
    thumbnail: launchTrackerThumbnail,
    technologies: ['react', 'express', 'mongodb']
  },
  {
    title: 'social-media-site',
    description: 'Collab Project: SWE themed fullstack social app',
    links: [
      'https://social-stack-demo.netlify.app',
      'https://github.com/Social-Stack/Social-Media-Stack'
    ],
    thumbnail: socialSiteThumbnail,
    technologies: ['react', 'express', 'postgresql', 'firebase']
  },
  {
    title: 'cat-gpt',
    description: 'NASA + SpaceX tracker and simulator',
    links: [
      'https://catgpt.fritzdesign.co/chat',
      'https://github.com/cjfritz9/cat-gpt'
    ],
    thumbnail: catGptThumbnail,
    technologies: ['react', 'express', 'firebase']
  }
];

export type ProjectItem = (typeof projectItems)[0];
