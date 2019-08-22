import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import Routes from './components/Routes';
import apolloClient from './modules/apolloClient';

const App = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <Router>
        <Routes />
      </Router>
    </ApolloProvider>
  );
};

export default App;
