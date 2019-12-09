const path = require('path');
const webpack = require('webpack');
// 生成创建Html入口文件
const HtmlWebpackPlugin = require('html-webpack-plugin');
//将css提取到单独的文件中
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// 清除build/dist文件夹文件
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const {   NODE_BRANCH } = require('./prod.env');

module.exports = {
    entry: path.resolve(__dirname, 'src/index'),
    output: {
        filename: `js/[name].${NODE_BRANCH}.js`,
        publicPath: "/",
        // chunkFilename: 'bundle.[chunkhash:8].min.js',
        path: path.resolve(__dirname, 'build')
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.css|scss$/,
                use:[
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    // {
                    //     loader: "style-loader"
                    // },
                    { loader: 'css-loader', options: { url: false, sourceMap: true } },
                    {
                        loader: 'postcss-loader',
                        options: {}
                    },
                    {
                        loader: 'sass-loader',
                        options: { sourceMap: true }
                    }
                ],
                exclude: /node_modules/
            },
            {
                test:/\.css|less$/,
                exclude:/src/,
                use:[
                    {
                        loader: "style-loader"},
                    {
                        loader: "css-loader",
                        options:{
                            importLoaders:1
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif|svg(\?v=\d+\.\d+\.\d+)?|woff|eot|ttf)$/,
                use: ['url-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.js|jsx$/,
                use: 'babel-loader',
                exclude: /(node_modules|bower_components)/,
            },
            {
                test: /\.json$/,
                use: ['json-loader'],
                // exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: `css/[name].${NODE_BRANCH}.min.css`
        }),
    ]
};