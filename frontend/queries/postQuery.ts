import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

export type Post = {
  id: number;
  title: string;
  text: string;
  createdAt: string;
  updatedAt: string;
};

export type GetPostsResult = {
  getPosts: Post[];
};

export const GET_POSTS = gql`
  {
    getPosts {
      id
      title
      text
      createdAt
      updatedAt
    }
  }
`;

export const useGetPostsQuery = () => {
  return useQuery<GetPostsResult>(GET_POSTS);
};
