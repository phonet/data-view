<script>
import { Circle } from 'vant';
export default {
    name: 'RateCircle',
    components: {
        [Circle.name]: Circle,
    },
    props: {
        list: {
            type: Array,
        },
        title: {
            type: String,
        },
    },
    data() {
        return {
            size: 74,
            layerColor: '#3A4988',
        };
    },
};
</script>

<template>
    <div class="rate-wrap">
        <div v-if="this.title" class="header-title">{{ this.title }}</div>
        <div class="circle-wrap">
            <div class="item" v-for="(item, index) of this.list" :key="index">
                <van-circle
                    v-model="item.currentRate"
                    :rate="item.rate"
                    :color="item.color"
                    :stroke-width="60"
                    :speed="100"
                    :layer-color="layerColor"
                    :text="item.currentRate + '%'"
                    :size="size"
                />
                <div class="title">{{ item.title }}</div>
                <div class="number">
                    {{ item.number }}<span class="unit">{{ item.unit }}</span>
                </div>
            </div>
            <!-- <div class="item">
                <van-circle
                    v-model="data1.currentRate"
                    :rate="data1.rate"
                    :color="data1.color"
                    :stroke-width="60"
                    :speed="100"
                    :layer-color="layerColor"
                    :text="data1.currentRate + '%'"
                    :size="size"
                />
                <div class="title">药品收入</div>
                <div class="number">6129.26<span class="unit">万</span></div>
            </div>
            <div class="item">
                <van-circle
                    v-model="data2.currentRate"
                    :rate="data2.rate"
                    :color="data2.color"
                    :stroke-width="60"
                    :speed="100"
                    :layer-color="layerColor"
                    :text="data2.currentRate + '%'"
                    :size="size"
                />
                <div class="title">耗材收入</div>
                <div class="number">6129.26<span class="unit">万</span></div>
            </div>
            <div class="item">
                <van-circle
                    v-model="data3.currentRate3"
                    :rate="data3.rate"
                    :color="data3.color"
                    :stroke-width="60"
                    :speed="100"
                    :layer-color="layerColor"
                    :text="data3.currentRate3 + '%'"
                    :size="size"
                />
                <div class="title">其他收入</div>
                <div class="number">6129.26<span class="unit">万</span></div>
            </div> -->
        </div>
    </div>
</template>

<style lang="less" scoped>
.rate-wrap {
    padding: 0 16px;
    margin-top: 10px;
}
.header-title {
    padding-bottom: 10px;
}
.circle-wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #1c2a5a;
    border-radius: 4px;
    padding: 16px;
    .item {
        text-align: center;
    }
}
.title {
    font-size: 12px;
    color: #b2b8e4;
    margin: 8px 0;
}
.number {
    font-size: 16px;
    color: #ffffff;
    .unit {
        color: #b2b8e4;
        font-size: 12px;
        margin-left: 2px;
    }
}
</style>
