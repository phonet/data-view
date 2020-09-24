<script>
import { Grid, GridItem, Image } from 'vant';
export default {
    name: 'TotalGrid',
    components: {
        [Grid.name]: Grid,
        [GridItem.name]: GridItem,
        [Image.name]: Image,
    },
    props: {},
};
</script>

<template>
    <div class="grid-wrap">
        <van-grid :column-num="3" gutter="10">
            <van-grid-item>
                <van-image
                    width="19"
                    height="16"
                    :src="require('../../../assets/icon/icon_mzrc.png')"
                />
                <div class="title">门诊人次</div>
                <div class="number">32290</div>
            </van-grid-item>
            <van-grid-item>
                <van-image
                    width="18"
                    height="18"
                    :src="require('../../../assets/icon/icon_mzzsr.png')"
                />
                <div class="title">门诊总收入</div>
                <div class="number">32290<span class="unit">万</span></div>
            </van-grid-item>
            <van-grid-item>
                <van-image
                    width="18"
                    height="18"
                    :src="require('../../../assets/icon/icon_mzjcfy.png')"
                />
                <div class="title">门诊均次费用</div>
                <div class="number">322.90<span class="unit">元</span></div>
            </van-grid-item>
            <van-grid-item>
                <van-image
                    width="22"
                    height="18"
                    :src="require('../../../assets/icon/icon_cyrc@2x.png')"
                />
                <div class="title">出院人次</div>
                <div class="number">322.90</div>
            </van-grid-item>
            <van-grid-item>
                <van-image
                    width="16"
                    height="16"
                    :src="require('../../../assets/icon/icon_zyzsr@2x.png')"
                />
                <div class="title">住院总收入</div>
                <div class="number">322.90<span class="unit">万</span></div>
            </van-grid-item>
            <van-grid-item>
                <van-image
                    width="18"
                    height="16"
                    :src="require('../../../assets/icon/icon_zyjcfy@2x.png')"
                />
                <div class="title">住院均次费用</div>
                <div class="number">3290<span class="unit">元</span></div>
            </van-grid-item>
        </van-grid>
    </div>
</template>

<style lang="less" scoped>
.grid-wrap {
    padding: 0 6px;
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
