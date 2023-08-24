import { useCallback, useEffect, useState } from 'react';
import { fetchSnippets } from './requests';
import { SnippetResponses } from '../@types/responses';

const useSnippets = () => {
  const [snippets, setSnippets] = useState<SnippetResponses>([]);
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
