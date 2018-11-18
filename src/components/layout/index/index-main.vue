<template>
<div class="m-wapindex">
    <div class="m-scrollload">
        <div class="list_container">
            <Banner :bannerListItem="bannerListItem"></Banner>
            <banner-btom-img :bannerBtomImg='bannerBtomImg'></banner-btom-img>
            <icon-slider :iconSliderList="iconSliderList"></icon-slider>
            <icon-slider-btom :IconSliderBtomC="IconSliderBtomC"></icon-slider-btom>
            <image-row-one :ImageRowOneC="ImageRowOneC"></image-row-one>
            <image-row-two :ImageRowTwoC="ImageRowTwoC"></image-row-two>
            <image-row-three :ImageRowThreeC="ImageRowThreeC"></image-row-three>
            <image-row-four :ImageRowFourC="ImageRowFourC"></image-row-four>
            <!-- <image-row-five :ImageRowFiveC="ImageRowFiveC"></image-row-five> -->
            

            <daily-rob-tit :dailyRobTit="dailyRobTit"></daily-rob-tit>
            <daily-rob-con :dailyRobCon="dailyRobCon"></daily-rob-con>
            <!-- 精品活动 -->
            <activity-content></activity-content>
            <!-- 为你推荐 -->
            <recommend-tit :recommendTitImg="recommendTitImg"></recommend-tit>
            <!-- <recommend-list :item="item" v-for="item in recommendConList" :key="item.goodsId"></recommend-list> -->
            <recommend-list :recommendConList="recommendConList"></recommend-list>
            <!-- footer -->
            <footer-con></footer-con>
        </div>
        <!-- <div class="u-loading">
            <img src="loading.gif" alt="">
        </div> -->
        
    </div>
</div>
</template>

<script>


import axios from 'utils/http'

import Banner from 'components/layout/index/banner/banner'
import BannerBtomImg from 'components/layout/index/banner/bannerBtomImg'
import IconSlider from 'components/layout/index/icon-slider'
import IconSliderBtom from 'components/layout/index/icon-slider-btom'
import ImageRowOne from 'components/layout/index/image-row-1'
import ImageRowTwo from 'components/layout/index/image-row-2'
import ImageRowThree from 'components/layout/index/image-row-3'
import ImageRowFour from 'components/layout/index/image-row-4'
import ImageRowFive from 'components/layout/index/image-row-5'


// 今日必抢
import DailyRobTit from 'components/layout/index/dailyRob/dailyRobTit'
import DailyRobCon from 'components/layout/index/dailyRob/dailyRobCon'

// 活动版块
import ActivityContent from 'components/layout/index/activity/activityCon'
// 推荐版块
import RecommendTit from 'components/layout/index/recommend/recommendTit'
import RecommendList from 'components/layout/index/recommend/recommendList'

// footer
import FooterCon from 'components/common/footer/footer'

import BScroll from 'better-scroll'
import { Indicator } from 'mint-ui';
import { Toast } from 'mint-ui'

import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'

export default {
    data () {
        return {
            bannerListItem : null,
            bannerBtomImg : null,
            iconSliderList : null,
            IconSliderBtomC : '',
            ImageRowOneC : [],
            ImageRowTwoC : [],
            ImageRowThreeC: [],
            ImageRowFourC: [],
            ImageRowFiveC: [],
            recommendTitImg: '',
            recommendConList : [],
            dailyRobTit : '',
            dailyRobCon : []
        }
    },
    components: {
        Banner,
        BannerBtomImg,
        IconSlider,
        IconSliderBtom,
        ImageRowOne,
        ImageRowTwo,
        ImageRowThree,
        ImageRowFour,
        ImageRowFive,
        ActivityContent,
        RecommendTit,
        RecommendList,
        FooterCon,
        DailyRobTit,
        DailyRobCon
    },

    async beforeCreate() {

        Indicator.open({
            text: '加载中...',
            spinnerType: 'fading-circle'
        });

        let _this = this
        this.indexContent = await axios({
            method: 'get',
            url: '/home/index.html',
            params: {
                pageNo : 1
            },
            _this
        })

        this.bannerListItem = this.indexContent.data.home[0].bannerList
        this.bannerBtomImg = this.indexContent.data.home[1].imageUrl
        this.iconSliderList = this.indexContent.data.home[2].itemList
        this.IconSliderBtomC = this.indexContent.data.home[3].imageUrl
        // this.IconSliderBtomC.push(this.indexContent.data.home[3].firstImgItem.imgUrl,this.indexContent.data.home[3].secondImgItem.imgUrl)
        this.ImageRowOneC = this.indexContent.data.home[4].itemList
        this.ImageRowTwoC.push(this.indexContent.data.home[5].firstImgItem.imgUrl,this.indexContent.data.home[5].secondImgItem.imgUrl)
        this.ImageRowThreeC.push(this.indexContent.data.home[6].firstImgItem.imgUrl,this.indexContent.data.home[6].secondImgItem.imgUrl)
        this.ImageRowFourC.push(this.indexContent.data.home[7].firstImgItem.imgUrl,this.indexContent.data.home[7].secondImgItem.imgUrl)
        // this.ImageRowFiveC.push(this.indexContent.data.home[8].firstImgItem.imgUrl,this.indexContent.data.home[8].secondImgItem.imgUrl)
        

        this.dailyRobTit = this.indexContent.data.home[8].imageUrl

        this.dailyRobCon = this.indexContent.data.home[9].wellChosenActivityModuleItemList

        Indicator.close();
    },

    computed: {
        // 计算属性，动态 获取 回到顶部的 命令
        ...mapGetters('backToTop',["isToTop"])
    },

    mounted() {
        // bSroll 要求有唯一子元素，且子元素高度大于父元素
        // 实例化 scroll

        let _this = this

        this.bScroll = new BScroll('.home', {
            probeType: 1,
            click:true,
            // 希望在另一个方向保留原生的滚动
            eventPassthrough: "horizontal",
            pullUpLoad: {
                threshold: 50
            }
        })

        
        let pageNo = 3

        // 兼容上拉 刷新
        this.bScroll.on('pullingUp', async () => {

            // 做多可请求几十页,做个截断
            if(pageNo>= 5){
                Toast({
                    message: '别拉了，我也是有底线哒 ^_^',
                    position: 'bottom',
                    duration: 3000
                });
                return
            }

            Indicator.open({
                text: '加载中...',
                spinnerType: 'fading-circle'
            });
            
            // 获取数据
            let recommendForUCon = (await axios({
                method: 'get',
                url: '/home/index.html',
                params: {
                    pageNo
                },
                _this
            })).data.home

            // 只有第一次请求(pane = 4)时才有 recommendForUCon[0].recTitle,所以做个适配
            if(!!recommendForUCon[0].recTitle) {
                _this.recommendTitImg = recommendForUCon[0]
                _this.recommendConList = recommendForUCon[1].globalGoodsItemList
            }else{
                _this.recommendConList.push(...recommendForUCon[0].globalGoodsItemList)
            }

            // 下次 DOM 更新循环结束之后执行延迟回调，用于获得更新后的 DOM
            _this.$nextTick(() => {
                // bScroll更新高度
                _this.bScroll.refresh()
                pageNo ++

                // 告诉better-scroll, 可以进行下次滑动了
                _this.bScroll.finishPullUp()
            })

            Indicator.close();
            
        })

        this.bScroll.on('scroll', function() {
            let y = this.y

            // 回到顶部 显示/隐藏的判断
            if(y <= -1200) {
                // 节流？？防抖？？
                let timer = null
                timer = setTimeout(function() {
                    _this.$store.dispatch('backToTop/change', 'block')
                },300)
            }else{
                let timer = null
                timer = setTimeout(function() {
                    _this.$store.dispatch('backToTop/change', 'none')
                },300)
            }
        })

        // this.$nextTick(() => {
            var mySwiper = new Swiper('#swiper-container1', {
                loop: true, 
                autoplay: 2000,
                speed: 600,
            }) 
            mySwiper.update
            // _this.bScroll.refresh()
        // }) 
    },

    watch: {
        isToTop() {
            // 监听 回到顶部的 状态
            if(!!this.isToTop) {
                this.bScroll.scrollTo(0, 0, 300)
            }
        }
    }
    
}
</script>

<style lang="stylus" scoped>

</style>


