<script>
import ChartsGroupBar from '@/components/charts/ChartsGroupBar';

export default {
    name: 'TotalIncomTrend',
    components: {
        ChartsGroupBar,
    },
};
</script>

<template>
    <div class="trend-wrap">
        <ChartsGroupBar height="100%" />
    </div>
</template>

<style lang="less" scoped>
.trend-wrap {
    height: 210px;
}
</style>
