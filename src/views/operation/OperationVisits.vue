<script>
import NavBar from '@/components/NavBar';
import SearchForm from '@/components/SearchForm';
import TitleBgColor from '@/components/TitleBgColor';
import ChartsLine from '@/components/charts/ChartsLine';

//就诊人次
export default {
    name: 'OperationVisits',
    components: {
        NavBar,
        SearchForm,
        TitleBgColor,
        ChartsLine,
    },
};
</script>

<template>
    <div>
        <NavBar title="医疗机构就诊人次" />
        <SearchForm />
        <TitleBgColor title="门诊就诊情况" />
        <ChartsLine
            height="250px"
            :y-datas="[
                [3000, 4600, 2500, 4000, 4500],
                [100, 105, 90, 102, 110],
            ]"
            :y-names="['(人次)', '费用(元)']"
            :legends="['门诊人次', '次均费用']"
            :line-colors="[
                ['#00BFFF', '#0092FF'],
                ['#FF94CB', '#FF3584'],
            ]"
            :area-colors="['0,191,255', '255,53,132']"
        />
        <TitleBgColor title="住院就诊情况" />
        <ChartsLine
            height="250px"
            :y-datas="[
                [3000, 4600, 2500, 4000, 4500],
                [100, 105, 90, 102, 110],
            ]"
            :y-names="['(人次)', '费用(元)']"
            :legends="['出院人次', '次均费用']"
            :line-colors="[
                ['#0ADC96', '#00DEFF'],
                ['#FF94CB', '#FF3584'],
            ]"
            :area-colors="['75,247,165', '255,53,132']"
        />
    </div>
</template>
<style lang="less" scoped></style>
