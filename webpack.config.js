const path = require('path');
const webpack = require('webpack');

module.exports = {
  debug: true,
  devServer: {
    contentBase: 'src',
    historyApiFallback: true,
    host: 'localhost',
    port: 3000
  },
  entry: {
    'main'  : './src/main.ts'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.ts', '.js']
  },
  module: {
    preLoaders: [
        {
            test: /\.ts$/,
            loader: "tslint"
        }
    ],
    loaders: [
      {test: /.ts$/, loader: 'ts', query: {compilerOptions: {noEmit: false}}}
    ],
    noParse: [path.join(__dirname, 'node_modules', 'angular2', 'bundles')]
  },
  // more options in the optional tslint object
  tslint: {
    configuration: {
      rules: {
        quotemark: [true, "double"]
      }
    },

    // tslint errors are displayed by default as warnings
    // set emitErrors to true to display them as errors
    emitErrors: false,

    // tslint does not interrupt the compilation by default
    // if you want any file with tslint errors to fail
    // set failOnHint to true
    failOnHint: true,

    // These options are useful if you want to save output to files
    // for your continuous integration server
    fileOutput: {
      // The directory where each file's report is saved
      dir: "./tslint-report/",

      // The extension to use for each report's filename. Defaults to "txt"
      ext: "xml",

      // If true, all files are removed from the report directory at the beginning of run
      clean: true,

      // A string to include at the top of every report file.
      // Useful for some report formats.
      header: "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<checkstyle version=\"5.7\">",

      // A string to include at the bottom of every report file.
      // Useful for some report formats.
      footer: "</checkstyle>"
    }
  },
  devServer: {
    contentBase: 'src',
    historyApiFallback: true
  },
  devtool: 'source-map'
};
