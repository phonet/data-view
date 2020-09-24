<script>
import SearchForm from '@/components/SearchForm.vue';
import TitleLink from '@/components/TitleLink.vue';
import ChartsPie from '@/components/charts/ChartsPie.vue';
import TotalGrid from './components/TotalGrid';
import RateCircle from '@/components/charts/RateCircle';

// import ECharts from 'vue-echarts';
// import 'echarts/lib/chart/line';
// import 'echarts/lib/component/polar';

export default {
    name: 'Operation',
    components: {
        SearchForm,
        TitleLink,
        ChartsPie,
        TotalGrid,
        RateCircle,
    },
    data() {
        return {
            titleData: {
                number: '12345.26',
                unit: '万',
            },
            consumeList: [
                {
                    title: '药品收入',
                    number: 6129.26,
                    unit: '万',
                    currentRate: 0,
                    rate: 60,
                    color: {
                        '0%': '#00BFFF',
                        '100%': '#0092FF',
                    },
                },
                {
                    title: '药材收入',
                    number: 6129.26,
                    unit: '万',
                    currentRate: 0,
                    rate: 25,
                    color: {
                        '0%': '#FF94CB',
                        '100%': '#FF3584',
                    },
                },
                {
                    title: '其他收入',
                    number: 6129.26,
                    unit: '万',
                    currentRate: 0,
                    rate: 15,
                    color: {
                        '0%': '#FFF557',
                        '100%': '#FCDB00',
                    },
                },
            ],
        };
    },
};
</script>

<template>
    <div class="operation-page">
        <SearchForm />
        <TitleLink
            title="总收入 (元)"
            :number="titleData.number"
            :unit="titleData.unit"
            to="/operation-indicators"
        />
        <ChartsPie height="150px" />
        <TitleLink
            title="就诊总人次 (人次)"
            :number="`212`"
            :unit="titleData.unit"
            to="/operation-visits"
        />
        <TotalGrid />
        <RateCircle :list="consumeList" title="消耗情况" />
    </div>
</template>

<style lang="less" scoped></style>
