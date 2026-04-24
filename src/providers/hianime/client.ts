import { log } from "../../core/logger.js";
import { ApiError } from "../../core/errors.js";
import { events } from "../../core/events.js";

const BASE_URL = "https://hianime.lc";

export async function fetchHiAnime(endpoint: string) {
  const url = `${BASE_URL}${endpoint}`;

  try {
    events.emit("request", { url });
    log.info("Fetching:", url);

    const res = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0",
        "X-Requested-With": "XMLHttpRequest",
        "Referer": "https://hianime.lc/",
        "Accept": "application/json, text/plain, */*"
      }
    });

    events.emit("response", { url, status: res.status });

    if (!res.ok) {
      throw new Error(`HTTP ${res.status}`);
    }

    return await res.json();
  } catch (err) {
    events.emit("error", { error: err });
    log.error("Fetch error:", err);
    throw ApiError.wrap(err, "fetchHiAnime");
  }
}