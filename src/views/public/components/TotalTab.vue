<script>
import { Tab, Tabs } from 'vant';
import { Grid, GridItem, Image, Circle } from 'vant';

export default {
    name: 'TotalTab',
    components: {
        [Tab.name]: Tab,
        [Tabs.name]: Tabs,
        [Grid.name]: Grid,
        [GridItem.name]: GridItem,
        [Image.name]: Image,
        [Circle.name]: Circle,
    },
    props: {},
    data() {
        return {
            active:0,
            layerColor: '#314585',
            current1: 0,
            current2: 0,
            current3: 0,
            current4: 0,
            current5: 0,
            current6: 0,
            current7: 0,
            current8: 0,
            current9: 0,
            current10: 0,
            current11: 0,
            size: 20,
            color: {
                '19%': '#1EBBDA',
                '97%': '#4BF7A5',
            },
        };
    },
};
</script>

<template>
    <div class="tab-wrap">
        <van-tabs
            v-model="active"
            swipeable
            background="#0d1b49"
            title-active-color="#00B7EB"
            title-inactive-color="#7B84C5"
            line-width="20"
            line-height="2"
        >
            <van-tab title="高血压">
                <van-grid :column-num="3" gutter="10">
                    <van-grid-item>
                        <van-image
                            width="19"
                            height="18"
                            :src="require('../../../assets/icon/icon_glrs@2x.png')"
                        />
                        <div class="title">管理人数</div>
                        <div class="number">
                            32290<span class="unit">人</span>
                        </div>
                    </van-grid-item>
                    <van-grid-item>
                        <van-image
                            width="19"
                            height="18"
                            :src="
                                require('../../../assets/icon/icon_gfglrs@2x.png')
                            "
                        />
                        <div class="title">规范管理人数</div>
                        <div class="number">
                            32290<span class="unit">人</span>
                        </div>
                    </van-grid-item>
                    <van-grid-item>
                        <van-circle
                            v-model="current1"
                            :rate="32"
                            :stroke-width="90"
                            :speed="100"
                            :layer-color="layerColor"
                            :size="size"
                            :color="color"
                        />
                        <div class="title">规范管理率</div>
                        <div class="number">
                            32%
                        </div>
                    </van-grid-item>
                    <van-grid-item>
                        <van-image
                            width="19"
                            height="18"
                            :src="
                                require('../../../assets/icon/icon_kzmyrs@2x.png')
                            "
                        />
                        <div class="title">控制满意人数</div>
                        <div class="number">
                            322.90<span class="unit">万</span>
                        </div>
                    </van-grid-item>
                    <van-grid-item>
                        <van-circle
                            v-model="current2"
                            :rate="97"
                            :stroke-width="90"
                            :speed="100"
                            :layer-color="layerColor"
                            :size="size"
                            :color="color"
                        />
                        <div class="title">控制满意率</div>
                        <div class="number">
                            97%
                        </div>
                    </van-grid-item>
                    <van-grid-item>
                        <van-circle
                            v-model="current3"
                            :rate="80"
                            :stroke-width="90"
                            :speed="100"
                            :layer-color="layerColor"
                            :size="size"
                            :color="color"
                        />
                        <div class="title">签约率</div>
                        <div class="number">
                            32%
                        </div>
                    </van-grid-item>
                </van-grid>
            </van-tab>
            <van-tab title="糖尿病">
                <van-grid :column-num="3" gutter="10">
                    <van-grid-item>
                        <van-image
                            width="19"
                            height="18"
                            :src="require('../../../assets/icon/icon_glrs@2x.png')"
                        />
                        <div class="title">管理人数</div>
                        <div class="number">
                            32290<span class="unit">人</span>
                        </div>
                    </van-grid-item>
                    <van-grid-item>
                        <van-image
                            width="19"
                            height="18"
                            :src="
                                require('../../../assets/icon/icon_gfglrs@2x.png')
                            "
                        />
                        <div class="title">规范管理人数</div>
                        <div class="number">
                            32290<span class="unit">人</span>
                        </div>
                    </van-grid-item>
                    <van-grid-item>
                        <van-circle
                            v-model="current4"
                            :rate="32"
                            :stroke-width="90"
                            :speed="100"
                            :layer-color="layerColor"
                            :size="size"
                            :color="color"
                        />
                        <div class="title">规范管理率</div>
                        <div class="number">
                            32%
                        </div>
                    </van-grid-item>
                    <van-grid-item>
                        <van-image
                            width="19"
                            height="18"
                            :src="
                                require('../../../assets/icon/icon_kzmyrs@2x.png')
                            "
                        />
                        <div class="title">控制满意人数</div>
                        <div class="number">
                            322.90<span class="unit">万</span>
                        </div>
                    </van-grid-item>
                    <van-grid-item>
                        <van-circle
                            v-model="current5"
                            :rate="97"
                            :stroke-width="90"
                            :speed="100"
                            :layer-color="layerColor"
                            :size="size"
                            :color="color"
                        />
                        <div class="title">控制满意率</div>
                        <div class="number">
                            97%
                        </div>
                    </van-grid-item>
                    <van-grid-item>
                        <van-circle
                            v-model="current6"
                            :rate="80"
                            :stroke-width="90"
                            :speed="100"
                            :layer-color="layerColor"
                            :size="size"
                            :color="color"
                        />
                        <div class="title">签约率</div>
                        <div class="number">
                            32%
                        </div>
                    </van-grid-item>
                </van-grid>
            </van-tab>
            <van-tab title="孕产妇">
                <van-grid :column-num="3" gutter="10">
                    <van-grid-item>
                        <van-image
                            width="19"
                            height="18"
                            :src="
                                require('../../../assets/icon/icon_ycf_glrs@2x.png')
                            "
                        />
                        <div class="title">管理人数</div>
                        <div class="number">
                            32290<span class="unit">人</span>
                        </div>
                    </van-grid-item>
                    <van-grid-item>
                        <van-image
                            width="18"
                            height="18"
                            :src="
                                require('../../../assets/icon/icon_qyrs@2x.png')
                            "
                        />
                        <div class="title">签约人数</div>
                        <div class="number">
                            32290<span class="unit">人</span>
                        </div>
                    </van-grid-item>
                    <van-grid-item>
                        <van-circle
                            v-model="current7"
                            :rate="81"
                            :stroke-width="90"
                            :speed="100"
                            :layer-color="layerColor"
                            :size="size"
                            :color="color"
                        />
                        <div class="title">签约率</div>
                        <div class="number">
                            81%
                        </div>
                    </van-grid-item>
                </van-grid>
            </van-tab>
            <van-tab title="0-6岁儿童">
                <van-grid :column-num="3" gutter="10">
                    <van-grid-item>
                        <van-image
                            width="19"
                            height="18"
                            :src="
                                require('../../../assets/icon/icon_et_glrs@2x.png')
                            "
                        />
                        <div class="title">管理人数</div>
                        <div class="number">
                            32290<span class="unit">人</span>
                        </div>
                    </van-grid-item>
                    <van-grid-item>
                        <van-image
                            width="18"
                            height="18"
                            :src="
                                require('../../../assets/icon/icon_qyrs@2x.png')
                            "
                        />
                        <div class="title">签约人数</div>
                        <div class="number">
                            32290<span class="unit">人</span>
                        </div>
                    </van-grid-item>
                    <van-grid-item>
                        <van-circle
                            v-model="current8"
                            :rate="81"
                            :stroke-width="90"
                            :speed="100"
                            :layer-color="layerColor"
                            :size="size"
                            :color="color"
                        />
                        <div class="title">签约率</div>
                        <div class="number">
                            81%
                        </div>
                    </van-grid-item>
                </van-grid>
            </van-tab>
            <van-tab title="65岁以上老年人">
                <van-grid :column-num="3" gutter="10">
                    <van-grid-item>
                        <van-image
                            width="19"
                            height="18"
                            :src="
                                require('../../../assets/icon/icon_lnr_glrs@2x.png')
                            "
                        />
                        <div class="title">管理人数</div>
                        <div class="number">
                            32290<span class="unit">人</span>
                        </div>
                    </van-grid-item>
                    <van-grid-item>
                        <van-image
                            width="18"
                            height="18"
                            :src="
                                require('../../../assets/icon/icon_qyrs@2x.png')
                            "
                        />
                        <div class="title">签约人数</div>
                        <div class="number">
                            32290<span class="unit">人</span>
                        </div>
                    </van-grid-item>
                    <van-grid-item>
                        <van-circle
                            v-model="current9"
                            :rate="81"
                            :stroke-width="90"
                            :speed="100"
                            :layer-color="layerColor"
                            :size="size"
                            :color="color"
                        />
                        <div class="title">签约率</div>
                        <div class="number">
                            81%
                        </div>
                    </van-grid-item>
                </van-grid>
            </van-tab>
            <van-tab title="重性精神疾病">
                <van-grid :column-num="3" gutter="10">
                    <van-grid-item>
                        <van-image
                            width="19"
                            height="18"
                            :src="
                                require('../../../assets/icon/icon_jsjb_glrs@2x.png')
                            "
                        />
                        <div class="title">管理人数</div>
                        <div class="number">
                            32290<span class="unit">人</span>
                        </div>
                    </van-grid-item>
                    <van-grid-item>
                        <van-image
                            width="18"
                            height="18"
                            :src="
                                require('../../../assets/icon/icon_qyrs@2x.png')
                            "
                        />
                        <div class="title">签约人数</div>
                        <div class="number">
                            32290<span class="unit">人</span>
                        </div>
                    </van-grid-item>
                    <van-grid-item>
                        <van-circle
                            v-model="current10"
                            :rate="81"
                            :stroke-width="90"
                            :speed="100"
                            :layer-color="layerColor"
                            :size="size"
                            :color="color"
                        />
                        <div class="title">签约率</div>
                        <div class="number">
                            81%
                        </div>
                    </van-grid-item>
                </van-grid>
            </van-tab>
            <van-tab title="结核病">
                 <van-grid :column-num="3" gutter="10">
                    <van-grid-item>
                        <van-image
                            width="19"
                            height="18"
                            :src="
                                require('../../../assets/icon/icon_jhb_glrs@2x.png')
                            "
                        />
                        <div class="title">管理人数</div>
                        <div class="number">
                            32290<span class="unit">人</span>
                        </div>
                    </van-grid-item>
                    <van-grid-item>
                        <van-image
                            width="18"
                            height="18"
                            :src="
                                require('../../../assets/icon/icon_qyrs@2x.png')
                            "
                        />
                        <div class="title">签约人数</div>
                        <div class="number">
                            32290<span class="unit">人</span>
                        </div>
                    </van-grid-item>
                    <van-grid-item>
                        <van-circle
                            v-model="current11"
                            :rate="81"
                            :stroke-width="90"
                            :speed="100"
                            :layer-color="layerColor"
                            :size="size"
                            :color="color"
                        />
                        <div class="title">签约率</div>
                        <div class="number">
                            81%
                        </div>
                    </van-grid-item>
                </van-grid>
            </van-tab>
        </van-tabs>
    </div>
</template>
<style lang="less">
.tab-wrap {
    .van-tabs__wrap--scrollable .van-tabs__nav--complete {
        padding-right: 4px;
        padding-left: 4px;
    }
    .van-tabs__line {
        bottom: 20px;
        border-radius: 1px;
        background-color: #00b7eb;
    }
    .van-tab__pane {
        min-height: 100px;
        padding: 10px 6px 0;
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
}
</style>
