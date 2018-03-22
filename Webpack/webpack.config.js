const HtmlWebpackPlugin = require('html-webpack-plugin');

// 1 - Installer json5-loader pour charger la config.json5
// 2 - Installer https://webpack.js.org/plugins/banner-plugin/
// pour ajouter un copyright en début de fichier

module.exports = (env, {mode}) => {
  return {
    entry: {
      entryA: './src/js/index.js',
      entryB: './src/js/entry-b.js'
    },
    output: {
      filename: mode === 'development' ? '[name].js' : '[name].[chunkhash].js',
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
        chunks: ['vendor', 'entryA']
      }),
    ],
    module: {
      rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: {
          loader: 'babel-loader',
          options: {
            presets: [['env', {
              modules: false,
              targets: {
                browsers: ['last 3 Chrome versions', 'Firefox ESR'],
              }
            }]],
            plugins: ['syntax-dynamic-import'],
          },
        },
      }],
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          // commons: {
          //   name: "commons",
          //   chunks: "initial",
          //   minChunks: 2
          // },
          vendor: {
            test: /node_modules/,
            name: "vendor",
            chunks: "all"
          }
        }
      }
    }
  };
};
