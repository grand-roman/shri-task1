const path = require('path');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
const optimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'production',

    entry: './src/index.js',

    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'script.js',
        libraryTarget: "umd",
        umdNamedDefine: true,
        globalObject: "this"
    },

    plugins: [
        new CleanWebpackPlugin(),
        new miniCssExtractPlugin({
            filename: "style.css",
            chunkFilename: '[id].css',
            ignoreOrder: false
        }),
        new htmlWebpackPlugin({
            filename: "index.html",
            template: "./src/index.html",
            hash: true,
            inject: true,
        }),
        new htmlWebpackPlugin({
            filename: "product.html",
            template: "./src/product.html",
            hash: true,
            inject: true,
        }),
        new optimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorPluginOptions: {
                preset: ['default', { discardComments: { removeAll: true } }],
            },
            canPrint: true
        })
    ],

    module: {
        rules: [
            {
                test: /\.(png|jpg|gif|ico|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'images/[name].[ext]'
                        }
                    }
                ],
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: miniCssExtractPlugin.loader,
                    },
                    'css-loader',
                ],
            }
        ]
    }
};
