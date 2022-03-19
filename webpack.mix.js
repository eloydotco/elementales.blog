let mix = require('laravel-mix');

mix.options({
  terser: {
    extractComments: false,
  },
});

mix
  .js('src/js/helpers.js', 'js/')
  .js('src/js/app.js', 'js/')
  .js('src/js/home.js', 'js/')
  .js('src/js/post.js', 'js/')
  .js('src/js/page.js', 'js/')
  .extract()
  .setResourceRoot('/assets')
  .setPublicPath('./dist/assets')
  .sass('src/styles/app.scss', 'css/')
  .sass('src/styles/home.scss', 'css/')
  .sass('src/styles/listing.scss', 'css/')
  .sass('src/styles/post.scss', 'css/')
  .sass('src/styles/newsletter.scss', 'css/')
  .sass('src/styles/tags.scss', 'css/')
  .sass('src/styles/404.scss', 'css/')
  .options({
    processCssUrls: false,
  })
  .copy('src/images/*.*', './dist/assets/images/')
  .copy('src/styles/fonts/icomoon/*.*', './dist/assets/fonts/icomoon/')
  .copyDirectory(
    'src/styles/fonts/source-sans-pro/',
    './dist/assets/fonts/source-sans-pro/'
  )
  .copy('src/js/vendor/content-api.min.js', './dist/assets/js/vendor/')
  .copy('src/locales/*.*', './dist/locales/')
  .copy('src/partials/*.hbs', './dist/partials/')
  .copy('src/pages/*.hbs', './dist/')
  .copy('package.json', './dist/')
  .browserSync({
    proxy: 'localhost:2368',
    files: ['src/js/**/*.js', 'src/styles/**/*.scss', '**/*.hbs'],
  });
