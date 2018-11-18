<template>
    <div class="newGoods">
        <div class="newGoodsNav">
            <ul>
                <li  v-if="$route.name == '精选'" class="active" @click="$router.push({name: `精选`, query: {name: '精选' }})">
                    <i>
                        <img src="https://haitao.nos.netease.com/01aba165-87da-4d7b-840a-1b4caacb45e0.png" alt="">
                    </i>
                    <p class="">精选</p>
                </li>
                <li  v-else  @click="$router.push({name: `精选`, query: {name: '精选' }})">
                    <i>
                        <img src="https://haitao.nos.netease.com/04bf03c8-0371-4c74-8c3f-342131ad600a.png" alt="">
                    </i>
                    <p class="">精选</p>
                </li>  
                <nav-list :item="item" v-for="item in dataList" :key="item.id"></nav-list>
            </ul>
        </div>
        <transition :name="transitionName">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </transition>
        <!-- <choiceness></choiceness> -->
        <!-- <daily-block-buster></daily-block-buster> -->
        <!-- <new-arrival></new-arrival> -->
        <!-- <fashion-clothes></fashion-clothes> -->
        <div class="fixedCollection" 
            @click="$router.push({name: 'myCollections'})"
            v-if="$route.name == '精选'"
            >
            <i>
                <svg t="1541688945782" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3665" xmlns:xlink="http://www.w3.org/1999/xlink" width="42" height="42"><path d="M471.53152 804.33152a20.45952 20.45952 0 0 0 15.2576 6.81984h0.02048a20.48 20.48 0 0 0 15.2576-6.84032l270.00832-302.51008a185.81504 185.81504 0 0 0 42.14784-117.39136c0-103.48544-85.87264-187.65824-191.44704-187.65824-51.97824 0-100.43392 20.0704-136.23296 55.808-35.79904-35.71712-84.25472-55.808-136.23296-55.808-105.55392 0-191.44704 84.1728-191.44704 187.65824 0 42.55744 14.97088 84.2752 42.88512 118.31296 2.62144 3.19488 207.17568 231.66976 269.78304 301.60896z m-121.2416-566.62016c47.53408 0 91.29984 21.25824 120.05376 58.28608 7.76192 9.99424 24.59648 9.99424 32.3584 0 28.75392-37.04832 72.51968-58.28608 120.05376-58.28608 82.98496 0 150.48704 65.80224 150.48704 146.69824a142.336 142.336 0 0 1-32.29696 90.78784l-254.1568 284.75392c-93.71648-104.67328-249.1392-278.3232-254.0544-284.03712a142.92992 142.92992 0 0 1-32.89088-91.50464c-0.02048-80.87552 67.4816-146.69824 150.44608-146.69824z" fill="#f0f0f0" p-id="3666"></path></svg>
            </i>
            <div v-if="collectionsNum">{{ collectionsNum }}</div>
        </div>
    </div>
</template>

<script>

// 上新 页面
// https://weex.kaola.com/dailynew/h5/index.html

import NavList from 'components/common/newGoods/navList/navList'
import Choiceness from 'components/layout/newGoods/choiceness/choiceness'
import DailyBlockBuster from 'components/layout/newGoods/dailyBlockBuster/dailyBlockBuster'
import NewArrival from 'components/layout/newGoods/newArrival/newArrival'
import FashionClothes from 'components/layout/newGoods/fashionClothes/fashionClothes'
import FooterCon from 'components/common/footer/footer'

import { Indicator } from 'mint-ui';
import http from 'utils/http'

import { mapGetters } from 'vuex'


export default {
    data() {
        return {
            dataList : '',
            transitionName : ''
        }
    },
    components: {
        NavList,
        Choiceness,
        DailyBlockBuster,
        NewArrival,
        FashionClothes,
        FooterCon
    },

    // 计算属性，得到收藏商品的数量，此时的collectionsNum相当于data属性里的数据
    // 在页面上可以直接访问
    computed: {
        ...mapGetters('myCollections',['collectionsNum']),
    },

    async beforeCreate() {

        Indicator.open({
            text: '客官稍等(っ•̀ω•́)っ✎⁾⁾',
            spinnerType: 'snake'
        });

        // nav 图标
        this.dataList = (await http({
            url: "/newGoods/activity/queryCategoryTab.html",
            method: 'get',
        })).data

        Indicator.close();
    },

    watch: {
        $route (to, from) {
            if ( to.meta > from.meta ) {
                this.transitionName = 'slide-left'
            } else {
                this.transitionName = 'slide-right'
            }
        }
    },
    mounted() {

            // new Swiper('#swiper-container2', {
        //     effect : 'coverflow',
        //     slidesPerView: 3,
        //     centeredSlides: true,
        //     loop: true,
        //     coverflow: {
        //         rotate: 30,
        //         stretch: -50,
        //         depth: 60,
        //         modifier: 2,
        //         slideShadows : true
        //     }
        // })
    }
}
</script>

<style lang="stylus" scoped>

.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  transition: all 300ms;
}

.slide-right-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.slide-right-leave-to {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-leave-to {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}

.newGoodsMain
    height 5.65rem

.fixedCollection
    position fixed
    width .5rem
    height .5rem
    background #111
    left .1rem
    bottom .6rem
    border-radius 50%
    i
        position absolute
        left .05rem
        top .05rem
    div
        background-color rgb(227, 20, 54)
        font-size .12rem
        width .16rem
        height .16rem
        text-align center
        line-height .16rem
        color #f0f0f0
        position absolute
        border-radius 50%
        right 0rem
        top 0rem


.newGoodsNav
        overflow scroll
        width 100%
        height 0.5rem
        position fixed
        left 0
        top .52rem 
        z-index 999
    ul
        width 9.185rem;
        display flex
        flex-wrap nowrap
        overflow visible
        background #fff
        li
            &.active
                background-image linear-gradient(to top, rgb(255, 0, 0), rgb(255, 68, 111))
                p
                    color #fff
            display flex
            flex-direction column
            justify-content space-around
            align-items center
            width 0.835rem
            height 0.5rem
            float left
            i
                display block
                width .28rem
                height .28rem
                overflow hidden
                img
                    width 100%
            p
                color: rgb(102, 102, 102)
                font-size .12rem



</style>


