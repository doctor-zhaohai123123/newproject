module.exports = {
    
    css: {
      // extract: true,
      // modules: false,
      // localIdentName: '[name]_[local]_[hash:base64:5]',
      // sourceMap: false,
      // loaderOptions: {}
      loaderOptions: {
        sass: {
          data: `
            @import "@/assets/css/base.scss";
          `
        }
      }
    },
  
    // whether to use eslint-loader
    lintOnSave: true,
  
    devServer: {//开发服务器
    //   open:true
     
    //   open: process.platform === 'darwin',
      
    //   host: '0.0.0.0',
      port: 8003,
      open:true,
    //   https: false,
    //   hotOnly: false,
    //   proxy: null, // string | Object
      proxy: {
        '/api':{//axios访问 /api/xx ==  target + /api/xx  
        target:'http://localhost:3000',
        // target:'https://uncle9.top',
        changeOrigin:true,//创建虚拟服务器 
        // ws:true,//websocket代理
        },
        '/douban':{// axios 访问 /douban == target + '/douban'
        target:'https://douban.uieee.com',
        changeOrigin:true,
        pathRewrite:{//路径替换
          '^/douban':'',// axios 访问/douban/v2/xx == target +'' + /v2
        }
      }
    }
    //   before: app => {}
   
    }
  }