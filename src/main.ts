import { Router } from "./router.ts";
import { generateShortCode, storeShortLink, getShortLink } from "./db.ts";
const app = new Router();

import { HomePage } from "./ui.tsx";
import { render } from "npm:preact-render-to-string";

app.get("/", () => {
  return new Response(
    render(HomePage({user: null })), 
    {
    status: 200,
    headers: {
      "content-type": "text/html",
    },
  });
});

export default {
  fetch(req) {
    return app.handler(req);
  },
} satisfies Deno.ServeDefaultExport;