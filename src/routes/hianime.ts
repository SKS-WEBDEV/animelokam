import { Hono } from "hono";
import { applyCors } from "../core/cors.js";

import { getHomePage } from "../providers/hianime/home.js";
import { searchAnime } from "../providers/hianime/search.js";
import { getAnimeInfo, getEpisodes } from "../providers/hianime/anime.js";
import { getServers, getSources } from "../providers/hianime/episode.js";

const app = new Hono();

// HOME
app.get("/home", async (c) => {
  applyCors(c);
  return c.json(await getHomePage());
});

// SEARCH
app.get("/search", async (c) => {
  applyCors(c);
  const q = c.req.query("q") || "";
  return c.json(await searchAnime(q));
});

// ANIME
app.get("/anime/:id", async (c) => {
  applyCors(c);
  return c.json(await getAnimeInfo(c.req.param("id")));
});

// EPISODES
app.get("/anime/:id/episodes", async (c) => {
  applyCors(c);
  return c.json(await getEpisodes(c.req.param("id")));
});

// SERVERS
app.get("/episode/servers", async (c) => {
  applyCors(c);
  return c.json(await getServers(c.req.query("episodeId")!));
});

// SOURCES
app.get("/episode/sources", async (c) => {
  applyCors(c);
  return c.json(
    await getSources(
      c.req.query("episodeId")!,
      c.req.query("server")!
    )
  );
});

export default app;