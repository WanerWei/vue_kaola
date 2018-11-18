<template>
    <div class="" id="detail">
        <header class="detailNav">
            <div class="navUl">
                <div class="back" @click="$router.back()">
                    <i>
                        <svg t="1541493588317" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1090" xmlns:xlink="http://www.w3.org/1999/xlink" width="15" height="15"><path d="M672 160c0 8.2-3.1 16.4-9.4 22.6L333.3 512l329.4 329.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0l-352-352c-12.5-12.5-12.5-32.8 0-45.3l352-352c12.5-12.5 32.8-12.5 45.3 0 6.2 6.2 9.3 14.4 9.3 22.6z" p-id="1091" fill="#8a8a8a"></path></svg>
                    </i>
                </div>
                <ul>
                    <li @click="gotoGoods" class="active">
                        <a href="javascript:;">商品</a>
                    </li>
                    <li>
                        <a href="javascript:;">评价</a>
                    </li>
                    <li @click="gotoRecommend">
                        <a href="javascript:;">推荐</a>
                    </li>
                    <li>
                        <a href="javascript:;">详情</a>
                    </li>
                </ul>
                <div class="toHome" @click="$router.push({ name: 'index' })">
                    <i>
                        <svg t="1541681314579" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2739" xmlns:xlink="http://www.w3.org/1999/xlink" width="25" height="25"><path d="M744 536c-8.848 0-16 7.152-16 16l0 240-128 0 0-176c0-8.848-7.152-16-16-16l-160 0c-8.848 0-16 7.152-16 16l0 176-128 0 0-240c0-8.848-7.152-16-16-16s-16 7.152-16 16l0 256c0 8.848 7.152 16 16 16l160 0c8.848 0 16-7.152 16-16l0-176 128 0 0 176c0 8.848 7.152 16 16 16l160 0c8.848 0 16-7.152 16-16l0-256C760 543.152 752.848 536 744 536zM821.6 508.688 515.312 202.416c-6.256-6.256-16.368-6.256-22.624 0L186.4 508.688c-6.256 6.256-6.256 16.368 0 22.624s16.384 6.256 22.624 0L504 236.352l294.96 294.96c6.256 6.256 16.384 6.256 22.64 0S827.84 514.944 821.6 508.688zM648 296l48 0 0 48c0 8.832 7.152 16 16 16s16-7.168 16-16l0-64c0-8.832-7.152-16-16-16l-64 0c-8.848 0-16 7.168-16 16S639.152 296 648 296z" p-id="2740" fill="#ff1e32"></path></svg>
                    </i>
                </div>
            </div>
        </header>

        <div class="detailScroll">
            <div class="detailWrap">
                <div class="banner" ref="goods">
                    <div class="bannerCon">
                        <div class="swiper-container" id="swiper-container3">
                            <div class="swiper-wrapper">
                                <div class="bannerImg">
                                    <img src="https://pop.nosdn.127.net/ea5403a2-09c4-479d-ae1e-1be2377ff559?imageView&thumbnail=750x0&quality=75&type=webp" alt="">
                                </div>
                                <!-- <banner-list></banner-list> -->
                            </div>
                        </div>
                    </div>
                </div>
                <!-- <div class="promotionSaleInfo">
                    <div class="appDetailPrePriceUrl" v-if="promotionSaleInfo">
                        <img :src="promotionSaleInfo.appDetailPrePriceUrl" alt="">
                    </div>
                    <div class="wholePromotionLabel">
                        {{ promotionSaleInfo.wholePromotionLabel }}
                        <div class="promotionStartTime" v-if="promotionList.promotionStartTime">
                            {{ promotionList.promotionStartTime }}
                        </div>
                    </div>
                </div> -->
                <div class="skuPrice">
                    <i>￥</i>
                    <span>{{ skuPrice.suggestPrice }}</span>
                    <del>￥{{ skuPrice.marketPrice }}</del>
                </div>
                <div class="vipGoodsDiscountInfo">
                    <p class="discountLabelImg">
                        <img :src="vipGoodsDiscountInfo.discountLabelImg" alt="">
                        <span>{{ vipGoodsDiscountInfo.discountContent }}{{ vipGoodsDiscountInfo.vipGoodsSaveMoney }}</span>
                    </p>
                    <div class="dredgeVip">开通VIP ></div>
                </div>
                <div class="goodTit">
                    <p>{{ this.$route.query.title }}</p>
                </div>

                <p class="subTitle">铂金镀层，享受奢华美容，双滚轮设计，紧密贴合每一寸肌肤，按摩体验更舒适，自带微感电流，促进血液循环，激活肌肤新陈代谢，V脸塑形，焕发新生光彩，轻盈机身，便携出门，与美同行。</p>

                <div class="n-taginfo">

                </div>

                <p class="partLine"></p>

                <!-- 收货地 -->
                <div class="n-activitybox">
                    <div class="itm n-distribution">
                        <div class="name">配&nbsp;&nbsp;送</div>
                        <div class="cnt" @click="pickerBlock">
                            <p>至<i>
                                    <svg t="1541907042296" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1982" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16"><path d="M512.103132 320.120979a106.221743 106.221743 0 1 1-75.507022 31.354611A106.221743 106.221743 0 0 1 512.103132 320.120979m0-63.989002a170.850635 170.850635 0 1 0 120.939214 49.911422A169.570855 169.570855 0 0 0 512.103132 256.131977z" p-id="1983" fill="#8a8a8a"></path><path d="M805.172761 124.314633a407.609942 407.609942 0 0 0-586.139257 0 431.285873 431.285873 0 0 0 0 599.576948L512.103132 1024l293.069629-300.108419a431.285873 431.285873 0 0 0 0-599.576948z m-44.152411 557.344207l-248.917218 255.956007-248.917217-255.956007a365.377201 365.377201 0 0 1 0-508.712565 346.82039 346.82039 0 0 1 497.834435 0 365.377201 365.377201 0 0 1 0 508.712565z" p-id="1984" fill="#8a8a8a"></path></svg>
                                </i>
                                <span v-if="!getCity.province">石家庄 长安市</span>
                                <span v-else>{{ getCity.province }} {{ getCity.city }} {{ getCity.district }}</span>
                            </p>
                        </div>
                    </div>
                    <div class="itm n-expressinfo">
                        <div class="name">运&nbsp;&nbsp;费</div>
                        <div class="cnt">
                            <p>满88元免运费</p>
                        </div>
                    </div>
                    <div class="itm n-description">
                        <div class="name">说&nbsp;&nbsp;明</div>
                        <div class="cnt">
                            <ul>
                                <li v-for="item in goodsDeclare" :key="item">
                                    {{ item }}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <p class="partLine"></p>

                <!-- 品牌推荐 -->
                <div class="attachment" ref="recommend">
                    <div class="n-brandboxBrand">
                        <div class="brandImg">
                            <img :src="attachmentBrand.brandLogo" alt="">
                        </div>
                        <div class="brandCon">
                            <p class="brandTit">{{ attachmentBrand.brandName }}</p>
                            <p class="brandOnsell">在售商品<span>{{ attachmentBrand.brandGoodsAmount }}</span>件</p>
                        </div>
                        <span class="toBrand">进入品牌</span>
                    </div>
                    <div class="attachmentList">
                        <div class="attachmentWarp">
                            <attachment-list :item="item" v-for="item in attachmentGoodList" :key="item.goodsId"></attachment-list>
                        </div>
                    </div>
                </div>

                <p class="partLine"></p>

                <!-- 相关推荐 -->
                <div class="recommend">
                    <h4>小考拉推荐</h4>
                    <div class="recommenScroll">
                        <div class="recommendWrap">
                            <attachment-list :item="item" v-for="item in recommendConList" :key="item.goodsId"></attachment-list>
                        </div>
                    </div>
                </div>

                <p class="partLine"></p>
                
            </div>
        </div>
        
        <footer>
            <div class="foot">
                <div class="footLeft">
                    <div class="collection" @click="$router.push({ name : 'myCollections' })">
                        <i>
                            <svg t="1541688945782" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3665" xmlns:xlink="http://www.w3.org/1999/xlink" width="25" height="25"><path d="M471.53152 804.33152a20.45952 20.45952 0 0 0 15.2576 6.81984h0.02048a20.48 20.48 0 0 0 15.2576-6.84032l270.00832-302.51008a185.81504 185.81504 0 0 0 42.14784-117.39136c0-103.48544-85.87264-187.65824-191.44704-187.65824-51.97824 0-100.43392 20.0704-136.23296 55.808-35.79904-35.71712-84.25472-55.808-136.23296-55.808-105.55392 0-191.44704 84.1728-191.44704 187.65824 0 42.55744 14.97088 84.2752 42.88512 118.31296 2.62144 3.19488 207.17568 231.66976 269.78304 301.60896z m-121.2416-566.62016c47.53408 0 91.29984 21.25824 120.05376 58.28608 7.76192 9.99424 24.59648 9.99424 32.3584 0 28.75392-37.04832 72.51968-58.28608 120.05376-58.28608 82.98496 0 150.48704 65.80224 150.48704 146.69824a142.336 142.336 0 0 1-32.29696 90.78784l-254.1568 284.75392c-93.71648-104.67328-249.1392-278.3232-254.0544-284.03712a142.92992 142.92992 0 0 1-32.89088-91.50464c-0.02048-80.87552 67.4816-146.69824 150.44608-146.69824z" fill="#666666" p-id="3666"></path></svg>
                        </i>
                        <span>收藏</span>
                        <div v-if="collectionsNum>=1" class="collectionsNum">
                            {{ collectionsNum }}
                        </div>
                    </div>
                    <div class="cart" @click="$router.push({ name : 'cart' })">
                        <i>
                            <svg t="1541323366405" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5139" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20"><path d="M409.6 1024c-56.4736 0-102.4-45.9264-102.4-102.4s45.9264-102.4 102.4-102.4 102.4 45.9264 102.4 102.4-45.9264 102.4-102.4 102.4z m0-153.6c-28.2112 0-51.2 22.9888-51.2 51.2s22.9888 51.2 51.2 51.2 51.2-22.9888 51.2-51.2-22.9888-51.2-51.2-51.2zM768 1024c-56.4736 0-102.4-45.9264-102.4-102.4s45.9264-102.4 102.4-102.4 102.4 45.9264 102.4 102.4-45.9264 102.4-102.4 102.4z m0-153.6c-28.2112 0-51.2 22.9888-51.2 51.2s22.9888 51.2 51.2 51.2 51.2-22.9888 51.2-51.2-22.9888-51.2-51.2-51.2zM897.9968 228.7104A69.1712 69.1712 0 0 0 844.8 204.8H217.9584l-5.0688-30.5152A87.9616 87.9616 0 0 0 128 102.4h-51.2a25.6 25.6 0 0 0 0 51.2h51.2c15.7184 0 31.7952 13.6192 34.3552 29.1328l85.5552 513.3824A87.9616 87.9616 0 0 0 332.8 768h512a25.6 25.6 0 0 0 0-51.2h-512a37.0688 37.0688 0 0 1-34.3552-29.1328l-12.6464-75.776 510.208-44.3904c39.68-3.4304 75.9296-36.9152 82.4832-76.2368l34.3552-206.1824a69.3248 69.3248 0 0 0-14.7968-56.4224z m-35.6864 47.9744l-34.3552 206.1824c-2.7136 16.1792-20.0192 32.2048-36.4032 33.6384l-514.2016 44.6976-50.8928-305.2544h618.2912c5.9904 0 11.008 2.048 14.1312 5.7856s4.352 9.0112 3.3792 14.8992z" fill="#666666" p-id="5140"></path></svg>
                        </i>
                        <span>购物车</span>
                        <div v-if="getCartGoodsNum>=1" class="getCartGoodsNum">
                            {{ getCartGoodsNum }}
                        </div>
                    </div>
                </div>
                <div class="addToCart" @click="addToCart">
                    <span>加入购物车</span>
                </div>
                <div class="buyNow">
                    <span>立即购买</span>
                </div>
            </div>
        </footer>
        <city-picker></city-picker>
        <add-to-cart></add-to-cart>
    </div>
</template>

<script>


// import { scroll } from 'utils/scroll'
import BScroll from 'better-scroll'
import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'

import { Indicator } from 'mint-ui';
import CityPicker from './cityPicker/cityPicker'
import AddToCart from './addToCart/addToCart'

import http from 'utils/http'
// https://m-goods.kaola.com/product/2525114.html?ntitle=UNNY%20%E6%82%A0%E5%AE%9C%20%E5%8D%B7%E7%BF%98%E7%9D%AB%E6%AF%9B%E8%86%8F%208.5%E5%85%8B&nprice=35&ntype=0&nimgUrl=http%3A%2F%2Fhaitao.nos.netease.com%2F16d17dd3bf704ff78eb7f354a768f32b1538986569295jn00v8sc10943.jpg&kpm=MTAwMg%3D%3D.MTYzNDI%3D.MjY3MTkz.OA%3D%3D%40%40_&p_kpm=MjAxOA%253D%253D.aHR0cHM6Ly93ZWV4Lmthb2xhLmNvbS9kYWlseW5ldy9oNS9pbmRleC5odG1s.6aG26YOoVGFi.Mw%253D%253D%2540%2540Xw%253D%253D&t_kpm=MjAxOA%253D%253D.aHR0cHM6Ly93ZWV4Lmthb2xhLmNvbS9hY3Rpdml0eS9wYWdlcy81YTk3MDVhNDU3YmQ0NTExOTBhZjYyNmMzNGE3ZTM1Ny5odG1s.6aG26YOoVGFi.MQ%253D%253D%2540%2540Xw%253D%253D
import BannerList from 'components/common/goodDetail/banner/bannerList'
import AttachmentList from 'components/common/goodDetail/attachment/attachmentList'

export default {
    data() {
        return {
            promotionSaleInfo: '',
            promotionList: '',
            skuPrice : '',
            vipGoodsDiscountInfo:'',
            attachmentBrand:'',
            attachmentGoodList: [],
            recommendConList: [],
            goodsDeclare: [],
            promotionTag : [],
            id : ''
        }
    },
    components: {
        BannerList,
        AttachmentList,
        CityPicker,
        AddToCart
    },
    async beforeCreate() {

        let { id } = this.$route.query

        Indicator.open({
            text: '客官稍等(*╹▽╹*)',
            spinnerType: 'triple-bounce'
        });

        // let address = (await http({
        //     url: '/addressControl/getAddress.html',
        //     method: 'get',
        // })).data

        // 商品详情
        let detailCon = (await http({
            url: '/product/getWapGoodsDetailDynamic.json',
            method: 'get',
            params: {
                goodsId: id
            }
        })).data

        this.promotionSaleInfo = detailCon.promotionSaleInfo || ''
        // 有的不存在这个
        this.promotionList = detailCon.promotionList[0] || ''
        this.skuPrice = detailCon.skuPrice
        this.vipGoodsDiscountInfo = detailCon.frontVipInfo.vipGoodsDiscountInfo
        this.goodsDeclare = detailCon.goodsDeclare.title
        this.promotionTag = detailCon.promotionTag
        this.id = detailCon.goodsId
        

        // 店铺推荐
        let attachmentCon = (await http({
            url: '/product/getGoodsAttachment.json',
            method: 'get',
            params: {
                goodsId: id
            }
        })).data

        this.attachmentBrand = attachmentCon.brand
        this.attachmentGoodList = attachmentCon.goodsList


        // 相关推荐
        this.recommendConList = (await http({
            url: '/product/getGoodsRecommendInfo.json',
            method: 'get',
            params: {
                goodsId: id,
                recommendType : 2
            }
        })).data

        Indicator.close();
    },

    mounted() {
        // scroll实例化
        this.$nextTick(() => {
            this.bscroll = new BScroll(".detailScroll",{
                probeType: 1,
                click: true,
                eventPassthrough : 'horizontal'
            })
        })
    },

    computed : {
        ...mapGetters('cityPicker',['getCity']),
        ...mapGetters('cart',['getCartGoodsNum']) ,
        ...mapGetters('myCollections',['collectionsNum']) 
    },

    methods: {
        // 滚动到指定位置
        gotoGoods() {
            this.bscroll.scrollToElement(this.$refs.goods,300)
        },

        gotoRecommend() {
            this.bscroll.scrollToElement(this.$refs.recommend,300)
        },

        pickerBlock() {
            this.$store.dispatch('cityPicker/change',"block")
        },

        // 加入购物车
        addToCart() {
            this.$store.dispatch('addToCart/change', 'block')
            this.$store.dispatch('addToCart/addGood', {
                price : this.skuPrice.suggestPrice,
                promotionTag : this.promotionTag,
                id : this.id,
                title : this.$route.query.title,
                shopTit : this.attachmentBrand.brandName
            })
        }
    },
}
</script>

<style lang="stylus" scoped>
@import '~styles/ellipsis.styl'

.bannerImg
    width 3rem
    height 3rem
    overflow hidden
    margin 0 .375rem
    img
        width 100%

#detail
    width 100%
    height 6.15rem
    position relative

.recommend
    width 100%
    height 2.25rem
    background #fff
    h4
        height: .32rem;
        line-height: .32rem;
        margin-top: .02rem;
        font-weight: 400;
        padding: 0 .10rem;
        font-size: .14rem;
        color: #333;        
    .recommenScroll
        width 100%
        height 1.91rem
        overflow scroll
        .recommendWrap
            width max-content
            height 1.90rem


.attachmentList
    width 100%
    height 1.90rem
    background #fff
    overflow scroll
    .attachmentWarp
        width max-content
        height 1.90rem

.attachment
    width 100%
    height 2.6rem
    background #fff
    .n-brandboxBrand
        position: relative;
        padding: 0 .10rem;
        height: .60rem;
        margin: 0 0 .10rem;
        padding-top: .10rem;
        .brandImg
            float left
            width .5rem
            height .5rem
            overflow hidden
            margin-right .1rem
            border .01rem solid #eee
            img 
                width 100%
        .brandCon
            float left
            p
                padding-top: .03rem;
                font-size: .13rem;
                color: #666
                ellipsis 2.8rem 2
                span
                    color #e31436
        .toBrand
            position: absolute;
            right: .10rem;
            top: .21rem;
            text-align center
            height: .28rem;
            line-height: .28rem;
            width: .70rem;
            border:.01rem solid #ddd;
            color: #333;
            font-size: .12rem;
            border-radius: .04rem


.recommend
    width 100%
    height 2.2rem
    background #fff

.n-activitybox
    padding 0 .1rem
    background #fff
    .itm
        position: relative;
        padding: .09rem 0;
        border-bottom: .01rem solid #f0f0f0;
        .name
            float: left;
            height: .24rem;
            line-height: .24rem;
            font-size: .13rem;
            color: #333;
        .cnt
            margin-left: .50rem;
            padding-right: .10rem;
            font-size .12rem
            p
                margin-top .03rem

.n-distribution
    svg
        margin 0 .02rem .02rem
        vertical-align middle

.n-description
    .cnt
        height .45rem
        ul 
            float left
            li
                float left
                position: relative;
                margin: 0 .10rem;
                line-height: .22rem;
                font-size: .12rem;
                &:after
                    position: absolute;
                    content: "";
                    top: .08rem;
                    left: -0.10rem;
                    width: .06rem;
                    height: .06rem;
                    font-size: .20rem;
                    background: #ff8587;
                    border-radius: 50%;


.n-taginfo
    padding: .09rem 0 .09rem .10rem;
    margin: .10rem
    background: #f7f7f7;

.detailScroll
    height 5.19rem

.subTitle
    padding: 0 .10rem;
    font-size: .13rem;
    color: #333;
    line-height: .21rem;

.goodTit
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical
    line-height: .18rem;
    padding-top: .10rem;
    margin: 0 .10rem .06rem;
    font-size: .14rem;
    color: #333;
    font-weight: 700;
    border-top: .01rem solid #f0f0f0;

footer
    height .5rem
    width 100%
    position fixed
    bottom 0
    left 0
    background #fff
    .foot
        padding-left .03rem
        width 100%
        height 100%
        .footLeft
            float left
            width .95rem
            height 100%
            .collection
            .cart
                position relative
                background #fff
                color #666
                font-size .12rem
                border-top: .01rem solid #ddd
                float left
                width .40rem
                height 100%
                display flex
                flex-direction column
                justify-content space-around
                align-items center
                font-weight 600
                i 
                    width .22rem
                    height .22rem
                div
                    position absolute
                    width .16rem
                    height .16rem
                    border-radius 50%
                    border 0.01rem solid #e31436
                    text-align center
                    line-height .15rem
                    color #e31436
                    background #fff
                    right .02rem
                    top .02rem
                .getCartGoodsNum
                    right .08rem

            .cart
                width .55rem
                i   
                    margin-top .02rem
        .addToCart
        .buyNow
            float left
            color #fff
            text-align center
            line-height .50rem
            width 1.385rem
            height 100%
            font-size .15rem
        .addToCart
            background #404040
        .buyNow
            background-image: linear-gradient(90deg,#ff3264 6%,red)
            
.partLine
    width 100%
    height .1rem
    background #f1f1f1



.vipGoodsDiscountInfo
    margin 0 .1rem .1rem
    padding .05rem .1rem
    background #f7f5f0;
    height .32rem
    position  relative
    font-size .12rem
    .discountLabelImg
        height 100%
        padding .02rem 0
        overflow hidden
        img
            display: inline-block;
            text-align: center;
            height: .15rem;
            vertical-align: middle;
            margin-right .05rem
    .dredgeVip
        padding: 0 .16rem 0 .10rem;
        position absolute
        right 0 
        top 0
        background: #eeebe3;
        height 100%
        text-align center
        line-height .32rem

.skuPrice
    width 100%
    padding-left .1rem
    height .5rem
    background #fff
    border-top .01rem solid #f0f0f0
    i
        font-size: .15rem;
        color: #e31436;
    span 
        font-size: .27rem;
        font-weight: 700;
        color: #e31436;
    del
        text-decoration: line-through;
        margin-left: .08rem;
        font-size: .13rem;
        color: #999;


.banner
    width 100%
    height 3rem
    // background #ff7
    background #ffffff

.promotionSaleInfo
    width 100%
    height .55rem
    background: rgba(255,26,53,.07);
    color: #e31436;
    .appDetailPrePriceUrl
        float left
        height 100%
        width 1.1rem
        margin-right .05rem
        overflow hidden
        img
            width 100%
    .wholePromotionLabel
        font-size .15rem
        line-height .55rem
        overflow hidden
        font-weight 700
        position relative
        .promotionStartTime
            position absolute        
            right .2rem
            top .1rem
            font-size: .11rem;
            color: inherit;


.detailNav
    width 100%
    height .46rem
    border-bottom 0.01rem solid #f0f0f0
    .navUl
        position relative
        width 100%
        height 100%
        padding 0 .5rem
        z-index 999
        background #fff
        ul
            display flex
            justify-content space-around
            align-items center
            height 100%
            li
                padding .05rem .07rem
                a
                    display block
                    font-size: .14rem;
                    color: #666;
                    padding .02rem
                &.active 
                    a
                        border-bottom 0.01rem solid #ff1e32
        .back
            position absolute
            left .15rem
            top .15rem
        .toHome
            position absolute
            right .15rem
            top .10rem

</style>

