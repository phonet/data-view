<script>
import ChartsContainer from '@/components/charts/ChartsContainer';
import echarts from 'echarts';

export default {
    name: 'ChartsWave',
    components: { ChartsContainer },
    props: {
        height: {
            type: String,
            default: '68px',
        },
        value: {
            type: Number,
            default: 0,
        },
    },

    computed: {
        echartOption() {
            // const max = 500; //满刻度大小
            const scroe = this.value / 100;
            // var data = max * scroe;
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
                        type: 'liquidFill',
                        itemStyle: {
                            opacity: 0.8, //波浪的透明度
                            shadowBlur: 5, //波浪的阴影范围
                            shadowColor: '#4BF7A5', //阴影颜色
                        },
                        radius: '90%',
                        //水波
                        color: [
                            new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: '#1EBBDA', //"#FE8704"
                                },
                                {
                                    offset: 1,
                                    color: '#4BF7A5', //'#FFB931'
                                },
                            ]),
                        ],
                        data: [
                            {
                                value: scroe,
                            },
                        ],
                        // background: '#000',
                        center: ['50%', '50%'],
                        backgroundStyle: {
                            color: '#1C2A5A',
                        },
                        label: {
                            normal: {
                                formatter: '',
                                textStyle: {
                                    fontSize: 12,
                                },
                            },
                        },
                        outline: {
                            itemStyle: {
                                borderColor: 'transparent',
                                borderWidth: 0,
                            },
                            borderDistance: 0,
                        },
                    },
                    //外环线
                    {
                        color: '#3A4988', //['#1F2E5D', '#3A4988'],
                        type: 'pie',
                        center: ['50%', '50%'],
                        radius: ['94%', '96%'],
                        hoverAnimation: false,
                        data: [
                            {
                                name: '',
                                value: 0,
                                label: {
                                    show: false,
                                    position: 'center',
                                    color: '#fff',
                                    fontSize: 38,
                                    fontWeight: 'bold',
                                },
                            },
                        ],
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
