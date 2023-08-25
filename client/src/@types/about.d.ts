export type Directories = 'career' | 'personal' | 'hobbies';

export interface ReducedSnippet {
  id: string;
  files: {
    'my-site-gist.ts': {
      filename: string;
      type: string;
      language: string;
      raw_data: string;
    };
  };
  created_at: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
    url: string;
  };
}

export type ReducedSnippets = Array<ReducedSnippet>;
