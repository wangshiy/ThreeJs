const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry:{
    app:path.join(__dirname,'src','index.js')
  },
  output:{
    filename:'bundle.js',
    path:path.join(__dirname,'dist')
  },
  resolve: {
    alias: {
      '@three-examples': path.join(__dirname, './node_modules/three/examples/js')
    },
  },
  module: {
    rules: [
      {
        test: /three\/examples\/js/,
        use: 'imports-loader?THREE=three'
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]' //todo: how to hash the name ?
            }
          }
        ]
      }
    ]
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      hash: true,
      path: path.join(__dirname,'dist'),
      filename: 'index.html' //generate index.html in dist folder
    }),
    new HtmlWebpackPlugin({
      hash: true,
      path: path.join(__dirname,'dist'),
      template: 'public/templates/404.html',
      filename: '404.html' //generate 404.html in dist folder
    })
  ],
  devServer: {
    inline:true, //HMR enable
    hot:true, //HMR enable
    compress: true, //Gzip enable
    contentBase: path.join(__dirname, "dist"), //设置webpack-dev-server的根路径
    port: 7000,
    host: '127.0.0.1',
    historyApiFallback:{
      rewrites:[{
        from:/./,
        to:'/404.html'
      }]
    }, //404的重定向页面
    overlay: true, //将server端的报错显示在client端
    stats: "errors-only" //运行webpack-dev-server时只显示报错
  }
}
