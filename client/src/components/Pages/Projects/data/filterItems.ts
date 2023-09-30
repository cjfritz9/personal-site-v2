import { IoLogoFirebase } from 'react-icons/io5';
import { IoLogoNodejs } from 'react-icons/io';
import { RiReactjsFill } from 'react-icons/ri';
import { TbCircleLetterE } from 'react-icons/tb';
import { SiGraphql, SiSvelte, SiMongodb, SiPostgresql } from 'react-icons/si';

export const filterItems = [
  {
    name: 'React',
    icon: RiReactjsFill
  },
  {
    name: 'Svelte',
    icon: SiSvelte
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
  }
];

export type FilterItem = (typeof filterItems)[0];
