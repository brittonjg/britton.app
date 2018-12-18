module.exports = {
    staticFileGlobs: [
        'build/static/css/**.css',
        'build/static/js/**.js'
    ],
    swFilePath: './build/service-worker.js',
    stripPrefix: 'build/',
    handleFetch: false,
    skipWaiting: true,
    runtimeCaching: [{
        urlPattern: /this\\.is\\.a\\.regex/,
        handler: 'networkFirst'
    }]
}