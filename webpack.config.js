module.exports = {
    debug: true,
    devtool: 'inline-source-map',
    entry: './index.js',
    output: {
        filename: 'bundle.js',
        sourceMapFilename: 'bundle.js.map'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel',
            query: {
                presets: ['es2015',"react" ]
            }
        }, {
            test: /\.scss$/,
            loader: 'style!css!sass!'
        }]
    }
};


