module.exports = {
    // css 配置
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    require('autoprefixer'),
                    require('postcss-pxtorem')({
                        rootValue: 37.5,
                        propList: ['*']
                    })]
            }
        }
    }
} 