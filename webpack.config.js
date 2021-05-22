const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: 'development',
  entry: './client/src/index.js',
  output: {
    path: path.join(__dirname, 'client', 'dist'),
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.js$|jsx/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.(css|sass|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader'
            },
            {
              loader: 'sass-loader',
                options: {
                  sourceMap: true
                }
            }
          ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '/mystyles.css'
    }),
  ]
}
