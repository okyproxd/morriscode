/**
 * MorrisCode Worker — static file server.
 * Anything that's not a file gets index.html (SPA fallback).
 */
export default {
  async fetch(request, env) {
    if (env.ASSETS) return env.ASSETS.fetch(request);
    return new Response('Not found', { status: 404 });
  }
};
