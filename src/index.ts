import { serve } from "@hono/node-server";
import app from "./routes/hianime.js";

serve({
  fetch: app.fetch,
  port: 4000,
});

console.log("Server running on http://localhost:4000");