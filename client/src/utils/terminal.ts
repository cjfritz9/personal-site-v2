import { AutoCompletionResult, CDResult, SearchResult } from '../@types/props';

export const terminalSuggestions: AutoCompletionResult[] = [
  {
    type: 'home',
    description: 'go home'
  },
  {
    type: 'sudo',
    description: 'sign in as superuser'
  },
  {
    type: 'cd',
    description: 'navigate by changing directories'
  },
  {
    type: 'search',
    description: 'quickly find content'
  }
];

export const terminalSearchResults: SearchResult[] = [
  {
    directory: 'about',
    name: 'Personal Info',
    handle: '/about?=personal'
  },
  {
    directory: 'projects',
    name: 'Astra Skincare',
    handle: '/projects/astra-skincare'
  },
  {
    directory: 'projects',
    name: 'Space Launch Simulator',
    handle: '/projects/nasa'
  }
];

export const getCdList = (currentDirectory: string): CDResult[] => {
  switch (currentDirectory) {
    case '/about':
      return [
        { dirname: 'PARENT', handle: '/' },
        { dirname: 'personal', handle: '/about?=personal' },
        { dirname: 'professional', handle: '/about?=career' },
        { dirname: 'hobbies', handle: '/about?=hobbies' }
      ];
    case '/about?=personal':
      return [
        { dirname: 'PARENT', handle: '/about' },
        { dirname: 'bio', handle: '/about?=personal&bio' },
        { dirname: 'interests', handle: '/about?=personal&interests' },
        { dirname: 'education', handle: '/about?=personal&education' }
      ];
    case '/about?=personal&bio':
      return [
        { dirname: 'PARENT', handle: '/about?=personal' },
        {
          dirname: 'early-life.txt',
          handle: '/about?=personal&bio&early-life.txt'
        },
        {
          dirname: 'adult-life.txt',
          handle: '/about?=personal&bio&adult-life.txt'
        }
      ];
    case '/about?=personal&bio&early-life.txt':
      return [{ dirname: 'PARENT', handle: '/about?=personal&bio' }];
    case '/about?=career':
      return [
        { dirname: 'PARENT', handle: '/about' },
        { dirname: 'freelance', handle: '/about?=career&freelance' },
        { dirname: 'contributions', handle: '/about?=career&contributions' }
      ];
    case '/about?=career&freelance':
      return [
        { dirname: 'PARENT', handle: '/about?=career' },
        {
          dirname: 'statistics.txt',
          handle: '/about?=career&freelance&statistics.txt'
        },
        {
          dirname: 'software.txt',
          handle: '/about?=career&freelance&contributions.txt'
        }
      ];
    case '/about?=career&freelance':
      return [
        { dirname: 'PARENT', handle: '/about?=career' },
        {
          dirname: 'statistics.txt',
          handle: '/about?=career&freelance&statistics.txt'
        },
        {
          dirname: 'software.txt',
          handle: '/about?=career&freelance&software.txt'
        }
      ];
    case '/about?=career&freelance&statistics.txt':
      return [{ dirname: 'PARENT', handle: '/about?=career&freelance' }];
    case '/about?=career&freelance&software.txt':
      return [{ dirname: 'PARENT', handle: '/about?=career&freelance' }];
    case '/about?=career&contributions':
      return [
        { dirname: 'PARENT', handle: '/about?=career' },
        {
          dirname: 'github.txt',
          handle: '/about?=career&contributions&github.txt'
        },
        {
          dirname: 'chakra-ui.txt',
          handle: '/about?=career&contributions&chakra-ui.txt'
        }
      ];
    case '/about?=career&contributions&github.txt':
      return [{ dirname: 'PARENT', handle: '/about?=career&contributions' }];
    case '/about?=career&contributions&chakra-ui.txt':
      return [{ dirname: 'PARENT', handle: '/about?=career&contributions' }];
    case '/about?=hobbies':
      return [
        { dirname: 'PARENT', handle: '/about' },
        { dirname: 'gaming', handle: '/about?=hobbies&gaming' },
        { dirname: 'modding', handle: '/about?=hobbies&modding' },
        { dirname: 'camping', handle: '/about?=hobbies&camping' }
      ];
    case '/about?=hobbies&gaming':
      return [
        { dirname: 'PARENT', handle: '/about?=hobbies' },
        {
          dirname: 'pc-games.txt',
          handle: '/about?=hobbies&gaming&pc-games.txt'
        },
        {
          dirname: 'board-games.txt',
          handle: '/about?=hobbies&gaming&board-games.txt'
        }
      ];
    case '/about?=hobbies&gaming&pc-games.txt':
      return [{ dirname: 'PARENT', handle: '/about?=hobbies&gaming' }];
    case '/about?=hobbies&gaming&board-games.txt':
      return [{ dirname: 'PARENT', handle: '/about?=hobbies&gaming' }];
    case '/about?=hobbies&modding':
      return [
        { dirname: 'PARENT', handle: '/about?=hobbies' },
        {
          dirname: 'community.txt',
          handle: '/about?=hobbies&modding&community.txt'
        },
        {
          dirname: 'plugins.txt',
          handle: '/about?=hobbies&modding&plugins.txt'
        }
      ];
    case '/about?=hobbies&modding&community.txt':
      return [{ dirname: 'PARENT', handle: '/about?=hobbies&modding' }];
    case '/about?=hobbies&modding&plugins.txt':
      return [{ dirname: 'PARENT', handle: '/about?=hobbies&modding' }];
    case '/about?=hobbies&camping':
      return [
        { dirname: 'PARENT', handle: '/about?=hobbies' },
        {
          dirname: 'travel.txt',
          handle: '/about?=hobbies&camping&travel.txt'
        },
        {
          dirname: 'campsites.txt',
          handle: '/about?=hobbies&camping&campsites.txt'
        }
      ];
    case '/about?=hobbies&camping&travel.txt':
      return [{ dirname: 'PARENT', handle: '/about?=hobbies&camping' }];
    case '/about?=hobbies&camping&campsites.txt':
      return [{ dirname: 'PARENT', handle: '/about?=hobbies&camping' }];
    case '/projects':
      return [
        { dirname: 'PARENT', handle: '/' },
        { dirname: 'astra-skincare', handle: 'astra-skincare' },
        { dirname: 'space-launch-sim', handle: '/space-launch-sim' }
      ];
    case '/contact':
      return [
        { dirname: 'PARENT', handle: '/' },
        { dirname: 'contact-form', handle: '/contact' }
      ];
    default:
      return [
        { dirname: 'PARENT', handle: '/' },
        { dirname: 'about', handle: '/about' },
        { dirname: 'projects', handle: '/projects' },
        { dirname: 'misc', handle: '/misc' }
      ];
  }
};
