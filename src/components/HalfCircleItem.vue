<script>
import ChartsHalfCircle from '@/components/charts/ChartsHalfCircle';
export default {
    name: 'HalfCircleItem',
    components: {
        ChartsHalfCircle,
    },
    props: {
        rate: {
            type: Number,
            default: 0,
        },
        title: {
            type: String,
            default: '标题',
        },
        number: undefined,
        unit: {
            type: String,
            default: '万',
        },
        colors: {
            type: Array,
            default: () => ['#00DEFF', '#0ADC96'],
        },
        titleColor: {
            type: String,
            default: '#B2B8E4',
        },
        titleFontSize: {
            type: Number,
            default: 14,
        },
    },
};
</script>

<template>
    <div class="item">
        <ChartsHalfCircle
            :value="this.rate"
            :colors="this.colors"
            :titleColor="this.titleColor"
            :titleFontSize="this.titleFontSize"
        />
        <div class="title">{{ this.title }}</div>
        <div class="number" v-if="this.number">
            {{ this.number }}<span class="unit">{{ this.unit }}</span>
        </div>
    </div>
</template>

<style lang="less" scoped>
.item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    // width: 50%;
    flex: 1;
    min-height: 100px;
    .title {
        font-size: 12px;
        color: #b2b8e4;
        margin-top: 2px;
    }
    .number {
        font-size: 16px;
        color: #ffffff;
        margin-top: 4px;
        .unit {
            color: #b2b8e4;
            font-size: 12px;
            margin-left: 2px;
        }
    }
}
</style>
