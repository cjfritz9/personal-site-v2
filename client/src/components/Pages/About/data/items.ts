import {
  RiBracesFill,
  RiCaravanFill,
  RiCodeBoxFill,
  RiExternalLinkFill,
  RiFileChartFill,
  RiGameFill,
  RiGraduationCapFill,
  RiHandCoinFill,
  RiHandHeartFill,
  RiLeafFill,
  RiMailFill,
  RiPhoneFill,
  RiPlugFill,
  RiServerFill,
  RiUser2Fill,
  RiUser5Fill
} from 'react-icons/ri';
import { GiBroadsword, GiCampingTent } from 'react-icons/gi';
import { IconType } from 'react-icons';

const eggshell = '#D1D2D5';

interface ContactItem {
  icon: IconType;
  iconColor: string;
  name: string;
  extLink?: string;
}

export const freelanceItems = [
  {
    icon: RiFileChartFill,
    iconColor: eggshell,
    name: 'statistics'
  },
  {
    icon: RiServerFill,
    iconColor: eggshell,
    name: 'software'
  }
];

export const contributionsItems = [
  {
    icon: RiHandHeartFill,
    iconColor: eggshell,
    name: 'github'
  },
  {
    icon: RiHandCoinFill,
    iconColor: eggshell,
    name: 'chakra-ui'
  }
];

export const bioItems = [
  {
    icon: RiUser5Fill,
    iconColor: eggshell,
    name: 'early-life'
  },
  {
    icon: RiUser2Fill,
    iconColor: eggshell,
    name: 'adult-life'
  }
];

export const interestsItems = [
  {
    icon: RiCodeBoxFill,
    iconColor: eggshell,
    name: 'programming'
  },
  {
    icon: RiLeafFill,
    iconColor: eggshell,
    name: 'environment'
  }
];

export const educationItems = [
  {
    icon: RiGraduationCapFill,
    iconColor: eggshell,
    name: 'high-school'
  },
  {
    icon: RiGraduationCapFill,
    iconColor: eggshell,
    name: 'college'
  }
];

export const gamingItems = [
  {
    icon: RiGameFill,
    iconColor: eggshell,
    name: 'pc-games'
  },
  {
    icon: GiBroadsword,
    iconColor: eggshell,
    name: 'board-games'
  }
];

export const moddingItems = [
  {
    icon: RiBracesFill,
    iconColor: eggshell,
    name: 'community'
  },
  {
    icon: RiPlugFill,
    iconColor: eggshell,
    name: 'plugins'
  }
];

export const campingItems = [
  {
    icon: RiCaravanFill,
    iconColor: eggshell,
    name: 'travel'
  },
  {
    icon: GiCampingTent,
    iconColor: eggshell,
    name: 'campsites'
  }
];

export const contactItems: ContactItem[] = [
  {
    icon: RiMailFill,
    iconColor: eggshell,
    name: 'dev.cjfritz@gmail.com'
  },
  {
    icon: RiPhoneFill,
    iconColor: eggshell,
    name: '(785) 217-7125'
  }
];

export const linksItems: ContactItem[] = [
  {
    icon: RiExternalLinkFill,
    iconColor: eggshell,
    name: 'upwork',
    extLink: 'https://www.upwork.com/freelancers/developercj'
  },
  {
    icon: RiExternalLinkFill,
    iconColor: eggshell,
    name: 'leetcode',
    extLink: 'https://leetcode.com/cjfritz9/'
  }
];
