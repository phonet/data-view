<script>
import ChartsContainer from '@/components/charts/ChartsContainer';
import { colorList } from '@/common/varConfig.js';
export default {
    name: 'ChartsPie',
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
        const data = [
            {
                value: 15,
                name: '市级医疗机构',
            },
            {
                value: 20,
                name: '镇级医疗机构',
            },
            {
                value: 10,
                name: '县级医疗机构',
            },
            {
                value: 50,
                name: '村级医疗机构',
            },
            {
                value: 30,
                name: '民营医疗机构',
            },
        ];
        const option = {
            grid: {
                left: 0, //-60
                right: 0,
                bottom: 0,
                top: 0,
                containLabel: true,
            },
            legend: {
                orient: 'vertical',
                itemWidth: 10,
                itemHeight: 10,
                padding: 0,
                right: '18%',
                top: 'middle',
                data: [...data],
                icon: 'rect',
                formatter: function(name) {
                    const item = data.find((o) => o.name === name);
                    return `${item.name} ${item.value}万`;
                },
                textStyle: {
                    color: '#96A2D7',
                },
                rich: {
                    a: {
                        color: '#96A2D7',
                    },
                },
            },
            tooltip: {
                formatter: function(param) {
                    return param.data.name + ':' + param.value + '%';
                },
            },

            series: [
                {
                    name: '占比',
                    type: 'pie',
                    radius: ['35%', '55%'],
                    left: 'left',
                    center: ['25%', '50%'],
                    itemStyle: {
                        color: function(params) {
                            return colorList[params.dataIndex];
                        },
                        borderWidth: 2,
                        borderColor: '#0d1b49',
                    },
                    label: {
                        formatter: function(params) {
                            if (params.value != 0)
                                return (
                                    params.value + '%' //params.data.name + ':' + params.value + '%'
                                );
                            else return '';
                        },
                        show: true,
                    },
                    labelLine: {
                        length: 10,
                        length2: 8,
                    },
                    data: data,
                },
            ],
        };
        return {
            option: option,
            initOptions: {
                renderer: 'canvs', //'canvs'
            },
        };
    },
};
</script>

<template>
    <ChartsContainer :option="option" :height="this.height" />
</template>
