import type {Context} from "hono";
import {ApiClient} from "@/services/api-client.ts";

export const getLabelsController = async (c: Context) => {
  const data = await ApiClient.getLabels();
  return c.json(data);
};
