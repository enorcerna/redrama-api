import {gql} from "@graphql";

export const labelQuery = gql`
  query listLabels {
    listLabels(filter: {platform: "doramasgo"}, sort: NUMBER_DESC) {
      _id
      name
      slug
      __typename
    }
  }
`;
