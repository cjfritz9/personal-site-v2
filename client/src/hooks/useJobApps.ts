import { useCallback, useEffect, useState } from 'react';
import { JobAppData, JobAppResponse, JobAppResponses } from '../@types/responses';
import { fetchJobApps, patchJobApp, postJobApp } from './requests';

const useJobApps = () => {
  const [jobApps, setJobApps] = useState<JobAppResponses>([]);
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  const getJobApps = useCallback(async () => {
    const fetchedJobApps: JobAppResponses = await fetchJobApps();

    setIsFirstLoad(false);
    setJobApps(fetchedJobApps);
  }, []);

  const createJobApp = useCallback(async (data: JobAppData) => {
    const response = await postJobApp(data);
    await getJobApps();
    return response;
  }, []);

  const updateJobApp = useCallback(async (data: JobAppResponse) => {
    const response = await patchJobApp(data);
    await getJobApps();
    return response;
  }, []);

  useEffect(() => {
    getJobApps();
  }, [getJobApps]);

  return {
    getJobApps,
    createJobApp,
    updateJobApp,
    jobApps,
    isFirstLoad
  };
};

export default useJobApps;
