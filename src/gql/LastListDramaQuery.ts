import {gql} from "@graphql";

export const lastListDramaQuery = gql`
  query listLastDoramas($limit: Int, $filter: FilterFindManyDoramaInput) {
    listDoramas(limit: $limit, sort: _ID_DESC, filter: $filter) {
      _id
      name
      name_es
      slug
      languages
      isTVShow
      poster_path
      poster
      __typename
    }
  }
`;
