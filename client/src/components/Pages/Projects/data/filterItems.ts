import { IoLogoFirebase } from 'react-icons/io5';
import { IoLogoNodejs } from 'react-icons/io';
import { RiReactjsFill } from 'react-icons/ri';
import { TbCircleLetterE } from 'react-icons/tb';
import {
  SiGraphql,
  SiSvelte,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiChakraui,
  SiTailwindcss,
  SiTypescript,
  SiCplusplus,
  SiNextdotjs,
  SiAmazonaws,
  SiGooglecloud
} from 'react-icons/si';

export const filterItems = [
  {
    name: 'TypeScript',
    icon: SiTypescript
  },
  {
    name: 'C++',
    icon: SiCplusplus
  },
  {
    name: 'React',
    icon: RiReactjsFill
  },
  {
    name: 'Next',
    icon: SiNextdotjs
  },
  {
    name: 'ChakraUI',
    icon: SiChakraui
  },
  {
    name: 'Tailwind',
    icon: SiTailwindcss
  },
  {
    name: 'Svelte',
    icon: SiSvelte
  },
  {
    name: 'Docker',
    icon: SiDocker
  },
  {
    name: 'Node',
    icon: IoLogoNodejs
  },
  {
    name: 'Express',
    icon: TbCircleLetterE
  },
  {
    name: 'GraphQL',
    icon: SiGraphql
  },
  {
    name: 'PostgreSQL',
    icon: SiPostgresql
  },
  {
    name: 'Firebase',
    icon: IoLogoFirebase
  },
  {
    name: 'MongoDB',
    icon: SiMongodb
  },
  {
    name: 'AWS',
    icon: SiAmazonaws
  },
  {
    name: 'GCP',
    icon: SiGooglecloud
  },
];

export type FilterItem = (typeof filterItems)[0];
