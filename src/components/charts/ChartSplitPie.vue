<script>
import ChartsContainer from '@/components/charts/ChartsContainer';

//分割的圆形图
export default {
    name: 'ChartSplitPie',
    components: {
        ChartsContainer,
    },
    props: {
        height: {
            type: String,
            default: '68px',
        },
        //没有除以100的值
        value: {
            type: Number,
            default: 0,
        },
    },
    computed: {
        echartOption() {
            const option = {
                // backgroundColor: '#1C2A5A',
                grid: {
                    top: '0',
                    left: '0',
                    bottom: '0',
                    right: '0',
                },
                series: [
                    {
                        type: 'gauge',
                        radius: '88%',
                        clockwise: false,
                        startAngle: '90',
                        endAngle: '-269.9999',
                        splitNumber: 20,
                        detail: {
                            offsetCenter: [0, -20],
                            formatter: ' ',
                        },
                        pointer: {
                            show: false,
                        },
                        axisLine: {
                            show: true,
                            lineStyle: {
                                color: [
                                    // [0, '#FEDE00'],
                                    [
                                        (!this.value
                                            ? 0.1
                                            : this.value < 1
                                            ? 1
                                            : this.value >= 100
                                            ? 99.99
                                            : this.value) / 100,
                                        '#3A4988',
                                    ],
                                    [1, '#FCBA00'],
                                ],
                                width: 6,
                            },
                        },
                        axisTick: {
                            show: false,
                        },
                        splitLine: {
                            show: true,
                            length: 6,
                            lineStyle: {
                                color: '#1C2A5A',
                                width: 2,
                            },
                        },
                        axisLabel: {
                            show: false,
                        },
                    },
                    {
                        type: 'pie',
                        name: '内层细圆环',
                        radius: ['96%', '100%'],
                        hoverAnimation: false,
                        clockWise: false,
                        itemStyle: {
                            normal: {
                                color: '#3A4988',
                            },
                        },
                        label: {
                            show: false,
                        },
                        data: [100],
                    },
                ],
            };
            return option;
        },
    },
};
</script>
<template>
    <ChartsContainer :option="echartOption" :height="this.height" />
</template>
