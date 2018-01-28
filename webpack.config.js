const path = require('path');
const webpack = require('webpack');
module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {
    main: [
      'jquery/src/jquery',
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
  plugins: [
    new webpack.ProvidePlugin({
      'skel': 'skel-framework'
    })
  ]
};
