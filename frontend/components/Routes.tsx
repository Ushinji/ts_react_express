import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import CounterPage from './pages/CounterPage';
import FetchTestPage from './pages/FetchTestPage';
import RootPage from './pages/RootPage';
import PostListPage from './pages/PostListPage';
import PostCreatePage from './pages/PostCreatePage';

type State = {
  hasError: boolean;
};

class Routes extends React.Component<{}, State> {
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
      <Switch>
        <Route exact path="/" component={RootPage} />
        <Route exact path="/counter" component={CounterPage} />
        <Route exact path="/test" component={FetchTestPage} />
        <Route exact path="/posts" component={PostListPage} />
        <Route exact path="/posts/new" component={PostCreatePage} />
      </Switch>
    );
  }
}

export default Routes;
