import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './components/Routes';

const App = () => {
  return (
    <Router>
      <Routes />
    </Router>
  );
};

export default App;
