import Vue from 'vue';
import VueRouter from 'vue-router';
import Page404 from '../views/404/Page404.vue';
import Drug from '../views/drug/Drug.vue';
import DrugIncomeTop from '../views/drug/DrugIncomeTop.vue';
import Login from '../views/login/Login.vue';
import Operation from '../views/operation/Operation.vue';
import OperationIncomeTrend from '../views/operation/OperationIncomeTrend.vue';
import OperationIndicators from '../views/operation/OperationIndicators.vue';
import OperationVisits from '../views/operation/OperationVisits.vue';
import Public from '../views/public/Public.vue';
import Quality from '../views/quality/Quality.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Operation',
        component: Operation,
        meta: {
            title: '运营',
            showTab: true,
        },
        /* children:[
            {
                path:'/total-detal',
                name:'TotalIncome',
                component:TotalIncome
            }
        ] */
    },
    {
        path: '/drug',
        name: 'Drug',
        component: Drug,
        meta: {
            title: '药物',
            showTab: true,
        },
    },
    {
        path: '/quality',
        name: 'Quality',
        component: Quality,
        meta: {
            title: '质量',
            showTab: true,
        },
    },
    {
        path: '/public',
        name: 'Public',
        component: Public,
        meta: {
            title: '公卫',
            showTab: true,
        },
    },
    {
        path: '/operation-indicators',
        name: 'OperationIndicators',
        component: OperationIndicators,
        meta: {
            title: '医疗机构运营指标',
            showTab: false,
        },
    },
    {
        path: '/operation-income-trend',
        name: 'OperationIncomeTrend',
        component: OperationIncomeTrend,
        meta: {
            title: '收入趋势',
            showTab: false,
        },
    },
    {
        path: '/operation-visits',
        name: 'OperationVisits',
        component: OperationVisits,
        meta: {
            title: '医疗机构就诊人次',
            showTab: false,
        },
    },
    {
        path: '/drug-income-top',
        name: 'DrugIncomeTop',
        component: DrugIncomeTop,
        meta: {
            title: '医疗机构药品使用情况',
            showTab: false,
        },
    },
    {
        path: '/login',
        name: '登录',
        component: Login,
        meta: {
            title: '登录',
            showTab: false,
            noFooterMsg: true,
        },
    },
    {
        path: '/*',
        name: '404',
        component: Page404,
        meta: {
            title: '找不到页面',
            showTab: false,
            noFooterMsg: true,
        },
    },
];

const router = new VueRouter({
    routes,
    scrollBehavior() {
        //to, from, savedPosition
        return { x: 0, y: 0 };
    },
});

router.beforeEach((to, from, next) => {
    const title = to.meta && to.meta.title;
    if (title) {
        document.title = title;
    }
    if (to.path === '/login') {
        sessionStorage.removeItem('user');
    }
    const user = sessionStorage.getItem('user');
    if (!user && to.path !== '/login') {
        next({
            path: '/login',
            query: { redirect: to.fullPath }, // 将跳转的路由path作为参数，登录成功后跳转到该路由-xlz
        });
    } else {
        next();
    }
});

export default router;
