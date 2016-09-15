var path = require('path')

module.exports = {
    entry: "./lib/web/main.js",
    output: {
        path: __dirname,
        filename: "./lib/web/bundle.js"
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
            { test: /\.css$/, loader: "style-loader!css-loader" }
        ]
    }
};