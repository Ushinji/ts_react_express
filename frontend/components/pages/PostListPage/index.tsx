import * as React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Link } from 'react-router-dom';
import { GetPostsQuery, GetPostsResult } from '../../../queries/postQuery';

const PostListPage: React.FC = () => {
  const { loading, error, data } = useQuery<GetPostsResult>(GetPostsQuery);

  if (loading) return <p>Loading...</p>;
  if (error || !data) return <p>Error :(</p>;

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {data.posts.map(post => {
            return (
              <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.title}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Link to="/posts/new">Create Post</Link>
    </div>
  );
};

export default PostListPage;
