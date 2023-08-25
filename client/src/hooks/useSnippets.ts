import { useCallback, useEffect, useState } from 'react';
import { fetchRawSnippet, fetchSnippets } from './requests';
import { SnippetResponse, SnippetResponses } from '../@types/responses';
import { ReducedSnippet, ReducedSnippets } from '../@types/about';

const useSnippets = () => {
  const [snippets, setSnippets] = useState<ReducedSnippets>([
    {
      id: '1',
      files: {
        'my-site-gist.ts': {
          filename: 'my-site-gist.ts',
          type: 'unknown',
          language: 'javascript',
          raw_data: 
`const rot13 = (str: string) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const rot13Alphabet = 'nopqrstuvwxyzabcdefghijklm';
  let output = '';

  for (let i = 0; i < str.length; i++) {
    const isUppercase = str[i] === str[i].toUpperCase();
    let idx = alphabet.indexOf(str[i]);

    if (isUppercase) {
      idx = alphabet.toUpperCase().indexOf(str[i]);
    }

    if (idx !== -1) {
      if (isUppercase) {
        output += rot13Alphabet.toUpperCase().charAt(idx);
      } else {
        output += rot13Alphabet.charAt(idx);
      }
    } else {
      output += str.charAt(i);
    }
  }

  return output;
};`
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
    const fetchedSnippets: SnippetResponses = await fetchSnippets();
    const reducedSnippets: ReducedSnippets = [];

    if (!fetchedSnippets.length) return;

    for (let i = 0; i < fetchedSnippets.length; i++) {
      (async () => {
        reducedSnippets.push({
          id: fetchedSnippets[i].id,
          files: {
            'my-site-gist.ts': {
              filename: 'my-site-gist.ts',
              type: fetchedSnippets[i].files['my-site-gist.ts'].type,
              language: fetchedSnippets[i].files['my-site-gist.ts'].language,
              raw_data: await fetchRawSnippet(
                fetchedSnippets[i].files['my-site-gist.ts'].raw_url
              )
            }
          },
          created_at: fetchedSnippets[i].created_at,
          description: fetchedSnippets[i].description,
          owner: {
            avatar_url: fetchedSnippets[i].owner.avatar_url,
            login: fetchedSnippets[i].owner.login,
            url: fetchedSnippets[i].owner.url
          }
        });
      })();
    }
    setSnippets(reducedSnippets);
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
