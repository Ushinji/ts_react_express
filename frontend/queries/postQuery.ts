import gql from 'graphql-tag';

type Post = {
  id: number;
  title: string;
  text: string;
  createdAt: string;
  updatedAt: string;
};

export type GetPostsResult = {
  posts: Post[];
};

export const GetPostsQuery = gql`
  {
    posts {
      id
      title
      text
      createdAt
      updatedAt
    }
  }
`;
