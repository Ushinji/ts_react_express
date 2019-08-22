import * as React from 'react';
import useFetchTest from './hooks';

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
