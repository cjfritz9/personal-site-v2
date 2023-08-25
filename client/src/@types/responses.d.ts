export interface SnippetResponse {
  id: string;
  files: {
    'my-site-gist.ts': {
      filename: string;
      type: string;
      language: string;
      raw_url: string;
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

export type SnippetResponses = Array<SnippetResponse>
