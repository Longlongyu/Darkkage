'use strict';

const webpack = require('webpack');
const path = require('path');

module.exports = {

    entry: './src/index.js',

    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: '/build/',
        filename: 'project.bundle.js'
    },
    mode: 'development',
    module: {
        rules: [
          {
            test: [ /\.vert$/, /\.frag$/ ],
            use: 'raw-loader'
          },
          {
            test: /\.js$/,
			exclude: /node_modules/,
            use: [
                {
                    loader: 'babel-loader',
                    options: {
                        presets : ['es2015'],
                        plugins : ['transform-runtime']
                    }
                }
            ]
          }
        ]
    },

    plugins: [
        new webpack.DefinePlugin({
            'CANVAS_RENDERER': JSON.stringify(true),
            'WEBGL_RENDERER': JSON.stringify(true)
        })
    ]

};
