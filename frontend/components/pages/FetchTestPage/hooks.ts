import * as React from 'react';
import Axios from 'axios';

const { useState, useCallback, useEffect } = React;

type FetchTestResult =
  | { loading: true }
  | {
      loading: false;
      error: true;
    }
  | {
      loading: false;
      error: false;
      result: string;
    };

const useFetchTest = () => {
  const [fetchTestResult, setFetchTestResult] = useState<FetchTestResult>({
    loading: true,
  });

  const fetchResult = useCallback(async () => {
    const res = await Axios.get('api/test');
    if (res.status !== 200) {
      setFetchTestResult({ error: true, loading: false });
    }
    setFetchTestResult({
      result: res.data.result,
      error: false,
      loading: false,
    });
  }, []);

  useEffect(() => {
    setFetchTestResult({ loading: true });
    fetchResult();
  }, [fetchResult]);

  return { fetchTestResult };
};

export default useFetchTest;
