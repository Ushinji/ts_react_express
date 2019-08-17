import * as React from 'react';

const Counter: React.FC = () => {
  const [count, setCount] = React.useState(0);

  const increaseCount = React.useCallback(() => {
    setCount(prev => {
      return prev + 1;
    });
  }, [count, setCount]);

  return (
    <div>
      <h2>カウンター: {count}</h2>
      <button type="button" onClick={increaseCount}>
        ＋
      </button>
    </div>
  );
};

export default Counter;
