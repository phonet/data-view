<script>
import { Grid, GridItem, Image, Circle } from 'vant';
export default {
    name: 'TotalGrid',
    components: {
        [Grid.name]: Grid,
        [GridItem.name]: GridItem,
        [Image.name]: Image,
        [Circle.name]: Circle,
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
    <div class="total-wrap">
        <van-grid :column-num="2" gutter="16">
            <van-grid-item>
                <van-image
                    width="24"
                    height="21"
                    :src="require('../../../assets/icon/icon_jkdars@2x.png')"
                />
                <div class="number">62290<span class="unit">人</span></div>
                <div class="small-title">健康档案人数</div>
            </van-grid-item>
            <van-grid-item>
                <van-circle
                    v-model="docRate.currentRate"
                    :rate="docRate.rate"
                    :color="docRate.color"
                    :stroke-width="90"
                    :speed="100"
                    :layer-color="'#4DC2FD'"
                    :size="27"
                />
                <div class="number">{{ docRate.rate }}%</div>
                <div class="small-title">建档率</div>
            </van-grid-item>
            <van-grid-item>
                <van-image
                    width="24"
                    height="23"
                    :src="require('../../../assets/icon/icon_jtysqyrs@2x.png')"
                />
                <div class="number">12792<span class="unit">人</span></div>
                <div class="small-title">家庭医生签约人数</div>
            </van-grid-item>
            <van-grid-item>
                <van-circle
                    v-model="signRate.currentRate"
                    :rate="signRate.rate"
                    :color="signRate.color"
                    :stroke-width="90"
                    :speed="100"
                    :layer-color="'#3BCBE3'"
                    :size="27"
                />
                <div class="number">{{ signRate.rate }}%</div>
                <div class="small-title">签约率</div>
            </van-grid-item>
        </van-grid>
    </div>
</template>

<style lang="less">
.total-wrap {
    .van-grid {
        margin: 16px 0;
    }
    .van-grid-item {
        overflow: hidden;
        &:nth-child(1),
        &:nth-child(2) {
            // background-color: #00b4ff;
            .van-grid-item__content {
                position: relative;
                background: linear-gradient(178deg, #00b4ff 0%, #008fff 97%);
                &::before {
                    content: ' ';
                    position: absolute;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    top: 0;
                    background-image: url('../../../assets/blue1@2x.png');
                    background-repeat: no-repeat;
                    background-position: right top;
                    background-size: 36%;
                }
            }
        }
        &:nth-child(3),
        &:nth-child(4) {
            .van-grid-item__content {
                position: relative;
                // background: linear-gradient(162deg, #14cae0 23%, #02b0d0 39%);
                background-image: linear-gradient(
                    162deg,
                    #14cae0 23%,
                    #02b0d0 64%
                );
                &::before {
                    content: ' ';
                    position: absolute;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    top: 0;
                    background-image: url('../../../assets/green1@2x.png');
                    background-repeat: no-repeat;
                    background-position: right top;
                    background-size: 36%;
                }
            }
        }
    }
    .number {
        position: relative;
        font-size: 18px;
        color: #ffffff;
        margin: 4px 0;
    }
    .small-title,
    .unit {
        position: relative;
        font-size: 12px;
        color: #fff;
    }
}
</style>
