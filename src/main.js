import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
// import { Button } from 'vant';

Vue.config.productionTip = false;
// for(let i = 0;i < )
// Vue.component('todo-item');

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');
