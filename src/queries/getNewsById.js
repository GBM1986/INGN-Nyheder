import { gql } from "graphql-request";

export const getNewsById = gql`
query MyQuery($myid: ID!) {
  allNews(where: { id: $myid }) {
    headline
    underheadline
    date
    markdown
    image {
      fileName
      url
    }
  }
}
`;