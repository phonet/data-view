<script>
import { Grid, GridItem, Image } from 'vant';
import SearchForm from '@/components/SearchForm';
import ChartsHalfCircle from '@/components/charts/ChartsHalfCircle';

export default {
    name: 'Quality',
    components: {
        SearchForm,
        [Grid.name]: Grid,
        [GridItem.name]: GridItem,
        [Image.name]: Image,
        ChartsHalfCircle,
    },
};
</script>

<template>
    <div class="quality-page">
        <SearchForm
            :options="[
                { text: '市级医疗机构', value: '0' },
                { text: '县级医疗机构', value: '1' },
                { text: '乡镇级医疗机构', value: '2' },
                { text: '民营医疗机构', value: '3' },
            ]"
        />
        <div class="title-wrap">医疗服务质量</div>
        <van-grid :column-num="2" gutter="16">
            <van-grid-item>
                <van-image
                    width="27"
                    height="23"
                    :src="require('../../assets/icon/icon_rywu@2x.png')"
                />
                <div class="number">322.90<span class="unit">人</span></div>
                <div class="small-title">住院总收入</div>
            </van-grid-item>
            <van-grid-item>
                <van-image
                    width="27"
                    height="24"
                    :src="require('../../assets/icon/icon_pjzyts@2x.png')"
                />
                <div class="number">3290<span class="unit">天</span></div>
                <div class="small-title">住院均次费用</div>
            </van-grid-item>
            <van-grid-item>
                <ChartsHalfCircle
                    :value="40"
                    :colors="['#CE8BFF', '#B900FF']"
                    :titleFontSize="16"
                    titleColor="#fff"
                />
                <div class="title">坠床发生率</div>
            </van-grid-item>
            <van-grid-item>
                <ChartsHalfCircle
                    :value="56"
                    :colors="['#FFC18F', '#F7A900']"
                    :titleFontSize="16"
                    titleColor="#fff"
                />
                <div class="title">临床路径占比</div>
            </van-grid-item>
            <van-grid-item>
                <ChartsHalfCircle
                    :value="40"
                    :colors="['#FFF557', '#FCDB00']"
                    :titleFontSize="16"
                    titleColor="#fff"
                />
                <div class="title">甲级病案率</div>
            </van-grid-item>
            <van-grid-item>
                <ChartsHalfCircle
                    :value="97"
                    :titleFontSize="16"
                    :colors="['#00A6FF', '#0363FE']"
                    titleColor="#fff"
                />
                <div class="title">住院患者治愈率</div>
            </van-grid-item>
            <van-grid-item>
                <ChartsHalfCircle
                    :value="40"
                    :colors="['#1EBBDA', '#4BF7A5']"
                    :titleFontSize="16"
                    titleColor="#fff"
                />
                <div class="title">出院再召回占比</div>
            </van-grid-item>
            <van-grid-item>
                <ChartsHalfCircle
                    :value="10"
                    :titleFontSize="16"
                    :colors="['#FF94CB', '#FF3584']"
                    titleColor="#fff"
                />
                <div class="title">住院患者死亡率</div>
            </van-grid-item>
        </van-grid>
    </div>
    <!-- </div> -->
</template>

<style lang="less">
.quality-page {
    .title-wrap {
        padding: 10px 16px;
    }
    .title {
        font-size: 12px;
        margin-top: 4px;
    }
    .van-grid-item {
        overflow: hidden;
        &:first-child {
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
                    background-image: url('../../assets/blue1@2x.png');
                    background-repeat: no-repeat;
                    background-position: right top;
                    background-size: 36%;
                }
            }
        }
        &:nth-child(2) {
            .van-grid-item__content {
                position: relative;
                background: linear-gradient(162deg, #14cae0 23%, #02b0d0 64%);
                &::before {
                    content: ' ';
                    position: absolute;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    top: 0;
                    background-image: url('../../assets/green1@2x.png');
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
