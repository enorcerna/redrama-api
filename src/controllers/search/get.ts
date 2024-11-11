import type {Context} from "hono";
import {ApiClient} from "@/services/api-client.ts";

export const getSearchController = async (c: Context) => {
  const key = c.req.query("q") as string;
  const data = await ApiClient.getSearch(key);

  return c.json(data);
};
