//项目生产环境打包时候的配置
const prodDir = 'data-view';
const prodSetting =
    process.env.NODE_ENV === 'production'
        ? {
              publicPath: `/${prodDir}`,
              outputDir: `${prodDir}`,
          }
        : {};
module.exports = {
    // transpileDependencies: ['vue-echarts', 'resize-detector'],
    css: {
        loaderOptions: {
            less: {
                modifyVars: {
                    'font-size-sm': '13px',
                    'font-size-md': '15px',
                    'font-size-lg': '17px',
                    'goods-action-button-danger-color': '#7232dd',
                    'goods-action-button-warning-color': '#3eaf7c',
                    'background-color': '#0D1B49',

                    red: '#00BFFF',
                    'text-color': '#949FD5',
                    'dropdown-menu-height': '38px',
                    'dropdown-menu-background-color': 'transparent',
                    'dropdown-menu-box-shadow': 'none',
                    'dropdown-menu-title-active-text-color': '#00BFFF',
                    'dropdown-menu-option-active-color': '#00BFFF',
                    'cell-background-color': '#0D1B49',
                    'cell-vertical-padding': '8px',
                    'dropdown-menu-title-font-size': '14px',
                    'grid-item-content-background-color': '#1C2A5A',
                },
            },
        },
    },
    productionSourceMap: false,
    ...prodSetting,
};
