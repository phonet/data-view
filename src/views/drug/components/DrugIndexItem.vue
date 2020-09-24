<script>
// import ChartsHalfCircle from '@/components/charts/ChartsHalfCircle';

export default {
    name: 'DrugIndexItem',
    components: {
        // ChartsHalfCircle,
    },
    props: {
        value: {
            type: Number,
            default: 0,
        },
        valueSuffix: {
            type: String,
            default: '',
        },
        title: {
            type: String,
            default: '',
        },
        unit: {
            type: String,
            default: '',
        },
        compareLastMonth: {
            type: Number,
            default: 0,
        },
    },
};
</script>

<template>
    <div class="item-wrap">
        <slot> </slot>
        <!-- <ChartsHalfCircle
            :value="this.value"
            :colors="this.colors"
            :title-font-size="12"
            :title-text="this.titleText"
            title-top="60%"
        /> -->
        <div class="title" v-if="this.title">{{ this.title }}</div>
        <div class="num-wrap">
            <span class="value-num">{{ this.value }}</span>
            <span class="value-num" v-if="this.valueSuffix">{{
                this.valueSuffix
            }}</span>
            <span class="unit" v-if="this.unit">{{ this.unit }}</span>
            <i :class="`icon ${this.compareLastMonth > 0 ? 'up' : 'down'}`" />
        </div>
        <div>
            <span class="compare-text">较上月</span>
            <span
                :class="
                    `last-num ${this.compareLastMonth > 0 ? 'red' : 'blue'}`
                "
                >{{
                    `${this.compareLastMonth > 0 ? '＋' : '－'}` +
                        Math.abs(this.compareLastMonth) +
                        '%'
                }}</span
            >
        </div>
    </div>
</template>

<style lang="less" scoped>
.item-wrap {
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #1c2a5a;
    border-radius: 4px;
    margin-right: 10px;
    padding: 12px 0;
    &:last-child {
        margin-right: 0;
    }
    .title {
        font-size: 12px;
        margin-top: 5px;
    }
    .num-wrap {
        margin: 5px 0;
    }
    .value-num {
        color: #ffffff;
        font-size: 16px;
    }
    .unit {
        font-size: 11px;
        margin-left: 2px;
    }
    .icon {
        display: inline-block;
        width: 6px;
        height: 8px;
        margin-left: 8px;
        &.up {
            background: url('../../../assets/icon/icon_rise.png') no-repeat
                center;
            background-size: cover;
        }
        &.down {
            background: url('../../../assets/icon/icon_decline.png') no-repeat
                center;
            background-size: cover;
        }
    }
    .compare-text {
        font-size: 10px;
    }
    .last-num {
        font-size: 12px;
        margin-left: 5px;
        &.blue {
            color: #40e9b1;
        }
        &.red {
            color: #ff569c;
        }
    }
}
</style>
