<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import { Button } from 'vant';

export default {
    name: 'Home',
    components: {
        HelloWorld,
        SearchForm,
        [Button.name]: Button,
    },
};
</script>

<template>
    <div class="home">
        <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
        <HelloWorld msg="Welcome to Your Vue.js App" />
        <van-button type="primary">主11要按钮</van-button>
    </div>
</template>
