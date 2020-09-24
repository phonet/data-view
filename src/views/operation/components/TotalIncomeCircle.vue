<script>
import HalfCircleItem from '@/components/HalfCircleItem';
export default {
    name: 'TotalIncomeCircle',
    components: {
        HalfCircleItem,
    },
    props: {
        list: {
            type: Array,
            default: () => [
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
        },
    },

    mounted() {
        // console.log(this.list);
    },
};
</script>

<template>
    <div class="circle-wrap" v-if="this.list && this.list.length">
        <HalfCircleItem
            v-for="(item, index) in this.list"
            :key="index"
            :rate="item.rate"
            :number="item.number"
            :title="item.title"
            :colors="item.colors"
        />
    </div>
</template>

<style lang="less" scoped>
.out-wrap {
    padding: 0 16px;
    margin-top: 10px;
}
.circle-wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #1c2a5a;
    border-radius: 4px;
    padding: 16px;
    margin: 0 16px 10px;
    .item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        // width: 50%;
        flex: 1;
        min-height: 100px;
    }
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
