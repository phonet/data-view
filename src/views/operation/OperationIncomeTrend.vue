<script>
import NavBar from '@/components/NavBar';
import SearchForm from '@/components/SearchForm';
import TitleBgColor from '@/components/TitleBgColor';
import TotalIncomTrend from './components/TotalIncomTrend';
import TotalFinancialTrend from './components/TotalFinancialTrend';

//收入趋势
export default {
    name: 'OperationIncomeTrend',
    components: {
        NavBar,
        SearchForm,
        TitleBgColor,
        TotalIncomTrend,
        TotalFinancialTrend
    },
};
</script>

<template>
    <div>
        <NavBar title="收入趋势" />
        <SearchForm />
        <TitleBgColor title="收入变化趋势图" />
        <TotalIncomTrend />
        <TitleBgColor
            title="账务科目变化趋势图"
            :filter="true"
            :initValue="1"
            :options="[
                { text: '挂号费1', value: 1 },
                { text: '挂号费2', value: 2 },
                { text: '挂号费3', value: 3 },
                { text: '挂号费4', value: 4 },
                { text: '挂号费5', value: 5 },
                { text: '挂号费6', value: 6 },
                { text: '挂号费7', value: 7 },
                { text: '挂号费2', value: 8 },
                { text: '挂号费1', value: 9 },
                { text: '挂号费2', value: 10 },
                { text: '挂号费3', value: 11 },
                { text: '挂号费1', value: 12 },
                { text: '挂号费2', value: 13 },
                { text: '挂号费3', value: 14 },
                { text: '挂号费5', value: 15 },
                { text: '挂号费6', value: 16 },
                { text: '挂号费7', value: 17 },
                { text: '挂号费2', value: 18 },
                { text: '挂号费1', value: 19 },
                { text: '挂号费1', value: 20 },
            ]"
        />
        <TotalFinancialTrend />
    </div>
</template>

<style lang="less" scoped></style>
