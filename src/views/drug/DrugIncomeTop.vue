<script>
import NavBar from '@/components/NavBar';
import SearchForm from '@/components/SearchForm';
import RankingBlock from '@/components/RankingBlock';
import { TEST_RANKING_DATA } from '@/components/charts/testData.js';

export default {
    name: 'DrugIncomeTop',
    components: {
        NavBar,
        SearchForm,
        RankingBlock,
    },
    data() {
        return {
            TEST_RANKING_DATA: TEST_RANKING_DATA,
        };
    },
};
</script>

<template>
    <div>
        <NavBar title="医疗机构药品使用情况" />
        <SearchForm :filter-hospital-type="false" />
        <RankingBlock
            title="医疗机构药品收入占比排行"
            :filter="true"
            :bar-data="{
                names: this.TEST_RANKING_DATA.names,
                values: this.TEST_RANKING_DATA.values,
                lastColor: '#00B8FF',
            }"
        />
        <RankingBlock
            title="抗菌药收入占比排行"
            :filter="false"
            :top-icon="true"
            :bar-data="{
                names: this.TEST_RANKING_DATA.names,
                values: this.TEST_RANKING_DATA.values,
                topColor:'#F7B500',
                lastColor: '#40E9B1',
                valueSuffix: '%',
            }"
        />
    </div>
</template>

<style lang="less" scoped></style>>
