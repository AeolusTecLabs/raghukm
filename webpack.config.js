const dev_env = process.env.NODE_ENV || 'development';

if(dev_env === 'development'){
    console.log('development Mode');
    module.exports=require('./webpack/webpack.dev');
}else{
    console.log('Production Mode');
    module.exports = require('./webpack/webpack.prod');
}