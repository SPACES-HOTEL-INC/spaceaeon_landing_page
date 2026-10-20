/**
 * Spaceaeon — Centralized external routing
 *
 * All cross-domain destinations point to separate Vercel frontends.
 * Replace the placeholder URLs below with your real deployment URLs.
 */

const VERCEL = 'https://vercel.app';

export const routes = {
  client: {
    explore: `${VERCEL}`,
    login: `${VERCEL}`,
  },
  host: {
    dashboard: `${VERCEL}`,
    registration: `${VERCEL}`,
  },
};

export default routes;
