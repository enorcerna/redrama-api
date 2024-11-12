import {gql} from "@graphql";
// episode by slug
export const getEpisodeBySlugQuery = gql`
  query detailEpisode($slug: String!) {
    detailEpisode(filter: {slug: $slug}) {
      id
      slug
      name
      name_es
      overview
      air_date
      date_string
      episode_number
      season_number
      still_path
      still_image
      languages
      links_online
      count_links
      type_serie
      serie_id
      serie_slug
      serie_name
      serie_name_es
      serie_backdrop_path
      serie_poster
      poster
      backdrop
      serie_tmdb
      season_id
      season_slug
      season_poster
      updatedAt
      countDownDate
      note
      premiere
      is_ova
      ova_number
      emision
      uploading
      pause
      commingSoon
      emision_days
      notShowDate
      vote_average
      vote_count
      _id
    }
  }
`;
// episode next by id
export const getEpisodeNextByIdQuery = gql`
  query nextEpisode($episode_id: MongoID!) {
    nextEpisode(episode_id: $episode_id) {
      _id
      name
      slug
      __typename
    }
  }
`;
// episode prev by id
export const getEpisodePrevByIdQuery = gql`
  query prevEpisode($episode_id: MongoID!) {
    prevEpisode(episode_id: $episode_id) {
      _id
      name
      slug
      __typename
    }
  }
`;
// episode links by id
export const getEpisodeLinksByIdQuery = gql`
  query GetEpisodeLinks($id: MongoID!, $app: String) {
    getEpisodeLinks(id: $id, app: $app) {
      links_online
      __typename
    }
  }
`;
