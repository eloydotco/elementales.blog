require('dotenv').config();
const GhostAdminApi = require('@tryghost/admin-api');

(async function main() {
  try {
    const api = new GhostAdminApi({
      url: process.env.GHOST_ADMIN_API_URL,
      key: process.env.GHOST_ADMIN_API_KEY,
      version: 'v4',
    });

    const theme = await api.themes.upload({
      file: './liebling-custom.zip',
    });
    console.log('Theme successfully uploaded!');
    if (!theme.active && false) {
      await api.themes.activate(theme.name);
      console.log(`Theme ${theme.name} successfully activated!`);
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
