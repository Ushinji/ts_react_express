import * as React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Link } from 'react-router-dom';
import { GET_POSTS, GetPostsResult } from '../../../queries/postQuery';

const PostListPage: React.FC = () => {
  const { loading, error, data } = useQuery<GetPostsResult>(GET_POSTS);

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
          {data.getPosts.map(post => {
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
