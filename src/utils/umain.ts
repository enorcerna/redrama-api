import {decode} from "@zaubrik/djwt";
import type {LinkType} from "@/types/episode.d.ts";
export const decodeLink = (l?: string) => {
  l =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsaW5rIjoiYUhSMGNITTZMeTl0YVhoa2NtOXdMbWx6TDJVdmQydzVOMnczTkhab01HZGxlbXR0Iiwic2VydmVyIjoiMzg4OSIsImFwcCI6ImNvbS5hc2lhcHAuZG9yYW1hc2dvIiwiaWF0IjoxNzMxMzg2ODU5LCJleHAiOjE3MzE2NDYwNTl9.e2hP8QLIB_AzqthkaavlCgpe_4TTveTeke2V4igy3Vc";
  const payload = decode(l)[1] as LinkType;
  const link = atob(payload.link);
  console.log(link);
};
