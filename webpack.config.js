var webpack = require('webpack')
var path = require('path')
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
              name: '[path][name].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin()
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
