<script>
import ChartsContainer from '@/components/charts/ChartsContainer';

//排行类bar图形组件
export default {
    name: 'ChartsRanking',
    components: {
        ChartsContainer,
    },
    props: {
        height: {
            type: String,
            default: '',
        },
        //是否有轨道
        track: {
            type: Boolean,
            default: true,
        },
        //排名前三的柱形颜色
        topColor: {
            type: String,
            default: '#00B8FF',
        },
        //排名后面的柱形颜色
        lastColor: {
            type: String,
            default: '#40E9B1',
        },
        //名称后缀
        valueSuffix: {
            type: String,
            default: '',
        },
        names: {
            type: [Array, String],
            default: () => {
                return [];
            },
        },
        values: {
            type: [Array, String],
            default: () => {
                return [];
            },
        },
    },
    computed: {
        echartOptions() {
            let lineY = [];
            let lineT = [];
            for (let i = 0; i < this.names.length; i++) {
                const data = {
                    name: this.names[i],
                    value: this.values[i],
                    barGap: '-100%',
                    itemStyle: {
                        show: true,
                        color: i < 3 ? this.topColor : this.lastColor,
                        barBorderRadius: 5,
                    },
                };
                lineY.push(data);
                //有轨道
                if (this.track) {
                    const data1 = {
                        value: this.values[0],
                        realValue: this.values[i],
                        itemStyle: {
                            color: '#2B3B6D',
                            barBorderRadius: 10,
                        },
                    };
                    lineT.push(data1);
                }
            }

            let option = {
                tooltip: {
                    trigger: 'item',
                    formatter: (p) => {
                        if (p.seriesName === 'total') {
                            return '';
                        }
                        return `${p.name}<br/>${p.value}万`;
                    },
                },
                grid: {
                    borderWidth: 0,
                    top: '1%',
                    left: '0%',
                    right: '10%',
                    bottom: '0%',
                },
                yAxis: [
                    {
                        type: 'category',
                        show: false,
                        inverse: true,
                        axisLine: { show: false },
                        axisTick: { show: false },
                        axisLabel: {
                            show: true,
                            inside: false,
                            verticalAlign: 'bottom',
                            lineHeight: '40',
                            textStyle: {
                                color: '#b3ccf8',
                                fontSize: '14',
                                fontFamily: 'PingFangSC-Regular',
                            },
                            formatter: function(val) {
                                return `${val}ee`;
                            },
                        },
                        splitArea: {
                            show: false,
                        },
                        splitLine: {
                            show: false,
                        },
                        data: this.values, //top10CityData,
                    },
                ],
                xAxis: {
                    type: 'value',
                    show: false,
                    axisTick: { show: false },
                    axisLine: { show: false },
                    splitLine: { show: false },
                    axisLabel: { show: false },
                },
                series: [],
            };
            //带名称的公用配置
            const nameBar = {
                name: 'bar',
                type: 'bar',
                zlevel: 1,
                barWidth: '6px',
                data: lineY,
                barGap: '-100%',
                label: {
                    color: '#b3ccf8',
                    show: true,
                    position: [0, '-18px'],
                    formatter: function(a) {
                        let str = '';
                        str = a.name;
                        return str;
                    },
                    rich: {
                        color: {
                            color: '#949FD5',
                            fontSize: 12,
                        },
                    },
                },
            };
            //有轨道
            if (this.track) {
                option.series = [
                    nameBar,
                    {
                        name: 'total',
                        type: 'bar',
                        zlevel: -1,
                        barGap: '-100%',
                        barWidth: '6px',
                        data: lineT,
                        legendHoverLink: false,
                        label: {
                            show: true,
                            position: 'right',
                            formatter: (a) => {
                                let str = '';
                                if (a.dataIndex < 3) {
                                    str = `{top|${a.data.realValue}${this
                                        .valueSuffix || ''}}{unit|${this.valueSuffix?'':'万'}}`;
                                } else {
                                    str = `{last|${a.data.realValue}${this
                                        .valueSuffix || ''}}{unit|${this.valueSuffix?'':'万'}}`;
                                }
                                return str;
                            },
                            rich: {
                                top: {
                                    fontSize: 14,
                                    color: this.topColor,
                                },
                                last: {
                                    fontSize: 14,
                                    color: this.lastColor,
                                },
                                unit: {
                                    color: '#949FD5',
                                    fontSize: 11,
                                },
                            },
                        },
                    },
                ];
            } else {
                //无轨道
                option.series = [
                    nameBar,
                    {
                        name: 'bar',
                        type: 'bar',
                        zlevel: 2,
                        barWidth: '6px',
                        data: lineY,
                        label: {
                            show: true,
                            position: 'right',
                            textStyle: {
                                fontSize: 14,
                            },
                            formatter: function(a) {
                                let str = '';
                                str = `${a.value}{unit|万}`;
                                return str;
                            },
                            rich: {
                                unit: {
                                    color: '#949FD5',
                                    fontSize: 11,
                                },
                            },
                        },
                    },
                ];
            }
            return option;
        },
    },
};
</script>

<template>
    <ChartsContainer :option="echartOptions" :height="this.height" />
</template>
