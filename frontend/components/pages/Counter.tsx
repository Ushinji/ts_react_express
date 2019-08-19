import * as React from 'react';

const Counter: React.FC = () => {
  const [count, setCount] = React.useState(0);

  const increaseCount = React.useCallback(() => {
    setCount(prev => prev + 1);
  }, [setCount]);

  return (
    <div>
      <h2>
        カウンター:
        {count}
      </h2>
      <button type="button" onClick={increaseCount}>
        ＋
      </button>
    </div>
  );
};

export default Counter;
