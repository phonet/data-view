<script>
import { NavBar } from 'vant';
export default {
    name: 'NavBar',
    components: {
        [NavBar.name]: NavBar,
    },
    props: {
        title: {
            type: String,
            default: '标题',
        },
    },
    methods: {
        onClickLeft() {
            this.$router.back();
        },
    },
};
</script>

<template>
    <div class="nav-wrap">
        <van-nav-bar
            left-arrow
            @click-left="onClickLeft"
            :left-text="this.title"
        >
        </van-nav-bar>
    </div>
</template>

<style lang="less">
.nav-wrap {
    .van-nav-bar {
        height: 44px;
        background-color: #15255b;
        .van-icon {
            color: #fff;
        }
    }
    .van-nav-bar__arrow {
        font-size: 24px;
    }
    .van-nav-bar__text {
        flex: 1;
        display: block;
        font-size: 16px;
        color: #ffffff;
        overflow: hidden;
    }
}
</style>
