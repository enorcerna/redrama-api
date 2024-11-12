import {gql} from "@graphql";
// list genres
export const getListGenreQuery = gql`
  query listGenres {
    listGenres(filter: {platform: "doramasgo"}, sort: NUMBER_DESC) {
      name
      _id
      slug
      __typename
    }
  }
`;
// genre by slug
export const getGenreBySlugQuery = gql`
  query detailGenre($slug: String!) {
    detailGenre(filter: {slug: $slug}) {
      _id
      name
      slug
      id
      updatedAt
      number_of_series
      number_of_doramas
      number_of_movies
      number_of_animes
      number_of_films
      description
      types
      images
      images_doramas
      __typename
    }
  }
`;
// pagination genre by id
export const getPaginationDramasByGenreIdQuery = gql`
  query paginationDorama(
    $page: Int
    $perPage: Int
    $sort: SortFindManyDoramaInput
    $filter: FilterFindManyDoramaInput
  ) {
    paginationDorama(
      page: $page
      perPage: $perPage
      sort: $sort
      filter: $filter
    ) {
      count
      pageInfo {
        currentPage
        hasNextPage
        hasPreviousPage
        __typename
      }
      items {
        _id
        name
        name_es
        languages
        slug
        rating
        backdrop_path
        poster_path
        isTVShow
        backdrop
        __typename
      }
      __typename
    }
  }
`;
