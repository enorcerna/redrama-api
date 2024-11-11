import {gql} from "@graphql";

export const searchQuery = gql`
  query searchAll($input: String!) {
    searchDorama(input: $input, limit: 5) {
      _id
      slug
      name
      name_es
      poster_path
      rating
      poster
      episode_time
      __typename
    }
    searchMovie(input: $input, limit: 5) {
      _id
      name
      name_es
      slug
      runtime
      rating
      poster_path
      poster
      __typename
    }
  }
`;
