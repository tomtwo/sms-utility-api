const glob = require('glob');
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  // entry: globEntries('!(webpack.config).js'),
  entry: globEntries('handler-*.js'),
  target: 'node',
  externals: [nodeExternals()],

  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel-loader'],
      include: __dirname,
      exclude: /node_modules/
    }]
  },

  output: {
    libraryTarget: 'commonjs',
    path: path.join(__dirname, '.webpack'),
    filename: '[name].js'
  },

  plugins: [
    new CopyWebpackPlugin([{ from: '.env', to: '.' }])
  ]
};

function globEntries(globPath) {
  const files = glob.sync(globPath);
  const entries = {};

  for (let i = 0; i < files.length; i++) {
    const entry = files[i];
    entries[path.basename(entry, path.extname(entry))] = './' + entry;
  }

  return entries;
}
