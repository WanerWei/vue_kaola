const path = require('path')

function resolve (pathStr) {
    return path.resolve(__dirname, pathStr)
}

module.exports = {
    chainWebpack: (config) => {
        config.resolve.alias
            .set('components', resolve('./src/components'))   
            .set('styles', resolve('./src/assets/styles'))   
            .set('views', resolve('./src/views'))   
            .set('utils', resolve('./src/utils'))   
    },

    // baseUrl: '/dist/',

    devServer: {
        proxy: {
            '/home' : {
                target: 'https://m-element.kaola.com',
                changeOrigin: true,
                headers: {
                    referer: 'https://m-element.kaola.com',
                    host: 'm-element.kaola.com'
                },
                hostRewrite: 'm-element.kaola.com'
            },
            '/newGoods' : {
                target: 'https://m-element.kaola.com',
                changeOrigin: true,
                headers: {
                    referer: 'https://m-element.kaola.com',
                    host: 'm-element.kaola.com'
                },
                hostRewrite: 'm-element.kaola.com'
            },
            '/h5' : {
                target: 'https://m.kaola.com',
                changeOrigin: true,
                headers: {
                    referer: 'https://m.kaola.com',
                    host: 'm.kaola.com'
                },
                hostRewrite: 'm.kaola.com'
            },
            '/v250' : {
                target: 'https://m.kaola.com',
                changeOrigin: true,
                headers: {
                    referer: 'https://m.kaola.com',
                    host: 'm.kaola.com'
                },
                hostRewrite: 'm.kaola.com'
            },
            '/pages' : {
                target: 'https://pages.kaola.com',
                changeOrigin: true,
                headers: {
                    referer: 'https://pages.kaola.com',
                    host: 'pages.kaola.com'
                },
                hostRewrite: 'pages.kaola.com'
            },
            '/product' : {
                target: 'https://m-goods.kaola.com',
                changeOrigin: true,
                headers: {
                    referer: 'https://m-goods.kaola.com',
                    host: 'm-goods.kaola.com'
                },
                hostRewrite: 'm-goods.kaola.com'
            },
            '/addressControl' : {
                target: 'https://m.kaola.com',
                changeOrigin: true,
                headers: {
                    referer: 'https://m.kaola.com',
                    host: 'm.kaola.com'
                },
                hostRewrite: 'm.kaola.com'
            },
            '/geography' : {
                target: 'https://m.kaola.com',
                changeOrigin: true,
                headers: {
                    referer: 'https://m.kaola.com',
                    host: 'm.kaola.com'
                },
                hostRewrite: 'm.kaola.com'
            },
            '/api': {
                target: 'http://localhost:3000',
                changeOrigin: true,
            }
        },
    }
}