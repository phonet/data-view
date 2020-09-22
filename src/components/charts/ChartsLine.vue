<script>
import ChartsContainer from '@/components/charts/ChartsContainer';
import echarts from 'echarts';
export default {
    name: 'ChartsLine',
    components: {
        ChartsContainer,
    },
    props: {
        height: {
            type: String,
            default: '',
        },
        //x轴数据
        xData: {
            type: Array,
            default: () => {
                return ['8-1', '8-7', '8-14', '8-21', '8-28'];
            },
        },
        //y轴数据(二维数组,兼容多个线图)
        yDatas: {
            type: Array,
            default: () => {
                return [[30, 46, 26, 42, 45]];
            },
        },
        legends: {
            type: Array,
            default: () => {
                return [];
            },
        },
        yNames: {
            type: Array,
            default: () => {
                return ['单位（万元）'];
            },
        },
        //线条颜色(二维数组,兼容多个线图)
        lineColors: {
            type: Array,
            default: () => {
                return [['#1EBBDA', '#4BF7A5']];
            },
        },
        //面积颜色(二维数组,兼容多个线图)
        areaColors: {
            type: Array,
            default: () => {
                return ['75,247,165'];
            },
        },
        //字体颜色
        fontColor: {
            type: String,
            default: '#949FD5',
        },
        splitLineColor: {
            type: String,
            default: '#1C2A5A',
        },
        //线条和面积图之间的间隔颜色
        gapColor: {
            type: String,
            default: '#0d1b49',
        },
    },
    computed: {
        echartOptions() {
            //y轴
            let yAxises = [];
            //线图
            let series = [];

            function _getMaxValue(arr) {
                const max = Math.max(...arr);
                // 这样处理是为了不让最大值刚好到坐标轴最顶部
                return Math.ceil(max / 9.5) * 10;
            }

            function _getMinValue(arr) {
                const min = Math.min(...arr);
                // 这样处理是为了不让最大值刚好到坐标轴最底部
                return Math.floor(min / 12) * 10;
            }
            this.yDatas.map((o, i) => {
                let yMinObj = {};
                if (i > 0) {
                    const tempMin = _getMinValue(o);
                    const tempMax = _getMaxValue(o);
                    yMinObj = {
                        min: tempMin,
                        max: tempMax,
                        splitNumber: 5,
                        interval: (tempMax - tempMin) / 5,
                    };
                }
                yAxises.push({
                    name: this.yNames[i],
                    nameTextStyle: {
                        color: this.fontColor,
                        fontSize: 12,
                    },
                    type: 'value',
                    splitLine: {
                        show: i === 0, // true,
                        lineStyle: {
                            color: this.splitLineColor,
                        },
                    },
                    axisLine: { show: false },
                    axisLabel: {
                        show: true,
                        margin: 20,
                        textStyle: {
                            color: this.fontColor,
                        },
                    },
                    axisTick: { show: false },
                    ...yMinObj,
                });
                const tempSer = [
                    {
                        name:
                            (this.legends.length > 0 && this.legends[i]) ||
                            '指标',
                        type: 'line',
                        smooth:
                            i === 0 && this.yDatas.length > 1 ? false : true,
                        symbol: 'rect',
                        symbolSize: 0,
                        smoothMonotone: 'x',
                        yAxisIndex: i,
                        lineStyle: {
                            color: new echarts.graphic.LinearGradient(
                                0,
                                0,
                                0,
                                1,
                                [
                                    {
                                        offset: 0,
                                        color: this.lineColors[i][0],
                                    },
                                    {
                                        offset: 1,
                                        color: this.lineColors[i][1],
                                    },
                                ],
                                false
                            ),
                        },
                        tooltip: {
                            show: true,
                        },
                        data: o, //this.yDatas[0],
                    },
                    {
                        z: 1,
                        name:
                            (this.legends.length > 0 && this.legends[i]) ||
                            '指标',
                        type: 'line',
                        smooth:
                            i === 0 && this.yDatas.length > 1 ? false : true,
                        symbol: 'rect',
                        symbolSize: 0,
                        smoothMonotone: 'x',
                        yAxisIndex: i,
                        lineStyle: {
                            color: this.gapColor,
                            width: 10,
                        },
                        tooltip: { show: false },
                        areaStyle: {
                            color: new echarts.graphic.LinearGradient(
                                0,
                                0,
                                0,
                                1,
                                [
                                    {
                                        offset: 0.5,
                                        color: `rgba(${this.areaColors[i]},0.3)`,
                                    },
                                    {
                                        offset: 1,
                                        color: `rgba(${this.areaColors[i]},0.01)`,
                                    },
                                ],
                                false
                            ),
                            opacity: 0.3,
                        },
                        data: o, //this.yDatas[0],
                    },
                ];
                series.push(...tempSer);
            });
            let legend = {};
            //两个以上线图,显示图例
            if (this.yDatas.length > 1 && this.legends.length > 1) {
                legend = {
                    color: [this.lineColors[0][0], this.lineColors[1][0]],
                    legend: {
                        name: this.legends,
                        right: 'center',
                        top: 10,
                        icon: 'rect',
                        itemWidth: 10,
                        itemHeight: 2,
                        textStyle: {
                            color: this.fontColor,
                            fontSize: 11,
                        },
                    },
                };
            }
            const option = {
                // legend: {
                //     name: ['环比'],
                //     right: 20,
                //     top: 20
                // },
                ...legend,
                grid: {
                    top: '40',
                    left: '10',
                    bottom: '10',
                    right: '16',
                    containLabel: true,
                    borderWidth: 1,
                },
                tooltip: { trigger: 'axis' },
                xAxis: [
                    {
                        type: 'category',
                        axisTick: { show: false },
                        axisLine: { show: false },
                        splitLine: { show: false },
                        boundaryGap: false,
                        axisLabel: { color: this.fontColor },
                        data: this.xData,
                    },
                ],

                yAxis: [...yAxises],
                series: [...series],
            };
            return option;
        },
    },
};
</script>

<template>
    <ChartsContainer :option="echartOptions" :height="this.height" />
</template>
