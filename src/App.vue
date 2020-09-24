<script>
import { Sticky } from 'vant';
export default {
    name: 'App',
    components: {
        [Sticky.name]: Sticky,
    },
    data() {
        return {};
    },
    beforeCreate() {
        console.log(this.$route.meta.showTab);
        console.log(this.$route.meta.noFooterMsg)
    },

    /*  watch: {
        $route(to, from) {
            if (to.path != '/' && to.path != '/myhome') {
                this.isShow = false;
            } else {
                this.isShow = true;
            }
        },
    }, */
};
</script>

<template>
    <div id="app">
        <van-sticky v-show="$route.meta.showTab">
            <div id="nav">
                <router-link to="/" exact>运营</router-link>
                <router-link to="/drug">药品</router-link>
                <router-link to="/quality">质量</router-link>
                <router-link to="/public">公卫</router-link>
            </div>
        </van-sticky>
        <router-view />
        <div class="footer" v-if="!$route.meta.noFooterMsg">
            2020-08-10 数据已更新
        </div>
    </div>
</template>

<style lang="less">
body {
    margin: 0;
    // color: #949fd5;
    font-size: 15px;
    color: #b2b8e4;
}
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
#app {
    position: relative;
    padding-bottom: 40px;
    box-sizing: border-box;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-height: 100vh;
    // text-align: center;
    // color: #2c3e50;
    background-color: #0d1b49; //#15255b;
}
*::-webkit-scrollbar {
    display: none;
}

#nav {
    display: flex;
    padding: 10px 16px;
    justify-content: space-between;
    align-items: center;
    background-color: #15255b;
    text-align: center;

    a {
        display: inline-block;
        height: 30px;
        line-height: 30px;
        width: 24%;
        font-size: 15px;
        color: #8e9ace;
        text-decoration: none;

        &.router-link-exact-active {
            color: #ffffff;
            background-image: linear-gradient(
                180deg,
                #00bfff 30%,
                #0092ff 100%
            );
            border-radius: 15px;
        }
    }
}

.footer {
    position: absolute;
    bottom: 0;
    padding: 10px;
    right: 0;
    left: 0;
    font-size: 12px;
    text-align: center;
}

[class*='van-hairline']::after {
    border: none;
    // #1c2a5a;
}
.van-grid-item__content {
    border-radius: 4px;
}
</style>
