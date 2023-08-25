import { useCallback, useEffect, useState } from 'react';
import { fetchRawSnippet, fetchSnippets } from './requests';
import { SnippetResponses } from '../@types/responses';

const useSnippets = () => {
  const [snippets, setSnippets] = useState<SnippetResponses>([
    {
      owner: {
        login: 'cjfritz9',
        avatarUrl: 'https://avatars.githubusercontent.com/u/110115371?v=4',
        url: 'https://github.com/users/cjfritz9'
      },
      url: 'https://gist.github.com/cjfritz9/077fcc9c9aba52531f35216814f87ffa',
      createdAt: '2023-04-14T02:15:15Z',
      description: 'ROT13',
      stargazerCount: 1,
      files: [
        {
          name: 'my-site-gist.ts',
          text: `const rot13 = (str: string) => {
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
          };`,
          language: {
            color: '#3178c6',
            id: 'MDg6TGFuZ3VhZ2UyODc=',
            name: 'TypeScript'
          }
        }
      ]
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const getSnippets = useCallback(async () => {
    const fetchedSnippets: SnippetResponses = await fetchSnippets();
    if (!fetchedSnippets.length) return;

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
