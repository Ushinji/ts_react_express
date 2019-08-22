import * as React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const PostListPage: React.FC = () => {
  const { loading, error, data } = useQuery(gql`
    {
      posts {
        id
        title
        text
      }
    }
  `);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <ul>
      {data.posts.map((post: any) => {
        return <li key={post.id}>{post.title}</li>;
      })}
    </ul>
  );
};

export default PostListPage;
