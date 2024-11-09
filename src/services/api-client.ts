import {RequestDocument, Variables} from "@graphql/types";
import {GraphQLClient} from "@graphql";
import {labelQuery} from "@/gql/index.ts";
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
}
export const ApiClient = new Api();
