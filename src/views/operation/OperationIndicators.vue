<script>
import NavBar from '@/components/NavBar';
import SearchForm from '@/components/SearchForm';
import TitleLink from '@/components/TitleLink';
import RateCircle from '@/components/charts/RateCircle';
import TotalIncomeCircle from './components/TotalIncomeCircle';
import RankingBlock from '@/components/RankingBlock';
import { TEST_RANKING_DATA } from '@/components/charts/testData.js';

//运营指标页面(运营总收入更多)
export default {
    name: 'OperationIndicators',
    components: {
        NavBar,
        SearchForm,
        TitleLink,
        RateCircle,
        TotalIncomeCircle,
        RankingBlock,
    },
    data() {
        return {
            TEST_RANKING_DATA: TEST_RANKING_DATA,
            titleData: {
                number: '12345.26',
                unit: '万',
            },
            circleList: [
                {
                    rate: 40,
                    title: '门诊收入',
                    number: 4429.26,
                },
                {
                    rate: 60,
                    title: '住院收入',
                    number: 7129.26,
                    colors: ['#0367FE', '#00A6FF'],
                },
            ],
            consumeList: [
                {
                    title: '现金收入',
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
                    title: '医保收入',
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
                    rate: 50,
                    color: {
                        '0%': '#FFF557',
                        '100%': '#FCDB00',
                    },
                },
            ],
        };
    },
    beforeCreate() {
        //console.log('detail...');
    },
};
</script>

<template>
    <div>
        <NavBar title="医疗机构运营指标" />
        <SearchForm />
        <TitleLink
            title="总收入 (元)"
            :number="titleData.number"
            :unit="titleData.unit"
            to="/operation-income-trend"
        />
        <TotalIncomeCircle :list="circleList" />
        <RateCircle :list="consumeList" />
        <RankingBlock
            title="医院机构收入排行"
            :bar-track="false"
            :filter="true"
            :top-icon="true"
            :bar-data="{
                names: this.TEST_RANKING_DATA.names,
                values: this.TEST_RANKING_DATA.values,
            }"
        />
    </div>
</template>
