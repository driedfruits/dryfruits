// Cloudflare Worker: Prerender.io bot detection middleware
// Deploy this to Cloudflare Workers — it is NOT part of the app bundle.

const BOT_AGENTS = [
  'googlebot', 'bingbot', 'yandex', 'baiduspider', 'facebookexternalhit',
  'twitterbot', 'rogerbot', 'linkedinbot', 'embedly', 'quora link preview',
  'showyoubot', 'outbrain', 'pinterest/0.', 'developers.google.com/+/web/snippet',
  'slackbot', 'vkshare', 'w3c_validator', 'redditbot', 'applebot',
  'whatsapp', 'flipboard', 'tumblr', 'bitlybot', 'skypeuripreview',
  'nuzzel', 'discordbot', 'google page speed', 'qwantify',
  'pinterestbot', 'bitrix link preview', 'xing-contenttabreceiver',
  'chrome-lighthouse', 'telegrambot', 'google-inspectiontool',
  'petalbot', 'semrushbot', 'ahrefsbot', 'gptbot', 'chatgpt-user',
  'claudebot', 'anthropic-ai', 'bytespider', 'cohere-ai',
];

const IGNORE_EXTENSIONS = [
  '.js', '.css', '.xml', '.less', '.png', '.jpg', '.jpeg', '.gif',
  '.pdf', '.doc', '.txt', '.ico', '.rss', '.zip', '.mp3', '.rar',
  '.exe', '.wmv', '.doc', '.avi', '.ppt', '.mpg', '.mpeg', '.tif',
  '.wav', '.mov', '.psd', '.ai', '.xls', '.mp4', '.m4a', '.swf',
  '.dat', '.dmg', '.iso', '.flv', '.m4v', '.torrent', '.ttf',
  '.woff', '.woff2', '.svg', '.webp', '.avif', '.webm',
];

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const pathname = url.pathname.toLowerCase();
    const userAgent = (request.headers.get('User-Agent') || '').toLowerCase();

    // Skip static assets
    if (IGNORE_EXTENSIONS.some(ext => pathname.endsWith(ext))) {
      return fetch(request);
    }

    // Check if request is from a bot
    const isBot = BOT_AGENTS.some(bot => userAgent.includes(bot));

    if (!isBot) {
      return fetch(request);
    }

    // Proxy bot requests through Prerender.io
    const prerenderUrl = `https://service.prerender.io/${request.url}`;

    const prerenderRequest = new Request(prerenderUrl, {
      headers: {
        'X-Prerender-Token': env.PRERENDER_TOKEN,
        'X-Prerender-Int-Type': 'cloudflare-worker',
      },
      redirect: 'manual',
    });

    const response = await fetch(prerenderRequest);

    return new Response(response.body, {
      status: response.status,
      headers: response.headers,
    });
  },
};
