import {RequestDocument, Variables} from "@graphql/types";
import {GraphQLClient} from "@graphql";
import {labelQuery, countryQuery} from "@/gql/index.ts";
import {searchQuery} from "@/gql/searchQuery.ts";
import {lastListDramaQuery} from "@/gql/LastListDramaQuery.ts";
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
}
export const ApiClient = new Api();
