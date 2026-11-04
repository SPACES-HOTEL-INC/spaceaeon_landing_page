/**
 * Spaceaeon — Centralized external routing
 */

const CLIENT_PLATFORM_URL = 'https://app.spaceaeon.online';
const HM_OWNER_PLATFORM_URL = 'https://hm.spaceaeon.online';

export const routes = {
  client: {
    explore: CLIENT_PLATFORM_URL,
    login: CLIENT_PLATFORM_URL,
  },
  host: {
    dashboard: HM_OWNER_PLATFORM_URL,
    registration: HM_OWNER_PLATFORM_URL,
  },
};

export default routes;
