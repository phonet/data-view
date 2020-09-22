<script>
import { Empty, Button } from 'vant';
export default {
    name: 'Page404',
    components: {
        [Empty.name]: Empty,
        [Button.name]: Button,
    },

    methods: {
        onGoback() {
            this.$router.back();
        },
    },
};
</script>

<template>
    <van-empty description="找不到页面拉~~" image="error">
        <van-button round type="danger" class="bottom-button" @click="onGoback">
            返回
        </van-button>
    </van-empty>
</template>
<style lang="less" scoped>
.bottom-button {
    width: 160px;
    height: 40px;
}
</style>
