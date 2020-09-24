<script>
import { Icon } from 'vant';
import { Cell } from 'vant';

export default {
    name: 'TitleLink',
    components: {
        [Icon.name]: Icon,
        [Cell.name]: Cell,
    },
    props: {
        title: {
            type: String,
            default: '标题',
        },
        number: {
            type: String,
            default: '--',
        },
        unit: {
            type: String,
            default: '单位',
        },
        to: {
            type: String,
            default: '',
        },
    },
};
</script>

<template>
    <van-cell is-link :to="to">
        <!-- 使用 title 插槽来自定义标题 -->
        <template #title>
            <span class="title">{{ title }}：</span>
            <span class="number">{{ number }}</span>
            <span class="unit">{{ unit }}</span>
        </template>
        <template #right-icon>
            <van-icon name="arrow" />
        </template>
    </van-cell>

    <!-- <div class="titleWrap">
        <div>
            <span class="title">{{ title }}：</span>
            <span class="number">{{ number }}</span>
            <span class="unit">{{ unit }}</span>
        </div>
        <van-icon name="arrow" />
    </div> -->
</template>

<style lang="less" scoped>
.titleWrap {
    display: flex;
    color: #939fdc;
    padding: 10px 16px;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
}
.title {
    font-size: 15px;
}
.number {
    font-size: 18px;
    color: #ffffff;
    margin-right: 4px;
}
.van-cell {
    align-items: center;
    padding: 12px 16px;
}
.van-cell::after {
    content: none;
}
.van-cell--clickable:active {
    background-color: rgba(28, 42, 90, 0.5);
}
</style>
