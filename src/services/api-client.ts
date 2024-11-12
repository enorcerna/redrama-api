import {RequestDocument, Variables} from "@graphql/types";
import {GraphQLClient} from "@graphql";
import {labelQuery, countryQuery} from "@/gql/index.ts";
import {searchQuery} from "@/gql/searchQuery.ts";
import {lastListDramaQuery} from "@/gql/LastListDramaQuery.ts";
import {
  getDramaBySlugQuery,
  getDramaEpisodesByIdQuery,
  getDramasSimilarByIdSQuery
} from "@/gql/dramaQuery.ts";
import {
  getEpisodeLinksByIdQuery,
  getEpisodeNextByIdQuery,
  getEpisodePrevByIdQuery
} from "@/gql/episodeQuery.ts";
import {getEpisodeBySlugQuery} from "@/gql/episodeQuery.ts";
import {
  getGenreBySlugQuery,
  getListGenreQuery,
  getPaginationDramasByGenreIdQuery
} from "@/gql/genreQuery.ts";
class Api {
  private api_url: string;
  private client: GraphQLClient;
  constructor() {
    this.api_url = Deno.env.get("API_URL") as string;
    this.client = new GraphQLClient(this.api_url);
  }
  private async Request(query: RequestDocument, variables: Variables) {
    try {
      return await this.client.request(query, variables);
    } catch (err) {
      throw new Error("Failed fetch:" + err);
    }
  }
  // label
  async getLabels() {
    return await this.Request(labelQuery, {});
  }
  async getCountries() {
    return await this.Request(countryQuery, {platform: "doramasgo"});
  }
  async getSearch(q: string) {
    return await this.Request(searchQuery, {input: q});
  }
  //last
  async getLastListDrama() {
    return await this.Request(lastListDramaQuery, {
      limit: 15,
      filter: {isTVShow: false}
    });
  }
  // drama
  async getDramaBySlug(slug: string) {
    return await this.Request(getDramaBySlugQuery, {slug});
  }
  async getDramasSimilarById(id: string) {
    return await this.Request(getDramasSimilarByIdSQuery, {dorama_id: id});
  }
  async getDramaEpisodesById(id: string) {
    return await this.Request(getDramaEpisodesByIdQuery, {
      page: 1,
      perPage: 16,
      serie_id: String(id),
      season_number: 1
    });
  }
  // episodes
  async getEpisodesBySlug(slug: string) {
    return await this.Request(getEpisodeBySlugQuery, {slug});
  }
  async getEpisodeLinksById(id: string) {
    return await this.Request(getEpisodeLinksByIdQuery, {
      id: String(id),
      app: "com.asiapp.doramasgo"
    });
  }
  async getEpisodeNextById(id: string) {
    return await this.Request(getEpisodeNextByIdQuery, {episode_id: id});
  }
  async getEpisodePrevById(id: string) {
    return await this.Request(getEpisodePrevByIdQuery, {episode_id: id});
  }
  // genre
  async getListGenre() {
    const lt = await this.Request(getListGenreQuery, {});
    return lt.listGenres;
  }
  async getGenreBySlug(slug: string) {
    const g = await this.Request(getGenreBySlugQuery, {slug});
    return g.detailGenre;
  }
  async getPaginationDramasByGenreId(id: string, page = 1) {
    const p = await this.Request(getPaginationDramasByGenreIdQuery, {
      page,
      sort: "CREATEDAT_DESC",
      perPage: 20,
      filter: {genreId: id, isTVShow: false}
    });
    return p.paginationDorama;
  }
}
export const ApiClient = new Api();
