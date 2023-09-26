type Filenames =
  | 'snippet.ts'
  | 'description.ts'
  | 'snippet.js'
  | 'description.js';

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
    name: Filenames;
    text: string;
    language: {
      color: string;
      id: string;
      name: 'TypeScript' | 'JavaScript';
    };
  }>;
}

export type SnippetResponses = Array<SnippetResponse>;

export interface JobAppResponse {
  id: string;
  companyName: string;
  dateSubmitted: string;
  isActive: boolean;
  status: {
    name: 'submitted' | 'stale' | 'interviewing' | 'offer';
    weight: number;
  };
}

export type JobAppResponses = Array<JobAppResponse>;
