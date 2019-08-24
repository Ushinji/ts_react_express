import ApolloClient, { gql } from 'apollo-boost';

const apolloClient = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
});

apolloClient
  .query({
    query: gql`
      {
        getPosts {
          id
          title
          text
          createdAt
          updatedAt
        }
      }
    `,
  })
  .then(result => console.log(result));

export default apolloClient;
