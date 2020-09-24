<script>
import ChartsContainer from '@/components/charts/ChartsContainer';

export default {
    name: 'ChartsHalfCircle',
    components: {
        ChartsContainer,
    },
    props: {
        height: {
            type: String,
            default: '54px',
        },
        value: {
            type: Number,
            default: 0,
        },
        colors: {
            type: Array,
            default: () => ['#00DEFF', '#0ADC96'],
        },
        titleColor: {
            type: String,
            default: '#B2B8E4',
        },
        titleFontSize: {
            type: Number,
            default: 14,
        },
        titleText: {
            type: String,
            default: '',
        },
        titleTop: {
            type: String,
            default: '',
        },
    },
    data() {
        const option = {
            // backgroundColor: '#08B0F9',
            title: {
                text: `${this.titleText || this.value + '%'}`,
                top: this.titleTop || '40%',
                x: 'center',
                textStyle: {
                    fontWeight: 'normal',
                    fontSize: this.titleFontSize,
                    color: this.titleColor,
                },
            },
            angleAxis: {
                show: false,
                max: (100 * 360) / 180, //-45度到225度，二者偏移值是270度除360度
                type: 'value',
                startAngle: 180, //极坐标初始角度
                splitLine: {
                    show: false,
                },
            },
            barMaxWidth: 8, //圆环宽度
            radiusAxis: {
                show: false,
                type: 'category',
            },
            //圆环位置和大小
            polar: {
                center: ['50%', '90%'],
                radius: '90',
            },
            series: [
                {
                    type: 'bar',
                    data: [
                        {
                            //上层圆环，显示数据
                            value: this.value || 0,
                            itemStyle: {
                                color: {
                                    //图形渐变颜色方法，四个数字分别代表，右，下，左，上，offset表示0%到100%
                                    type: 'linear',
                                    x: 0,
                                    y: 0,
                                    x2: 1, //从左到右 0-1
                                    y2: 0,
                                    colorStops: [
                                        {
                                            offset: 0,
                                            color: this.colors[0],
                                        },
                                        {
                                            offset: 1,
                                            color: this.colors[1],
                                        },
                                    ],
                                },
                            },
                        },
                    ],
                    barGap: '-100%', //柱间距离,上下两层圆环重合
                    coordinateSystem: 'polar',
                    roundCap: true, //顶端圆角
                    z: 2, //圆环层级，同zindex
                },
                {
                    //下层圆环，显示最大值
                    type: 'bar',
                    data: [
                        {
                            value: 100,
                            itemStyle: {
                                color: '#3A4988',
                            },
                        },
                    ],
                    barGap: '-100%',
                    coordinateSystem: 'polar',
                    roundCap: true,
                    z: 1,
                },
                //仪表盘
            ],
        };
        return {
            option: option,
            initOptions: {
                renderer: 'svg', //'canvs'
            },
        };
    },
};
</script>

<template>
    <ChartsContainer :option="option" :height="this.height" />
</template>
