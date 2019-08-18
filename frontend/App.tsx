import * as React from 'react';
import Counter from './Counter';

type State = {
  hasError: boolean;
};

class App extends React.Component<{}, State> {
  constructor(props = {}) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error: Error | null, info: object) {
    console.log(error); // eslint-disable-line no-console
    console.log(info); // eslint-disable-line no-console
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <div>Error</div>;
    }

    return (
      <div>
        <h1>ふがあああああ</h1>
        <Counter />
      </div>
    );
  }
}

export default App;
