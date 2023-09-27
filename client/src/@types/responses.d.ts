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
  positionTitle: string;
  postLink: string;
  dateSubmitted: string;
  isActive: boolean;
  status: {
    name: 'submitted' | 'stale' | 'interviewing' | 'offer';
    weight: 1 | 2 | 3 | 4;
  };
}

export interface JobAppData {
  companyName: string;
  positionTitle: string;
  postLink: string;
  dateSubmitted: string;
  isActive: boolean;
  status: {
    name: 'submitted' | 'stale' | 'interviewing' | 'offer';
    weight: 1 | 2 | 3 | 4;
  };
}

export type JobAppResponses = Array<JobAppResponse>;
