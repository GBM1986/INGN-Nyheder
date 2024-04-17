import { gql } from "graphql-request";

export const getNewsByCategory = gql`
query MyQuery ($category: String!) {
    category(where: {slug: $category}) {
      allNews {
        id
        headline
        underheadline
        date
        markdown
        image {
          url
        }
      }
    }
  }
`;