<script>
// import { Grid, GridItem, Image, Circle } from 'vant';
import SearchForm from '@/components/SearchForm';
import TitleBgColor from '@/components/TitleBgColor';
import TotalGrid from './components/TotalGrid';
import TotalTab from './components/TotalTab';

export default {
    name: 'Public',
    components: {
        SearchForm,
        TitleBgColor,
        TotalGrid,
        TotalTab,
    },
    data() {
        return {
            docRate: this.formatRateOjb(50),
            signRate: this.formatRateOjb(28),
        };
    },

    methods: {
        formatRateOjb(rate, colors, currentRate) {
            const res = {
                currentRate: currentRate || 0,
                rate: rate || 0,
                color: {
                    '0%': (colors && colors[0] && colors[0]) || '#fff',
                    '100%': (colors && colors[1] && colors[1]) || '#A6FFF8',
                },
            };
            console.log(res);
            return res;
        },
    },
};
</script>

<template>
    <div class="public-page">
        <SearchForm :rightFilter="true"/>
        <TitleBgColor title="居民管理情况" />
        <TotalGrid />
        <TitleBgColor title="重点人群管理情况" />
        <TotalTab />
    </div>
</template>
