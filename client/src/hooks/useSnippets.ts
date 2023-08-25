import { useCallback, useEffect, useState } from 'react';
import { fetchSnippets } from './requests';
import { SnippetResponses } from '../@types/responses';

const useSnippets = () => {
  const [snippets, setSnippets] = useState<SnippetResponses>([
    {
      id: '1',
      files: {
        'my-site-gist.ts': {
          filename: 'my-site-gist.ts',
          type: 'unknown',
          language: 'javascript',
          raw_url:
            'https://gist.githubusercontent.com/cjfritz9/0dcc0aaeadc4a6a1a4f57e5ace75a5a1/raw/e1a8206bca637b4e23fde280e9816d883fef4376/my-site-gist.ts'
        }
      },
      created_at: '2010-04-14T02:15:15Z',
      description: 'some code snippet',
      owner: {
        login: 'cjfritz9',
        avatar_url: 'https://avatars.githubusercontent.com/u/110115371?v=4',
        url: 'https://github.com/users/cjfritz9'
      }
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const getSnippets = useCallback(async () => {
    const fetchedSnippets = await fetchSnippets();
    setSnippets(fetchedSnippets);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    getSnippets();
  }, [getSnippets]);

  return {
    snippets,
    isLoading
  };
};

export default useSnippets;
