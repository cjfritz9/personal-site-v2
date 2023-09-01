interface DisplayData {
  [key: string]: {
    title: string;
    paragraphs: string[];
  };
}

const display: DisplayData = {
  'testing-data': {
    title: 'Testing Data',
    paragraphs: [
      'I have 5 years of experience in web development lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in.',
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat  nulla pariatur. Excepteur sint occaecat  officia deserunt mollit anim id est laborum.',
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat  nulla pariatur. Excepteur sint occaecat  officia deserunt mollit anim id est laborum.',
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat  nulla pariatur. Excepteur sint occaecat  officia deserunt mollit anim id est laborum.',
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat  nulla pariatur. Excepteur sint occaecat  officia deserunt mollit anim id est laborum.',
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat  nulla pariatur. Excepteur sint occaecat  officia deserunt mollit anim id est laborum.'
    ]
  },
  statistics: {
    title: 'Freelance Stats',
    paragraphs: [
      'I have been freelancing part-time since the beginning of 2023. In that time I have worked on a wide variety of projects for clients, from full stack web applications, to cloud software, and APIs.',
      'I have developed: APIs that have served millions of users, software that can upscale and optimize thousands of images per hour, and React front-ends with perfect Lighthouse scores.',
      'I have maintained: A 5-star rating on Upwork.com (where I do some of my freelancing), long-lasting and positive client relations, and repeat customers.'
    ]
  },
  software: {
    title: 'Production Software',
    paragraphs: [
      "USDA Grow Zone: This is an API that I developed to translate the users's IP address to their respective USDA grow zone for a client's nursery site. This API was developed on a Node.js server that used a combination of worker threads and instance scaling to handle large amounts of traffic and request concurrency. This software automatically let users know if the product they were viewing was compatible with their zone. The application had a fallback state that allowed users to find their own USDA grow zone if it encountered any issues (VPNs, application errors, etc.). This software handled tens of thousands of requests per day and never encountered any errors due to major testing before production and the simplicity of the pipeline.",
      "Image UPOP: This is Node.js software that leverages AI image upscaling, image compression (optimized for web), file conversion to .webp, and an optional image resizing method to produce all images in the same size. This software was used to solve a client's issue with product photos and UPOP'd (Upscaled & Optimized) over 1,500 images resulting in many images having a resolution increase, graininess and bluriness removed, and resulting file sizes decreased by an average of 50%. Overall this software improved the quality of all product photos, reduced their file sizes, and produced all images in a universal aspect ratio.",
      "Chatbot Server: This is an API that handles varying types of chatbots via preset configurations and leverages OpenAI's GPT-3.5 model. It has three main configurations: SupportBot, FriendlyBot, and RandoBot. SupportBot acts as a support bot and can be provided company and product information to respond to informational requests instantaneously. FriendlyBot can be themed (for example, like a cat or dog) and responds to general conversation. RandoBot is used to generate random information given a theme."
    ]
  },
  github: {
    title: 'GitHub Contributions',
    paragraphs: [
      '',
      'OpenAI: Resolved a TypeScript bug in the OpenAI Node.js library related to the instantiation method for new client configuration. Added a default parameter of "new Configuration()" to prevent fallback cases that methods did not exist on. This also led to the removal of dozen of conditional checks which overall improved performance. The library authors were working on a v4 version for months and when they released version 4, I received thanks for my "thoughtful and thorough" fix, and the issue was fixed by them in version 4. I also responded to several issues in cases where the issue was not related to library issues or there were known workarounds.',
      'Others: '
    ]
  },
  'chakra-ui': {
    title: 'Chakra UI V3',
    paragraphs: [
      'At the time of writing this, I have not yet heard a response to my request to help with Chakra UI version 3. As an avid user and fan of Chakra UI I am hopeful that I will hear back and be able to start contributing soon!',
      'I have been using Chakra UI for almost a year and have fallen in love with the configuration and simplicity of creating custom components. Since it was developed specifically for React it comes with many base components and states that make it very quick and easy to create attractive front-ends.'
    ]
  },
  'early-life': {
    title: 'Early Life',
    paragraphs: [
      'Full Stack Academy',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    ]
  },
  'adult-life': {
    title: 'Adult Life',
    paragraphs: [
      'Full Stack Academy',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    ]
  },
  programming: {
    title: 'Programming',
    paragraphs: [
      'Full Stack Academy',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    ]
  },
  environment: {
    title: 'Environment',
    paragraphs: [
      'Full Stack Academy',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    ]
  },
  animals: {
    title: 'Animals',
    paragraphs: [
      'Full Stack Academy',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    ]
  },
  'high-school': {
    title: 'High School',
    paragraphs: [
      'Perry-Lecompton High School',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    ]
  },
  college: {
    title: 'Colorado State University',
    paragraphs: [
      'Full Stack Academy',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    ]
  },
  'pc-games': {
    title: 'PC Games',
    paragraphs: [
      'Perry-Lecompton High School',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    ]
  },
  'board-games': {
    title: 'Board Games',
    paragraphs: [
      'Full Stack Academy',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    ]
  },
  community: {
    title: 'Modding Communities',
    paragraphs: [
      'Perry-Lecompton High School',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    ]
  },
  plugins: {
    title: 'Game Plugins',
    paragraphs: [
      'Full Stack Academy',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    ]
  },
  travel: {
    title: 'Modding Communities',
    paragraphs: [
      'Perry-Lecompton High School',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    ]
  },
  campsites: {
    title: 'Game Plugins',
    paragraphs: [
      'Full Stack Academy',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    ]
  }
};

export default display;
