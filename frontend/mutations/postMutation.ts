import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import { GET_POSTS, GetPostsResult, Post } from '../queries/postQuery';

const CREATE_POST = gql`
  mutation createPost($title: String!, $text: String!) {
    createPost(title: $title, text: $text) {
      id
      title
      text
      createdAt
      updatedAt
    }
  }
`;

type createPostMutationResult = {
  createPost: Post;
};

export const useCreatePostMutation = () => {
  return useMutation<createPostMutationResult>(CREATE_POST, {
    update(cache, { data: result }) {
      // TODO: Server側のErrorハンドリング、およびフロント側でのErrorHandlingの整備
      if (!result) throw Error('result is null');

      const cachedQuery = cache.readQuery<GetPostsResult>({
        query: GET_POSTS,
      });

      if (cachedQuery) {
        cache.writeQuery<GetPostsResult>({
          query: GET_POSTS,
          data: {
            getPosts: cachedQuery.getPosts.concat([result.createPost]),
          },
        });
      } else {
        cache.writeQuery<GetPostsResult>({
          query: GET_POSTS,
          data: { getPosts: [result.createPost] },
        });
      }
    },
  });
};
