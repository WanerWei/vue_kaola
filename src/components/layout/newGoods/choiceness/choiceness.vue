<template>
    <div class="newGoodsMain">
        <div class="newGoodMainWrap">
            <section class="nGBannerCon">
                <div class="swiper-container" id="swiper-container2">
                    <div class="swiper-wrapper">
                        <banner-list :item="item" v-for="item in queryBigBands" :key="item.brandId"></banner-list>
                    </div>
                </div>
            </section>

            <router-link to="/index" tag='section'>
                <section class="exclusiveBrandTitleImg">
                    <img :src="exclusiveBrandTitleImg" alt="">
                </section>
            </router-link>

            <section class="ExclusiveBrand">
                <exclusive-brand-list :item='item' v-for="item in ExclusiveBrandList" :key="item.brandId"></exclusive-brand-list>
            </section>

            <section class="moreBrand">
                <span>更多品牌上新 ></span>
            </section>

            <p class="cutOffRule"></p>

            <section class="dayNewGoods">
                <section class="dayNewGoodsTitleImg">
                    <img :src="dayNewGoodsTitleImg" alt="">
                </section>
                <day-new-goods-list :item='item' v-for="item in queryDayNewRecGoodsList" :key="item.goodsId"></day-new-goods-list>
            </section>
            <footer-con></footer-con>
        </div>
    </div>
</template>

<script>

import ExclusiveBrandList from 'components/common/newGoods/ExclusiveBrand/ExclusiveBrandList'
import DayNewGoodsList from 'components/common/newGoods/dayNewGoods/dayNewGoodsList'
import BannerList from 'components/common/newGoods/Banner-list/banner-list'
import FooterCon from 'components/common/footer/footer'

import http from 'utils/http'
import _ from 'lodash'
import { scroll } from 'utils/scroll'
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';
import { Indicator } from 'mint-ui'


export default {

    data() {
        return {
            exclusiveBrandTitleImg: '',
            queryBigBands: '',
            ExclusiveBrandList : [],
            dayNewGoodsTitleImg: '',
            flashTitleImg: '',
            queryDayNewRecGoodsIdsList: [],
            queryDayNewRecGoodsList : []
        }
    },

    components: {
        ExclusiveBrandList,
        DayNewGoodsList,
        BannerList,
        FooterCon
    },

    async beforeCreate() {

        // 加载提示
        Indicator.open({
            text: '加载中...',
            spinnerType: 'fading-circle'
        })

        // 轮播图
        this.queryBigBands = (await http({
            url: "/newGoods/activity/queryBigBands.html",
            method: 'get',
        })).data        

        // brands
        let newBrandImgs = (await http({
            url: '/newGoods/activity/queryResourceTitle.html',
            method: 'get'
        })).data


        // 三个块 大图
        this.exclusiveBrandTitleImg = newBrandImgs.exclusiveBrandTitleImg
        this.dayNewGoodsTitleImg = newBrandImgs.dayNewGoodsTitleImg
        this.flashTitleImg = newBrandImgs.flashTitleImg

        // brandList
        this.ExclusiveBrandList = (await http({
            url: '/newGoods/activity/queryExclusiveBrand.html',
            method: 'get'
        })).data

        // 先获取 goodsID，根据id 获取信息
        let queryDayNewRecGoodsIds = (await http({
            url: 'newGoods/activity/queryDayNewRecGoods.html',
            method: 'get'
        })).data

        // 保留this指向
        let _this = this
        _.forEach(queryDayNewRecGoodsIds, function(value, key) {
            _this.queryDayNewRecGoodsIdsList.push(value.goodsId);
        })

        // Ids 分组
        let queryDayNewRecGoodsIdsLists = _.chunk(this.queryDayNewRecGoodsIdsList,15)

        Indicator.close()

        // 每五个 newGoods数据 插入一个 model
        // https://m-element.kaola.com/newGoods/activity/queryDiverterModule.html


        // scroll实例化
        this.$nextTick(() => {
            
            scroll({
                el: '.newGoodsMain',
                data: this.queryDayNewRecGoodsList,
                idsList: queryDayNewRecGoodsIdsLists,
                url: '/newGoods/activity/queryDayNewRecGoodsDetail.html',
                vm: _this
            })
        })
    }
}
</script>

<style lang="stylus" scoped>



.nGBannerCon
    width 100%
    height 3.36rem
    margin-top .5rem
    background-image: url(https://haitao.nos.netease.com/2202dcf9-58f4-4f88-bd5c-acf6322e4ec4.png)

.swiper-container
    width 100%
    height 100%
    padding .4rem 0

.swiper-wrapper
    width 100%
    height 100%
    

.exclusiveBrandTitleImg
.dayNewGoodsTitleImg
    width 100%
    height .8086rem
    overflow hidden
    img
        width 100%

.ExclusiveBrand
    width 100%
    height 3.63rem        


.moreBrand
    width 100%
    height .58rem
    padding .15rem 0
    display flex
    justify-content center
    span
        padding 0 .1rem
        border 0.01rem solid rgb(51, 51, 51)
        color rgb(51, 51, 51)
        text-align center
        line-height .28rem
        border-radius .15rem
        font-size .13rem

.cutOffRule
    height .1rem
    width 100%
    background #ddd
</style>


