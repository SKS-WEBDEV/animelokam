import { fetchHiAnime } from "./client.js";

export const getServers = (episodeId: string) => {
  return fetchHiAnime(`/ajax/episode/servers?episodeId=${episodeId}`);
};

export const getSources = (episodeId: string, server: string) => {
  return fetchHiAnime(
    `/ajax/episode/sources?episodeId=${episodeId}&server=${server}`
  );
};