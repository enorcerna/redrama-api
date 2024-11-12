import {gql} from "@graphql";

export const getDramaBySlugQuery = gql`
  query detailDorama($slug: String!) {
    detailDorama(filter: {slug: $slug}) {
      _id
      name
      slug
      cast
      names
      age_limit
      country
      number_of_seasons
      number_of_episodes
      episode_time
      name_es
      overview
      languages
      poster_path
      backdrop_path
      rating
      first_air_date
      isTVShow
      premiere
      poster
      trailer
      backdrop
      uploaders
      subbers
      schedule {
        startEmision
        endEmision
        days
        hour
        season
        episode
        __typename
      }
      genres {
        name
        slug
        __typename
      }
      labels {
        name
        slug
        __typename
      }
      __typename
    }
  }
`;
export const getDramaEpisodesByIdQuery = gql`
  query listEpisodesPagination(
    $page: Int!
    $serie_id: MongoID!
    $season_number: Float!
    $perPage: Int!
  ) {
    paginationEpisode(
      page: $page
      perPage: $perPage
      sort: NUMBER_ASC
      filter: {
        type_serie: "dorama"
        serie_id: $serie_id
        season_number: $season_number
      }
    ) {
      count
      items {
        _id
        name
        still_path
        episode_number
        season_number
        air_date
        slug
        serie_id
        serie_slug
        links_online
        season_poster
        serie_poster
        poster
        backdrop
        __typename
      }
      pageInfo {
        hasNextPage
        __typename
      }
      __typename
    }
  }
`;
export const getDramasSimilarByIdSQuery = gql`
  query similarsDoramas($dorama_id: MongoID!) {
    similarsDoramas(dorama_id: $dorama_id) {
      _id
      name
      slug
      cast
      names
      age_limit
      country
      number_of_seasons
      number_of_episodes
      episode_time
      name_es
      overview
      languages
      poster_path
      backdrop_path
      rating
      first_air_date
      isTVShow
      premiere
      poster
      trailer
      backdrop
      uploaders
      subbers
      schedule {
        startEmision
        endEmision
        days
        hour
        season
        episode
        __typename
      }
      genres {
        name
        slug
        __typename
      }
      labels {
        name
        slug
        __typename
      }
      __typename
    }
  }
`;
