var path = require("path");

var root = "./app/assets";

module.exports = {
    entry: {
        bundle: [
            root + "/scripts/app.jsx"
        ]
    },
    output: {
        path: path.resolve(__dirname, 'app/public'),
        publicPath: "/assets/",
        filename: "[name].js",
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "sass-loader" // compiles Sass to CSS
            }]
        }, {
            test: /\.jsx$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['es2016', 'react', 'stage-2']
                }
            }
        }]
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000,
        historyApiFallback: true,
    }

};