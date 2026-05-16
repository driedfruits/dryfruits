// One-off helper to interact with Google Search Console via the Lovable connector gateway.
// Actions: token | verify | add-site | submit-sitemap | list-sites

const GATEWAY = "https://connector-gateway.lovable.dev/google_search_console";
const SITE = "https://dryfruits.biz/";
const SITEMAP = "https://dryfruits.biz/sitemap.xml";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
  const GSC = Deno.env.get("GOOGLE_SEARCH_CONSOLE_API_KEY");
  if (!LOVABLE_API_KEY || !GSC) {
    return json({ error: "Missing keys", hasLovable: !!LOVABLE_API_KEY, hasGsc: !!GSC }, 500);
  }

  const url = new URL(req.url);
  const action = url.searchParams.get("action") ?? "token";

  const headers = {
    "Authorization": `Bearer ${LOVABLE_API_KEY}`,
    "X-Connection-Api-Key": GSC,
    "Content-Type": "application/json",
  };

  try {
    if (action === "list-sites") {
      const r = await fetch(`${GATEWAY}/webmasters/v3/sites`, { headers });
      return json({ status: r.status, body: await r.json() });
    }
    if (action === "token") {
      const r = await fetch(`${GATEWAY}/siteVerification/v1/token`, {
        method: "POST", headers,
        body: JSON.stringify({ site: { identifier: SITE, type: "SITE" }, verificationMethod: "META" }),
      });
      return json({ status: r.status, body: await r.json() });
    }
    if (action === "verify") {
      const r = await fetch(`${GATEWAY}/siteVerification/v1/webResource?verificationMethod=META`, {
        method: "POST", headers,
        body: JSON.stringify({ site: { identifier: SITE, type: "SITE" } }),
      });
      return json({ status: r.status, body: await r.json() });
    }
    if (action === "add-site") {
      const r = await fetch(`${GATEWAY}/webmasters/v3/sites/${encodeURIComponent(SITE)}`, {
        method: "PUT", headers,
      });
      return json({ status: r.status, body: await r.text() });
    }
    if (action === "submit-sitemap") {
      const r = await fetch(
        `${GATEWAY}/webmasters/v3/sites/${encodeURIComponent(SITE)}/sitemaps/${encodeURIComponent(SITEMAP)}`,
        { method: "PUT", headers },
      );
      return json({ status: r.status, body: await r.text() });
    }
    return json({ error: "unknown action" }, 400);
  } catch (e) {
    return json({ error: String(e) }, 500);
  }
});

function json(data: unknown, status = 200) {
  return new Response(JSON.stringify(data, null, 2), {
    status, headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}