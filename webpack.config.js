const webpack = require('webpack'); 
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    entry: { main: './src/index.js' },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[chunkhash].js'
    },
module: {
    rules: [{
        test: /\.js$/, 
        use: { loader: "babel-loader", }, 
        exclude: /node_modules/ 
    },
    {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
    }
    ]
},
plugins: [ 
    new MiniCssExtractPlugin({filename: 'style.[contenthash].css'}),
    new HtmlWebpackPlugin({
        inject: false,
        template: './src/index.html',
        filename: 'index.html'
      }),
    new WebpackMd5Hash(),
    new OptimizeCssAssetsPlugin({
        assetNameRegExp: /\.optimize\.css$/g,
        cssProcessor: require('cssnano'),
        cssProcessorPluginOptions: {
          preset: ['default', { discardComments: { removeAll: true } }],
        },
        canPrint: true
      })
]
};