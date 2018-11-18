<template>
<header class="headerCon">
    <div id="headerSearch">
        <!-- <div @click="toSearch" class="searchbanner"> -->
       <div @click.once="$router.push({ name : 'search' })" class="searchbanner">
            <svg t="1541322881460"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3176" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="30"><path d="M392.618667 621.909333c-66.346667 0-132.693333-24.106667-180.992-72.405333-48.298667-48.256-75.434667-111.616-72.405334-180.992s24.106667-132.778667 72.405334-181.034667c99.541333-99.541333 262.485333-99.541333 362.026666 0 48.256 48.256 75.434667 111.616 72.405334 181.034667s-24.149333 132.736-72.405334 180.992c-48.256 48.298667-114.645333 72.405333-181.034666 72.405333z m-2.986667-425.386666c-42.24 0-84.48 18.133333-117.674667 51.285333a171.178667 171.178667 0 0 0 0 241.365333 171.178667 171.178667 0 0 0 241.365334 0c33.194667-33.194667 51.285333-75.434667 48.256-120.661333s-18.090667-90.538667-48.256-120.704a170.88 170.88 0 0 0-123.733334-51.285333z" p-id="3177" fill="#d81e06"></path><path d="M603.818667 640c-18.090667-18.090667-18.090667-42.24 0-60.288a42.752 42.752 0 0 1 60.330666 0l181.034667 180.992c18.090667 18.090667 18.090667 42.24 0 60.330667a42.752 42.752 0 0 1-60.330667 0l-181.034666-180.992z" p-id="3178" fill="#d81e06"></path></svg>
            <span>{{ searchHot }}</span>
        </div>
        <div class="searchBtn">
            <a href="javascript:;" v-if="!!isSignIn" class="signIned" >
                <img src="https://haitao.nosdn2.127.net/vtgcByWTZlKwtnRQvhvLT170102401020_150_150.png?imageView&thumbnail=40x0&quality=75" alt="">
            </a>
            <a href="javascript:;"  v-else  class="signIn"  @click="$router.push({ name : 'signIn' })">登录</a>
            <a href="javascript:;" class="toCart">
                <svg t="1541323366405" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5139" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20"><path d="M409.6 1024c-56.4736 0-102.4-45.9264-102.4-102.4s45.9264-102.4 102.4-102.4 102.4 45.9264 102.4 102.4-45.9264 102.4-102.4 102.4z m0-153.6c-28.2112 0-51.2 22.9888-51.2 51.2s22.9888 51.2 51.2 51.2 51.2-22.9888 51.2-51.2-22.9888-51.2-51.2-51.2zM768 1024c-56.4736 0-102.4-45.9264-102.4-102.4s45.9264-102.4 102.4-102.4 102.4 45.9264 102.4 102.4-45.9264 102.4-102.4 102.4z m0-153.6c-28.2112 0-51.2 22.9888-51.2 51.2s22.9888 51.2 51.2 51.2 51.2-22.9888 51.2-51.2-22.9888-51.2-51.2-51.2zM897.9968 228.7104A69.1712 69.1712 0 0 0 844.8 204.8H217.9584l-5.0688-30.5152A87.9616 87.9616 0 0 0 128 102.4h-51.2a25.6 25.6 0 0 0 0 51.2h51.2c15.7184 0 31.7952 13.6192 34.3552 29.1328l85.5552 513.3824A87.9616 87.9616 0 0 0 332.8 768h512a25.6 25.6 0 0 0 0-51.2h-512a37.0688 37.0688 0 0 1-34.3552-29.1328l-12.6464-75.776 510.208-44.3904c39.68-3.4304 75.9296-36.9152 82.4832-76.2368l34.3552-206.1824a69.3248 69.3248 0 0 0-14.7968-56.4224z m-35.6864 47.9744l-34.3552 206.1824c-2.7136 16.1792-20.0192 32.2048-36.4032 33.6384l-514.2016 44.6976-50.8928-305.2544h618.2912c5.9904 0 11.008 2.048 14.1312 5.7856s4.352 9.0112 3.3792 14.8992z" fill="#515151" p-id="5140"></path></svg>
            </a>
        </div>
    </div>
</header>
</template>

<script>
import axios from 'utils/http'
import Search from 'views/search'
import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'

export default {

    data() {
        return {
            searchHot : null,
            searchList : null,
            display: 'none'
        }
    },
    components: {
        Search
    },

    computed : {
        ...mapGetters('signIn', ['isSignIn'])
    },

    methods: {
        toSearch() {
            this.$store.dispatch('search/change')
        }   
    },

    async beforeCreate() {
        // 获取 搜索 数据

        let _this = this

        this.searchContent = await axios({
            method: 'get',
            url: '/h5/hotKey.html',
            _this
        })

        this.searchHot = this.searchContent.body.result.keyInBox
        this.searchList = this.searchContent.body.result.keyOutBox
        // console.log(this.searchList)
    }
}

</script>

<style lang="stylus" scoped>

.headerCon
    &.fixed
        position fixed
        left 0
        top 0
    width 100%
    height .45rem
    background #fff
    #headerSearch
        padding .08rem .1rem 0
        .searchbanner
            line-height: .27rem;
            width 2.64rem
            height: .30rem;
            color: #727273;
            cursor: text;
            font-size: .13rem;
            background-color: #fff;
            text-align: left;
            border: 2px solid red;
            border-radius: 30px;
            float left
            svg
                float left
                margin 0 .05rem
        .searchBtn
            float left
            width .9rem
            height .35rem
            .signIn
                float left
                margin-left .13rem
                border .01rem solid pink
                color pink
                border-radius  .03rem
                margin-top .02rem
                padding .02rem .07rem
                font-size .12rem
            .signIned
                float left
                border-radius  50%
                width .25rem
                height .25rem
                overflow hidden
                margin-left .22rem
                margin-top .02rem
                img 
                    width 100%

                
                
            .toCart
                float right
                margin-top .03rem
</style>


