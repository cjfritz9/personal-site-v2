import { useCallback, useEffect, useState } from 'react';
import { JobAppResponses } from '../@types/responses';
import { fetchJobApps } from './requests';

const useJobApps = () => {
  const [jobApps, setJobApps] = useState<JobAppResponses>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getJobApps = useCallback(async () => {
    const fetchedJobApps: JobAppResponses = await fetchJobApps();

    setJobApps(fetchedJobApps);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    getJobApps();
  }, [getJobApps]);

  return {
    jobApps,
    isLoading
  };
};

export default useJobApps;
