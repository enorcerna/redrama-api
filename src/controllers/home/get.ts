import type {Context} from "hono";
import {ApiClient} from "@/services/api-client.ts";

export const getlastListDramaController = async (c: Context) => {
  const data = await ApiClient.getLastListDrama();
  return c.json(data);
};
