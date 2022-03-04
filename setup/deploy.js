require('dotenv').config();
const GhostAdminApi = require('@tryghost/admin-api');

const FormData = require('form-data');
const path = require('path');
const fs = require('fs');
//joining path of directory
const directoryPath = path.join(process.cwd(), 'liebling-custom.zip');
//passsing directoryPath and callback function

(async function main() {
  try {
    const api = new GhostAdminApi({
      url: process.env.GHOST_ADMIN_API_URL,
      key: process.env.GHOST_ADMIN_API_KEY,
      version: 'v4',
    });

    console.log(directoryPath);
    console.log(process.cwd() + '/liebling-custom.zip');

    if (fs.existsSync(directoryPath)) {
      console.log('EXISTS!!');
    }
    const formData = new FormData();
    formData.append('file', fs.createReadStream(directoryPath));

    // fs.readdir(process.cwd(), function (err, files) {
    //   //handling error
    //   if (err) {
    //     return console.log('Unable to scan directory: ' + err);
    //   }
    //   //listing all files using forEach
    //   files.forEach((file) => {
    //     // Do whatever you want to do with the file
    //     if (file.endsWith('.zip')) {
    //       console.warn(file);
    //     } else {
    //       console.log(file);
    //     }
    //   });
    // });

    // Deploy it to the configured site
    await api.themes.upload(formData);
    console.log('Theme successfully uploaded!');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
