<script>
import { DropdownMenu, DropdownItem } from 'vant';
export default {
    name: 'TitleBgColor',
    components: {
        [DropdownMenu.name]: DropdownMenu,
        [DropdownItem.name]: DropdownItem,
    },
    props: {
        title: {
            type: String,
            default: '标题',
        },
        filter: {
            type: Boolean,
            default: false,
        },
        initValue: undefined,
        options: {
            type: Array,
            default: () => [],
        },
    },

    computed: {
        optionList() {
            return { list: this.options, value: this.initValue };
        },
    },
};
</script>
<template>
    <div class="bg-wrap">
        <span class="title">{{ this.title }}</span>
        <div v-if="filter">
            <van-dropdown-menu>
                <van-dropdown-item
                    v-model="optionList.value"
                    :options="optionList.list"
                />
            </van-dropdown-menu>
        </div>
    </div>
</template>

<style lang="less" scoped>
.bg-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    background-color: #1c2a5a;
    padding: 0 16px;
    .title {
    }
}
</style>
