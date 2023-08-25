export interface SnippetResponse {
  owner: {
    login: string;
    avatarUrl: string;
    url: string;
  };
  url: string;
  createdAt: string;
  description: string;
  stargazerCount: number;
  files: Array<{
    name: 'snippet.ts' | 'description.ts';
    text: string;
    language: {
      color: string;
      id: string;
      name: 'TypeScript' | 'JavaScript';
    };
  }>;
}

export type SnippetResponses = Array<SnippetResponse>;
