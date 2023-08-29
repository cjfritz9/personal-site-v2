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
