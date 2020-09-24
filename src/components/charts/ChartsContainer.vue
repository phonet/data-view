<script>
import ECharts from 'vue-echarts';
import 'echarts/lib/chart/bar';
import 'echarts/lib/chart/line';
import 'echarts/lib/chart/pie';
import 'echarts/lib/chart/map';
import 'echarts/lib/chart/radar';
import 'echarts/lib/chart/scatter';
import 'echarts/lib/chart/effectScatter';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/polar';
import 'echarts/lib/component/geo';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/title';
import 'echarts/lib/component/visualMap';
import 'echarts/lib/component/dataset';
import 'echarts/map/js/world';
import 'zrender/lib/svg/svg';
import 'echarts-liquidfill';

//echart组件容器
export default {
    name: 'ChartsContainer',
    components: {
        'v-chart': ECharts,
    },
    props: {
        option: undefined,
        height: {
            type: String,
            default: '',
        },
        renderer: {
            type: String,
            default: 'canvs',
        },
    },
    data() {
        console.log('chart height==' + `${this.height || '默认值400px'}`);
        return {
            initOptions: {
                renderer: this.renderer, //'svg', //'canvs'
            },
        };
    },
    computed: {
        echartsOption() {
            const noData = {
                title: {
                    show: true,
                    textStyle: {
                        color: '#999',
                        fontSize: 15,
                    },
                    text: '暂无数据',
                    left: 'center',
                    top: 'center',
                },
                xAxis: { show: false },
                yAxis: { show: false },
            };
            console.log(this.option);
            if (
                !this.option ||
                !this.option.series ||
                !this.option.series.length
            ) {
                return noData;
            }
            if (this.option.series) {
                const noDataArr = this.option.series.filter(
                    (o) => !o.data || !o.data.length
                );
                if (noDataArr.length === this.option.series.length) {
                    return noData;
                }
            }
            return this.option;
        },
    },
};
</script>
<template>
    <div
        :style="{ height: this.height || '', width: '100%' }"
        :class="this.height ? 'has-height' : ''"
    >
        <v-chart
            v-if="this.option"
            :options="echartsOption"
            :init-options="initOptions"
        />
    </div>
</template>

<style lang="less" scoped>
.echarts {
    width: 100%;
    margin: 0;
    padding:0;
    box-sizing: border-box;
    font-size: 0;
}
.has-height {
    .echarts {
        height: 100%;
    }
}
</style>
