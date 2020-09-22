<script>
import { DropdownMenu, DropdownItem } from 'vant';
import SearchForm from '@/components/SearchForm';
import TitleLink from '@/components/TitleLink';
import DrugIndexItem from './components/DrugIndexItem';
import ChartsHalfCircle from '@/components/charts/ChartsHalfCircle';
import ChartsWave from '@/components/charts/ChartsWave';
import ChartSplitPie from '@/components/charts/ChartSplitPie';

export default {
    name: 'Drug',
    components: {
        SearchForm,
        TitleLink,
        [DropdownMenu.name]: DropdownMenu,
        [DropdownItem.name]: DropdownItem,
        DrugIndexItem,
        ChartsHalfCircle,
        ChartsWave,
        ChartSplitPie,
    },
    data() {
        return {
            value1: 1,
            option1: [
                { text: '综合医院', value: 1 },
                { text: '基层医院', value: 2 },
            ],
        };
    },
};
</script>

<template>
    <div class="drug-page">
        <SearchForm />
        <div class="total-wrap">
            <div class="left">
                <TitleLink
                    title="药品总收入 (元)"
                    number="12345.26"
                    unit="万"
                    to="/drug-income-top"
                />
            </div>
            <div class="right">
                <van-dropdown-menu>
                    <van-dropdown-item v-model="value1" :options="option1" />
                </van-dropdown-menu>
            </div>
        </div>
        <div class="item-list">
            <DrugIndexItem
                :value="7290.24"
                :compare-last-month="6.21"
                unit="万"
            >
                <ChartsHalfCircle
                    :value="100"
                    :colors="['#00BFFF', '#0092FF']"
                    :title-font-size="12"
                    :title-text="'诊疗总收入'"
                    title-top="60%"
                />
            </DrugIndexItem>
            <DrugIndexItem
                :value="45"
                value-suffix="%"
                :compare-last-month="-1.49"
            >
                <ChartsHalfCircle
                    :value="45"
                    :colors="['#FF94CB', '#FF3584']"
                    :title-font-size="12"
                    :title-text="'药占比'"
                    title-top="60%"
                />
            </DrugIndexItem>
        </div>
        <div class="item-list">
            <DrugIndexItem
                :value="6232"
                :compare-last-month="-1.49"
                title="抗菌药收入占比"
                value-suffix="%"
            >
                <ChartsWave :value="25.55" />
            </DrugIndexItem>
            <DrugIndexItem
                :value="26"
                :compare-last-month="-2.21"
                title="抗生素使用人次"
                unit="人"
            >
                <ChartsWave :value="40.5" />
            </DrugIndexItem>
        </div>
        <div class="item-list">
            <DrugIndexItem
                :value="6232"
                :compare-last-month="-1.49"
                title="基本药物收入占比"
                value-suffix="%"
            >
                <ChartSplitPie :value="15" />
            </DrugIndexItem>
            <div style="flex:1"></div>
        </div>
    </div>
</template>

<style lang="less" scoped>
.drug-page {
    .total-wrap {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-right: 16px;
    }
    .left {
        flex: 1;
        padding-right: 16px;
    }
    .right {
        // flex: 1;
    }
    .item-list {
        margin: 0 16px 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
}
</style>
