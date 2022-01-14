module.exports = {
    plugins: {
        'autoprefixer': {
            overrideBrowserslist: [
                "> 1%",
                "last 3 versions",
                "not ie <= 8",
                "chrome >= 14",
                "safari >= 3",
                "ios >= 8",
                "android >= 4.0"
            ]
        },
        'postcss-pxtorem': {
            rootValue: 37.5,　　//结果为：设计稿元素尺寸/16，比如元素宽320px,最终页面会换算成 20rem
            propList: ['*'],
            selectorBlackList: ['.norem']　　// 过滤掉 .norem 开头的 class，不进行转换
        } 
    }
}