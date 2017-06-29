const path = require('path');
const webpack = require('webpack');
module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {
    main: [
      'jquery',
      'jquery.poptrox',
      'exif-js',
      'skel-framework',
      './util.js',
      './multiverse.js'
    ]
  },
  output: {
    path: path.resolve(__dirname, './assets/js'),
    filename: '[name].js'
  },
  plugins: [new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
    skel: 'skel-framework',
    EXIF: 'exif-js'
  })]
};
