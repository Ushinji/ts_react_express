import { gql } from 'apollo-server-express';

export default gql`
  type Post {
    id: ID!
    title: String!
    text: String!
    createdAt: String!
    updatedAt: String!
  }

  type Query {
    posts: [Post]!
  }
`;
