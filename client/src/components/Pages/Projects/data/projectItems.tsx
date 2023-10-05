import astraThumbnail from '../../../../assets/astra-thumbnail.webp';
import launchTrackerThumbnail from '../../../../assets/launch-tracker-thumb.webp';
import socialSiteThumbnail from '../../../../assets/social-site-thumb.webp';
import catGptThumbnail from '../../../../assets/cat-gpt-thumb.webp';
import pokestopThumbnail from '../../../../assets/pokestop-thumb.webp';
import eldenCreatorThumbnail from '../../../../assets/elden-creator-thumb.webp';
import chatbotThumbnail from '../../../../assets/chatbot-thumb.webp';
import fiftyFiftyThumbnail from '../../../../assets/5050-thumb.webp';
import tpsThumbnail from '../../../../assets/tps-thumb.webp';
import indieReviewsThumbnail from '../../../../assets/indie-reviews-thumb.webp'
import { ProjectItems, Technologies } from '../../../../@types/projects';

export const projectItems: ProjectItems = [
  {
    title: 'astra-skincare',
    description: 'Astra Skincare is a custom Shopify product concept',
    links: [
      'https://www.astra-skincare.com',
      'https://github.com/cjfritz9/astra-skincare'
    ],
    thumbnail: astraThumbnail,
    technologies: ['typescript', 'react', 'chakraui', 'graphql']
  },
  {
    title: 'launch-tracker',
    description: 'NASA + SpaceX launch tracker and simulator',
    links: [
      'https://nasa-project-4yjnpj6ixq-uc.a.run.app',
      'https://github.com/cjfritz9/nasa-project'
    ],
    thumbnail: launchTrackerThumbnail,
    technologies: ['react', 'node', 'docker', 'express', 'mongodb', 'gcp']
  },
  {
    title: 'social-media-site',
    description: 'Collab Project: SWE themed fullstack social app',
    links: [
      'https://social-stack-demo.netlify.app',
      'https://github.com/Social-Stack/Social-Media-Stack'
    ],
    thumbnail: socialSiteThumbnail,
    technologies: ['react', 'node', 'express', 'postgresql', 'firebase']
  },
  {
    title: 'cat-gpt',
    description: 'NASA + SpaceX tracker and simulator',
    links: [
      'https://catgpt.fritzdesign.co/',
      'https://github.com/cjfritz9/cat-gpt'
    ],
    thumbnail: catGptThumbnail,
    technologies: [
      'typescript',
      'react',
      'chakraui',
      'node',
      'docker',
      'express',
      'firebase',
      'gcp'
    ]
  },
  {
    title: 'indie-game-reviews',
    description: 'Indie Game Reviews demo',
    links: [
      'https://indie-reviews.vercel.app',
      'https://github.com/cjfritz9/indie-reviews'
    ],
    thumbnail: indieReviewsThumbnail,
    technologies: [
      'typescript',
      'next',
      'tailwind',
      'graphql',
      'postgresql',
      'aws'
    ]
  },
  {
    title: 'pokestop',
    description: 'Collab Project: Fullstack Pokemon card ecommerce site',
    links: [
      'https://pokestop-demo.netlify.app',
      'https://github.com/Graceshopper-Team-No-Grace/Trading-Card-Shopper'
    ],
    thumbnail: pokestopThumbnail,
    technologies: ['react', 'node', 'express', 'postgresql', 'gcp']
  },
  {
    title: 'elden-creator',
    description: 'Elden Ring character randomizer web app assisted by chat-gpt',
    links: [
      'https://eldencreator.com',
      'https://github.com/cjfritz9/elden-ring-randomizer'
    ],
    thumbnail: eldenCreatorThumbnail,
    technologies: ['typescript', 'react', 'chakraui', 'node', 'express', 'gcp']
  },
  {
    title: '50-50 [WIP]',
    description: 'My take on 50 projects in 50 days by Brad Traversy',
    links: [
      'https://50-50.netlify.app',
      'https://github.com/cjfritz9/50-projects-50-days'
    ],
    thumbnail: fiftyFiftyThumbnail,
    technologies: ['typescript', 'react', 'tailwind']
  },
  {
    title: 'chatbot-api',
    description: 'Chatbot API used for chatbot games, etc. on twitch.tv',
    links: [null, 'https://github.com/cjfritz9/chatbot-fetch-api'],
    thumbnail: chatbotThumbnail,
    technologies: ['typescript', 'node', 'docker', 'express', 'firebase', 'gcp']
  },
  {
    title: 'simple-shooter-game',
    description: 'TPS game with AI enemies created with UE5',
    links: [null, 'https://github.com/cjfritz9/SimpleShooterGame'],
    thumbnail: tpsThumbnail,
    technologies: ['c++']
  }
];
