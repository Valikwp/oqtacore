const  mix  = require('laravel-mix');

mix.pug = require('laravel-mix-pug');

var ghpages = require('gh-pages');
ghpages.publish('build', function(err) {});

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */

mix.setPublicPath('build');
mix.options({
  processCssUrls: false
});


//mix.js('src/assets/js/app.js', 'build/assets/js');
mix.copyDirectory('src/assets/fonts', 'build/assets/fonts');
mix.copyDirectory('src/assets/images', 'build/assets/images');
mix.copyDirectory('src/assets/favicon', 'build/assets/favicon');
mix.sass('src/assets/styles/style.scss', 'build/assets/css');




mix.pug('src/pug/*.pug', '../../build/', {
  // seeds: 'build',
  locals: {hash: Date.now(), production: mix.inProduction()},
  pug: {
    pretty: mix.inProduction(),
  }
});

mix.browserSync({
  proxy: 'oqtacore.test',
  host: 'oqtacore.test',
  open: 'external',


});


