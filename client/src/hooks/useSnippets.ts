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
          name: 'snippet.ts',
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
        },
        {
          name: 'description.ts',
          text: `
          // ROT13 Algorithm 

// ROT13 ("rotate by 13 places", sometimes hyphenated ROT-13) is 
// a simple letter substitution cipher that replaces a letter
// with the 13th letter after it in the latin alphabet. ROT13 is
// a special case of the Caesar cipher which was developed in 
// ancient Rome.

// Step 1: Define the alphabet and the ROT13 alphabet
// Step 2: Initialize an empty string
// Step 3: Loop through the input string
// Step 4: Check if the character at the current index is uppercase
//   or lowercase
// Step 5: Find the character's position in the defined alphabet in
//   either case
// Step 6: Add the lowercase or uppercase character to the output 
//   string
// Step 7: If the character is not in the alphabet (special 
//   character or whitespace) add it to the output
// Step 7: Loop until finished`,
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
