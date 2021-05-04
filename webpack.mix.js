const mix = require('laravel-mix');
const webpack = require('webpack');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/client/client.js', 'public/js')
    .js('resources/js/dashboard/dashboard.js', 'public/js')
    .postCss('resources/css/app.css', 'public/css', [])
    .vue({ version: 3 })
    .webpackConfig({
      plugins: [
        new webpack.DefinePlugin({
          __VUE_OPTIONS_API__: true,
          __VUE_PROD_DEVTOOLS__: false,
        }),
      ],
      resolve: {
        extensions: ['.js', '.vue'],
        alias: {
          '@': __dirname + '/resources',
        },
      },
    });
