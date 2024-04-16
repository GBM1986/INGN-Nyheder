import { gql } from "graphql-request";

export const getAllNews = gql`
query MyQuery {
    allNews (first: 9) {
      id
      headline
      underheadline
      date
      markdown
      image {
        url
        id
      }
    }
  }
`;