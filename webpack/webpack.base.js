const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin =require('clean-webpack-plugin');
const path = require("path");

module.exports = {

    entry: './src/index.js',

    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: "bundle.js"
    },
    
   
    module: {
        rules: [{
            test: /\.(js|jsx|ts|tsx)?$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',

            }
        },
        {
            test: /\.(png|jpg|gif)$/i,
            use: [
              {
                loader: 'url-loader',
                options: {
                  limit: 8192
                }
              }
            ]
        },
        {
            test: /\.(svg)$/,
            exclude: /fonts/, /* dont want svg fonts from fonts folder to be included */
            use: [
              {
                loader: 'svg-inline-loader',
                options: {
                  noquotes: true,
                },
              },
            ],
          },
        {
            test: /\.(graphql|gql)$/,
            exclude: /node_modules/,
            use:[
                {
                    loader:'gl-loader',
                    options:{
                        url:'Graphql server URL'
                    }
                }
            ]
        },
        {
            test: /\.scss$/,
            use: [
              "style-loader",
              MiniCssExtractPlugin.loader,
              "css-loader",
              "sass-loader"
            ]
          },
        {
            test: /\.less$/,
            use: ['style-loader', {
                  loader: 'css-loader',
                  options: {
                  modules: true
              }
            }, 'postcss-loader', 'less-loader']
        },
        {
            test:/\.css$/,
            use:[MiniCssExtractPlugin.loader,"css-loader"]  //style-loader
        },
        {
            test: /\.(sa|sc|)$/,
            use: [
                { loader: "style-loader" },
                { loader: "sass-loader"}
            ]
        },
        {
            test: /\.(eot|svg|ttf|otf|woff|woff2)$/,
            exclude: [
              path.resolve(__dirname, 'src/images'),
            ],
            use: [{
              loader: 'url-loader',
              options: {
                limit: 1000, // Convert images < 1kb to base64 strings
                name: 'fonts/[hash]-[name].[ext]',
              },
            }],
          },
          {
            test: /\.(png|jp(e*)g|svg|gif)$/,
            exclude: [path.resolve(__dirname, 'src/images/svg-sprite'), path.resolve(__dirname, 'src/fonts')],
            use: [{
              loader: 'url-loader',
              options: {
                limit: 1000, // Convert images < 1kb to base64 strings
                name: 'images/[hash].[ext]',
              },
            }],
          },

        ]
    },
    
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack 4 Starter',
            template: './public/index.html',
            filename: 'index.html',
            inject: true,
            minify: {
                removeComments: true,
                collapseWhitespace: true
            }
        }),
        new CleanWebpackPlugin(),

        new MiniCssExtractPlugin({
            filename: './src/styleSheet/style.css'
        }),
        new CopyWebpackPlugin([{
            from:'./src/assets/images',
            to:'images'
        }]),
        
    ]
}