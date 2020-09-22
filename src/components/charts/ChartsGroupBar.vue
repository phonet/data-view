<script>
import ChartsContainer from '@/components/charts/ChartsContainer';
import echarts from 'echarts';

export default {
    name: 'ChartsGroupBar',
    components: {
        ChartsContainer,
    },
    props: {
        height: {
            type: String,
            default: '',
        },
    },
    data() {
        const option = {
            backgroundColor: '#0d1b49',
            //color: ['RGB(1,255,152)', 'RGB(244,191,70)', 'pink'],
            animation: false,
            grid: {
                top: '40',
                left: '10',
                bottom: '10',
                right: '10',
                containLabel: true,
                borderWidth: 1,
            },
            legend: {
                show: true,
                top: 15,
                right: 26,
                itemWidth: 8,
                itemHeight: 8,
                data: ['总收入', '门诊收入', '住院收入'],
                textStyle: {
                    color: '#949FD5',
                    fontSize: 11,
                },
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['8-1', '8-7', '8-14', '8-21', '8-28'],
                    axisLine: {
                        show: false,
                    },
                    axisTick: {
                        alignWithLabel: true,
                    },
                    nameTextStyle: {
                        color: '#fff',
                    },
                    // 		"axisLine": {
                    // 			"lineStyle": {
                    // 				"color": "RGB(47,68,114)"
                    // 			}
                    // 		},
                    axisLabel: {
                        textStyle: {
                            color: '#949FD5',
                        },
                        //	margin: 20
                    },
                },
            ],
            yAxis: [
                {
                    type: 'value',
                    name: '（万元）',
                    nameTextStyle: {
                        color: '#949FD5',
                        fontSize: 11,
                        //align: 'right',
                    },
                    axisLabel: {
                        textStyle: {
                            color: '#949FD5',
                        },
                        formatter: '{value}',
                    },
                    splitLine: {
                        lineStyle: {
                            //"type": "line",
                            color: '#1C2A5A',
                            interval: 1,
                        },
                    },
                    axisLine: {
                        show: false,
                    },
                },
            ],
            series: [
                {
                    name: '总收入',
                    type: 'bar',
                    //silent: true,
                    barWidth: '8',
                    //barGap: '-100%', // Make series be overlap
                    data: [1000,2000,3000,4000,5000],
                        
                    itemStyle: {
                        color: new echarts.graphic.LinearGradient(
                            0,
                            0,
                            1,
                            1,
                            [
                                {
                                    offset: 0,
                                    color: '#00BFFF',
                                },
                                {
                                    offset: 1,
                                    color: '#0092FF',
                                },
                            ],
                            false
                        ),
                        barBorderRadius: [5, 5, 0, 0],
                    },
                },
                {
                    name: '门诊收入',
                    type: 'bar',
                    //silent: true,
                    barWidth: '8',
                    //barGap: '-100%', // Make series be overlap
                    data: [4000,2200,3200,4020,5100],
                    itemStyle: {
                        color: new echarts.graphic.LinearGradient(
                            0,
                            0,
                            1,
                            1,
                            [
                                {
                                    offset: 0,
                                    color: '#4BF7A5',
                                },
                                {
                                    offset: 1,
                                    color: '#1EBBDA',
                                },
                            ],
                            false
                        ),
                        barBorderRadius: [5, 5, 0, 0],
                    },
                },
                {
                    name: '住院收入',
                    type: 'bar',
                    //silent: true,
                    barWidth: '8',
                    //barGap: '-100%', // Make series be overlap
                    data:[5040,2200,3020,4005,5023],
                    itemStyle: {
                        color: new echarts.graphic.LinearGradient(
                            0,
                            0,
                            1,
                            1,
                            [
                                {
                                    offset: 0,
                                    color: '#FFC18F',
                                },
                                {
                                    offset: 1,
                                    color: '#F7A900',
                                },
                            ],
                            false
                        ),
                        barBorderRadius: [5, 5, 0, 0],
                    },
                },
            ],
        };
        return {
            option: option,
        };
    },
};
</script>

<template>
    <ChartsContainer :option="option" :height="this.height" />
</template>

<style lang="less" scoped></style>
