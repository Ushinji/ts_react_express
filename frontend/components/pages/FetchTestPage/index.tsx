import * as React from 'react';
import axios from 'axios';

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
  const [fetchTestResult, setFetchTestResult] = React.useState<FetchTestResult>(
    {
      loading: true,
    }
  );

  const fetchResult = React.useCallback(async () => {
    const res = await axios.get('api/test');
    if (res.status !== 200) {
      setFetchTestResult({ error: true, loading: false });
    }
    setFetchTestResult({
      result: res.data.result,
      error: false,
      loading: false,
    });
  }, []);

  React.useEffect(() => {
    setFetchTestResult({ loading: true });
    fetchResult();
  }, [fetchResult]);

  return { fetchTestResult };
};

const FetchTestPage: React.FC = () => {
  const { fetchTestResult } = useFetchTest();

  if (fetchTestResult.loading) {
    return <div>Loading</div>;
  }

  if (fetchTestResult.error) {
    return <div>Error</div>;
  }

  return <div>{`Result: ${fetchTestResult.result}`}</div>;
};

export default FetchTestPage;
