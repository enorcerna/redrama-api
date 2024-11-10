import {gql} from "@graphql";

export const countryQuery = gql`
  query listCountriesByPlatforms($platform: String!) {
    listCountriesByPlatforms(platform: $platform) {
      _id
      name
      slug
      flag
      code
      code_flix
      __typename
    }
  }
`;
