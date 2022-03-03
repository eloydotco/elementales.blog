let mix = require('laravel-mix');

mix.options({
  terser: {
    extractComments: false,
  },
});

mix.webpackConfig({
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: Config.babel(),
          },
        ],
      },
    ],
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
  .setPublicPath('./assets')
  .sass('src/sass/app.scss', 'css/')
  .sass('src/sass/home.scss', 'css/')
  .sass('src/sass/listing.scss', 'css/')
  .sass('src/sass/post.scss', 'css/')
  .sass('src/sass/newsletter.scss', 'css/')
  .sass('src/sass/tags.scss', 'css/')
  .sass('src/sass/404.scss', 'css/')
  .options({
    processCssUrls: false,
  })
  .copy('src/sass/fonts/icomoon/*.*', './assets/fonts/icomoon/')
  .copyDirectory(
    'src/sass/fonts/source-sans-pro/',
    './assets/fonts/source-sans-pro/'
  )
  .copy('src/js/vendor/content-api.min.js', './assets/js/vendor/')
  .browserSync({
    proxy: 'localhost:2368',
    files: ['src/js/**/*.js', 'src/sass/**/*.scss', '**/*.hbs'],
  });
