import type {Context} from "hono";
import {ApiClient} from "@/services/api-client.ts";

export const getCountriesController = async (c: Context) => {
  const data = await ApiClient.getCountries();
  return c.json(data);
};
