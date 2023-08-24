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
    directory: 'misc',
    name: 'Codle',
    handle: '/misc/codle'
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
        { dirname: 'personal-info', handle: '/about?=personal-info' },
        { dirname: 'professional-info', handle: '/about?=professional-info' },
        { dirname: 'hobbies', handle: '/about?=hobbies' },
        { dirname: 'contacts', handle: '/about?=contacts' }
      ];
    case '/projects':
      return [
        { dirname: 'astra-skincare', handle: 'astra-skincare' },
        { dirname: 'space-launch-sim', handle: '/space-launch-sim' }
      ];
    case '/misc':
      return [
        { dirname: 'codle', handle: '/codle' },
        { dirname: 'space-launch-sim', handle: '/space-launch-sim' }
      ];
    default:
      return [
        { dirname: 'about', handle: '/about' },
        { dirname: 'projects', handle: '/projects' },
        { dirname: 'misc', handle: '/misc' }
      ];
  }
};
