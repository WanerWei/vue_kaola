import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import kaolaIndex from 'views/index/Index'
import NewGoodsIndex from 'views/newGoods/newGoodsIndex'
import GoodDetail from 'components/layout/goodDetail/goodDetail'


import Choiceness from 'components/layout/newGoods/choiceness/choiceness'
import DailyBlockBuster from 'components/layout/newGoods/dailyBlockBuster/dailyBlockBuster'
import NewArrival from 'components/layout/newGoods/newArrival/newArrival'
import FashionClothes from 'components/layout/newGoods/fashionClothes/fashionClothes'
import MyCollections from 'views/myCollections/myCollections'
import SignIn from 'views/signIn/signIn'
import Search from 'views/search'
import Cart from 'views/cart/cart'


const routes = [
    {
        path: '/',
        redirect : '/index'
    },
    {
        name : 'index',
        path:'/index',
        component: kaolaIndex,
    },
    {
        name : 'search',
        path:'/search',
        component: Search,
    },
    {
        name : 'signIn',
        path:'/signIn',
        component: SignIn,
    },
    // {
        // path: '/newGoods',
        // redirect : '/newGoods/choiceness',
        // redirect: { path : "choiceness" }
    // },
    {
        name: 'newGoods',
        path:'/newGoods',
        component: NewGoodsIndex,
        children: [
            {
                name: '精选',
                path:'choiceness',
                component: Choiceness,  
                meta : 1,
            },
            {
                name: '每日重磅',
                path:'dailyBlockbuster',
                component: DailyBlockBuster,
                meta : 2
            },
            {
                name: '本周上新',
                path:'newArrival',
                component: NewArrival,
                meta : 3
            },
            {
                name: '潮流穿搭',
                path:'fashionClothes',
                component: FashionClothes,
                meta : 4
            },
            {
                name: '美妆个护',
                path:'nulls',
                meta : 5
            },
            {
                name: '品质生活',
                path:'nulls',
                meta : 6
            },
            {
                name: '母婴',
                path:'nulls',
                meta : 7
            },
            {
                name: '数码电器',
                path:'nulls',
                meta : 8
            },
            {
                name: '来探店',
                path:'nulls',
                meta : 9
            },
            {
                name: '实拍实测',
                path:'nulls',
                meta : 10
            },
            {
                name: '新品榜单',
                path:'nulls',
                meta : 11
            },
        ]
    },
    {
        name: 'goodDetail',
        path: '/goodDetail',
        component: GoodDetail
    },
    {
        name: 'myCollections',
        path: '/myCollections',
        component: MyCollections
    },
    {
        name: 'cart',
        path: '/cart',
        component: Cart
    }
]

const router = new VueRouter({
    mode : 'hash',
    // mode : 'history',
    // base : '/dist/',
    routes
})


// 全局守卫
router.beforeEach((to, from, next) => {
    if(to.meta >4) {
        next(false)
    }else {
        next()
    }
})

// router.afterEach((to, from, next) => {
// })


export default router