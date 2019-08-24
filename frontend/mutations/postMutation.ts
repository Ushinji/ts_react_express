import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import { GET_POSTS, GetPostsResult } from '../queries/postQuery';

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

export const useCreatePostMutation = () => {
  const [createPostMutation] = useMutation(CREATE_POST, {
    // TODO: createPostがany型。Typeを定義すること
    update(cache, { data: { createPost } }) {
      const cachedQuery = cache.readQuery<GetPostsResult>({ query: GET_POSTS });

      // TODO: cache.writeQueryのdataがany型。Typeを定義すること
      if (cachedQuery) {
        cache.writeQuery({
          query: GET_POSTS,
          data: { getPosts: cachedQuery.getPosts.concat([createPost]) },
        });
      } else {
        cache.writeQuery({
          query: GET_POSTS,
          data: { getPosts: [createPost] },
        });
      }
    },
  });

  return { createPostMutation };
};
