// Cloudflare Pages Function: same-origin proxy for the game's server requests.
// Route: /__proxy?url=<encoded target>. Only Geometry Dash servers are allowed.
const ALLOWED = [
  'www.boomlings.com',
  'boomlings.com',
  'robtopgames.com',
  'www.robtopgames.com',
  'audio.ngfiles.com',
  'geometrydashcontent.b-cdn.net',
  'geometrydashfiles.b-cdn.net'
];

export async function onRequest({ request }) {
  const self = new URL(request.url);
  if (request.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': '*'
      }
    });
  }
  if (request.method !== 'GET' && request.method !== 'POST') {
    return new Response('method not allowed', { status: 405 });
  }

  let target;
  try {
    target = new URL(self.searchParams.get('url') || '');
  } catch (e) {
    return new Response('bad url', { status: 400 });
  }

  if (!/^https?:$/.test(target.protocol) || !ALLOWED.includes(target.hostname)) {
    return new Response('host not allowed', { status: 403 });
  }

  // GD servers reject requests that send a browser User-Agent
  const headers = new Headers({ 'User-Agent': '' });
  let body;
  if (request.method === 'POST') {
    headers.set('Content-Type', 'application/x-www-form-urlencoded');
    body = await request.arrayBuffer();
  }

  let up;
  try {
    up = await fetch(target.toString(), {
      method: request.method,
      headers,
      body,
      redirect: 'follow'
    });
  } catch (e) {
    return new Response('upstream error: ' + e, { status: 502 });
  }

  return new Response(up.body, {
    status: up.status,
    headers: {
      'Content-Type': up.headers.get('Content-Type') || 'text/plain',
      'Cache-Control': 'no-store',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': '*'
    }
  });
}
