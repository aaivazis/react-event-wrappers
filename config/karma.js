/**
 * Karma configuration.
 *   references:
 *     http://karma-runner.github.io/0.13/config/configuration-file.html
 */

// local imports
var project_paths = require('./project_paths')
var webpack_config = require(project_paths.webpack_config)


// annoying hack to be able to dynamically set keys on object
var preprocessors = {}
preprocessors[project_paths.tests_glob] = ['webpack', 'sourcemap']


module.exports = function(config) {
    config.set({
        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: project_paths.root_dir,

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: [
            'mocha',
            'chai',
        ],

        // list of files / patterns to load in the browser
        files: [
            project_paths.tests_glob,
        ],

        // // list of files to exclude
        // exclude: [
        // ],

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: preprocessors,

        // configure webpack using settings from development webpack config
        webpack: {
            module: {
                loaders: webpack_config.module.loaders
            },
            resolve: webpack_config.resolve,
            devtool: 'inline-source-map',
        },

        webpackMiddleware: {
            noInfo: true,
        },

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['mocha'],

        // web server port
        port: 9876,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        // logLevel: config.LOG_DISABLE,

        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: [
            // 'Chrome',
            'Firefox',
            // 'Safari',
        ],
    })
}


// end of file
