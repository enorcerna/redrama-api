import {gql} from "@graphql";

export const networksQuery = gql`
  query listNetworks {
    listNetworks(
      filter: {platform: "doramasgo"}
      sort: NUMBER_DESC
      limit: 30
    ) {
      _id
      name
      slug
      __typename
    }
  }
`;
