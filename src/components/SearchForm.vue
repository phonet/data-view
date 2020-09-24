<script>
import { DropdownMenu, DropdownItem } from 'vant';
export default {
    name: 'SearchForm',
    components: {
        [DropdownMenu.name]: DropdownMenu,
        [DropdownItem.name]: DropdownItem,
    },
    props: {
        filterHospitalType: {
            type: Boolean,
            default: true,
        },
        value: {
            type: String,
            default: '0',
        },
        options: {
            type: Array,
            default: () => {
                return [
                    { text: '全部', value: '0' },
                    { text: '门诊', value: '1' },
                    { text: '住院', value: '2' },
                ];
            },
        },
        rightFilter: {
            type: Boolean,
            default: false,
        },
        dateVlue: {
            type: String,
            default: '4',
        },
        dateOptions: {
            type: Array,
            default: () => {
                return [
                    { text: '2016年', value: '0' },
                    { text: '2017年', value: '1' },
                    { text: '2018年', value: '2' },
                    { text: '2019年', value: '3' },
                    { text: '2020年', value: '4' },
                    { text: '2021年', value: '5' },
                    { text: '2022年', value: '6' },
                    { text: '2023年', value: '7' },
                    { text: '2024年', value: '8' },
                ];
            },
        },
    },

    data() {
        return {
            value1: 0,
            value2: this.value,
            option1: [
                { text: '玉溪市', value: 0 },
                { text: '昆明市', value: 1 },
                { text: '丽江市', value: 2 },
            ],
            option2: this.options,
            value3: this.dateVlue,
            option3: this.dateOptions,
        };
    },
    methods: {
        changeSelect2(value) {
            console.log(value);
            console.log(this.value2);
        },
    },
    computed: {
        // options2Obj() {
        //     const res = {
        //         value: this.option.value || 0,
        //         options: this.option.options || [
        //             { text: '全部', value: 0 },
        //             { text: '门诊', value: 1 },
        //             { text: '住院', value: 2 },
        //         ],
        //     };
        //     console.log('----');
        //     console.log(res);
        //     return res;
        // },
    },
};
</script>

<template>
    <div class="search-wrap">
        <van-dropdown-menu>
            <van-dropdown-item v-model="value1" :options="option1" />
            <van-dropdown-item
                v-model="value2"
                :options="options"
                v-if="this.filterHospitalType"
                @change="changeSelect2"
            />
            <van-dropdown-item v-if="this.rightFilter" v-model="value3" :options="option3" />
        </van-dropdown-menu>
        <div class="date" v-if="!this.rightFilter">近1个月</div>
    </div>
</template>

<style lang="less">
//自定义的样式
.search-wrap {
    display: flex;
    height: 38px;
    border-bottom: 1px solid #23336a;
    box-sizing: border-box;
    align-items: center;
    padding: 0 16px;
    .date {
        font-size: 14px;
        color: #949fd5;
        margin-left: 8px;

        flex: 1;
        max-width: 80px;
        text-align: right;
    }
}
.van-dropdown-menu {
    flex: 2;
    overflow: hidden;
}
.van-dropdown-menu__item {
    &:nth-child(1) {
        justify-content: flex-start;
    }
    &:nth-child(2) {
        //justify-content: flex-start;
    }
    &:nth-child(3) {
        justify-content: flex-end;
    }
    padding-right: 8px;
}
.van-dropdown-menu__title {
    padding-left: 0;
}
.van-popup {
    background-color: #0d1b49;
}
.van-overlay {
    background-color: rgba(0, 7, 29, 0.5);
}
.van-cell {
    font-size: 14px;
    // line-height: 20px;
}
.van-cell::after {
    left: 0;
    right: 0;
    border-bottom: 1px solid #23336a;
}
.van-cell--clickable:active {
    background-color: rgba(0, 0, 73, 0.8);
}
</style>
