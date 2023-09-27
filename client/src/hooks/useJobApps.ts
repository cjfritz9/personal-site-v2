import { useCallback, useEffect, useState } from 'react';
import { JobAppData, JobAppResponses } from '../@types/responses';
import { fetchJobApps, postJobApp} from './requests';

const useJobApps = () => {
  const [jobApps, setJobApps] = useState<JobAppResponses>([]);
  const [isLoading, setIsLoading] = useState(true);

  const createJobApp = useCallback(async (data: JobAppData) => {
    const response = await postJobApp(data);

    return response;
  }, []);

  const getJobApps = useCallback(async () => {
    const fetchedJobApps: JobAppResponses = await fetchJobApps();

    setJobApps(fetchedJobApps);
    setIsLoading(false);
  }, [createJobApp]);


  useEffect(() => {
    getJobApps();
  }, [getJobApps]);

  return {
    createJobApp,
    getJobApps,
    jobApps,
    isLoading
  };
};

export default useJobApps;
