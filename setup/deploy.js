require('dotenv').config();
const GhostAdminApi = require('@tryghost/admin-api');

const path = require('path');
const fs = require('fs');
//joining path of directory
const directoryPath = path.join(process.cwd());
//passsing directoryPath and callback function

(async function main() {
  try {
    const api = new GhostAdminApi({
      url: process.env.GHOST_ADMIN_API_URL,
      key: process.env.GHOST_ADMIN_API_KEY,
      version: 'v4',
    });

    console.log(__dirname);
    console.log(process.cwd());

    fs.readdir(directoryPath, function (err, files) {
      //handling error
      if (err) {
        return console.log('Unable to scan directory: ' + err);
      }
      //listing all files using forEach
      files.forEach(function (file) {
        // Do whatever you want to do with the file
        console.log(file);
      });
    });

    // Deploy it to the configured site
    await api.themes.upload({ file: 'process.cwd()' + '/liebling-custom.zip' });
    console.log('Theme successfully uploaded!');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
