import * as React from 'react';
import { Link } from 'react-router-dom';

const RootPage: React.FC = () => {
  return (
    <div>
      <h1>Hello world</h1>
      <ul>
        <li>
          <Link to="/counter">カウンター</Link>
        </li>
        <li>
          <Link to="/test">FetchTest</Link>
        </li>
        <li>
          <Link to="/posts">PostList</Link>
        </li>
      </ul>
    </div>
  );
};

export default RootPage;
