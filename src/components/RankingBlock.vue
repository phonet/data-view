<script>
import { Image, DropdownMenu, DropdownItem } from 'vant';
import ChartsRanking from '@/components/charts/ChartsRanking';

//排行类数展示块组件
export default {
    name: 'RankingBlock',
    components: {
        [Image.name]: Image,
        [DropdownMenu.name]: DropdownMenu,
        [DropdownItem.name]: DropdownItem,
        ChartsRanking,
    },
    props: {
        barData: {
            type: Object,
            default: () => ({
                names: undefined,
                values: undefined,
                valueSuffix: '',
                //排名前三的柱形颜色
                topColor: '#00B8FF',
                //排名后面的柱形颜色
                lastColor: '#40E9B1',
            }),
        },
        title: {
            type: String,
            default: '标题',
        },
        topIcon: {
            type: Boolean,
            default: false,
        },
        filter: {
            type: Boolean,
            default: false,
        },
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
    <div class="ranking-wrap">
        <div class="ranking-header">
            <div class="title-wrap">
                {{ this.title }}
                <van-image
                    width="38"
                    height="17"
                    :src="require('../assets/icon/icon_top101.png')"
                    v-if="this.topIcon"
                />
            </div>
            <div v-if="filter">
                <van-dropdown-menu>
                    <van-dropdown-item v-model="value1" :options="option1" />
                </van-dropdown-menu>
            </div>
        </div>
        <div class="ranking-content">
            <ChartsRanking
                :names="this.barData.names"
                :values="this.barData.values"
                :top-color="this.barData.topColor"
                :last-color="this.barData.lastColor"
                :value-suffix="this.barData.valueSuffix"
            />
        </div>
    </div>
</template>

<style lang="less" scoped>
.ranking-wrap {
    padding: 0 16px;
    .ranking-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 40px;
        .title-wrap {
            display: flex;
            align-items: center;
            font-size: 15px;
            color: #b2b8e4;
            .van-image {
                margin-left: 5px;
            }
        }
    }
    .ranking-content {
        background: #1c2a5a;
        border-radius: 4px;
        padding: 10px;
    }
}
</style>
