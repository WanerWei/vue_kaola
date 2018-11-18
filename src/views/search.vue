<template>
    <div class="searchMasking" :style="{ display: getStyle }">
        <form action="javascript:;">
            <div class="m-searchbanner">
                <!-- <i class="searchBack" @click="changeStyle"> -->
                <!-- 路由的方式更简单，状态管理也可以做，但复杂了许多 -->
                <i class="searchBack" @click.once="$router.back()">
                    <svg t="1541493588317" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1090" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20"><path d="M672 160c0 8.2-3.1 16.4-9.4 22.6L333.3 512l329.4 329.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0l-352-352c-12.5-12.5-12.5-32.8 0-45.3l352-352c12.5-12.5 32.8-12.5 45.3 0 6.2 6.2 9.3 14.4 9.3 22.6z" p-id="1091" fill="#8a8a8a"></path></svg>
                </i>
                <div class="searchInput">
                    <i>
                        <svg t="1541248521598" fill="#898989" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1102" xmlns:xlink="http://www.w3.org/1999/xlink" width="17" height="17"><path d="M898.036124 852.92674 748.500389 703.389982c49.522903-62.73788 79.244832-142.968156 79.244832-230.408647 0-200.905706-156.887167-363.772051-350.416881-363.772051S126.911458 272.075629 126.911458 472.981335s156.887167 363.772051 350.416881 363.772051c78.338183 0 150.670581-26.688849 209.025641-71.782883l149.819191 149.819191L898.036124 852.92674zM476.93232 751.116983c-147.9711 0-267.924075-124.526131-267.924075-278.135648s119.953999-278.135648 267.924075-278.135648 267.924075 124.526131 267.924075 278.135648S624.903419 751.116983 476.93232 751.116983z" p-id="1103"></path></svg>
                    </i>
                    <input type="text"  v-focus v-model="key" :placeholder="searchHot">
                    <i v-if="key" @click="empty">
                        <svg t="1541494753319" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2762" xmlns:xlink="http://www.w3.org/1999/xlink" width="15" height="15"><path d="M512 67C266.2 67 67 266.2 67 512s199.2 445 445 445 445-199.2 445-445S757.8 67 512 67z m279.3 724.3c-36.3 36.3-78.5 64.8-125.6 84.7-48.7 20.6-100.4 31-153.7 31s-105.1-10.4-153.7-31c-47-19.9-89.3-48.4-125.6-84.7-36.3-36.3-64.8-78.5-84.7-125.6-20.6-48.7-31-100.4-31-153.7s10.4-105.1 31-153.7c19.9-47 48.4-89.3 84.7-125.6 36.3-36.3 78.5-64.8 125.6-84.7 48.7-20.6 100.4-31 153.7-31s105.1 10.4 153.7 31c47 19.9 89.3 48.4 125.6 84.7 36.3 36.3 64.8 78.5 84.7 125.6 20.6 48.7 31 100.4 31 153.7s-10.4 105.1-31 153.7c-19.9 47.1-48.4 89.3-84.7 125.6z m-84.8-438.4L547.4 512l159.1 159.1-35.4 35.4L512 547.4 352.9 706.5l-35.4-35.4L476.6 512 317.5 352.9l35.4-35.4L512 476.6l159.1-159.1 35.4 35.4z" fill="#8a8a8a" p-id="2763"></path></svg>
                    </i>
                </div>
                <button type="submit" class="u-btn-search">搜索</button>
            </div>
        </form>
        <search-host-list v-if="!key" :searchList="searchList"></search-host-list>
        <!-- 注意是双 判断 -->
        <search-associated-list v-if="resultList && key" :keyList="resultList"></search-associated-list>
    </div>
</template>

<script>
import SearchHostList from 'components/common/search/searchHostList'
import SearchAssociatedList from 'components/common/search/searchAssociatedList'

import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'

import http from 'utils/http'


export default {
    data() {
        // 声明并接受 v-model 双数据绑定的值
        return {
            searchHot : '',
            searchList: '',
            key: '',
            // 搜索联想获取结果
            resultList : '',
        }        
    },

    computed: {
        // 状态管理，动态获取 display样式
        ...mapGetters('search',['getStyle'])
    },

    // 自定义指令
    directives: {
        focus: {
            // 指令的定义
            update: function (searchMasking) {
                searchMasking.focus()
            }
        }
    },

    async beforeCreate() {
        // 获取 搜索 数据
        let searchContent = await http({
            method: 'get',
            url: '/h5/hotKey.html'
        })

        this.searchHot = searchContent.body.result.keyInBox
        this.searchList = searchContent.body.result.keyOutBox

    },

    // async mounted() {
        // 获取 搜索结果
        // this.resultList = (await http({
        //     url: '/v250/suggest.html',
        //     method: 'get',
        //     params: {
        //         "key" : this.key
        //     }
        // })).body.keywords

        // console.log(this.resultList)

    // },


    methods : {
        empty() {
            this.key = ''
        },
        changeStyle() {
            this.$store.dispatch('search/change')
        }
    },

    components: {
        SearchHostList,
        SearchAssociatedList
    },


    // 这一步其实不需要做，因为v-model双数据绑定内部做了 watch
    watch : {
        // 监听 key 的变化
        async key (keyWord, oldValue) {
            this.key = keyWord

            this.resultList = (await http({
                url: '/v250/suggest.html',
                method: 'get',
                params: {
                    "key" : this.key
                }
            })).body.keywords

        },
    }
}

</script>

<style lang="stylus" scoped>
.searchMasking
    position fixed
    left 0
    top 0
    z-index 1000
    background #fff
    height 100%
    width 100%
    .m-searchbanner
        width 100%
        padding .05rem .08rem
        height .44rem
        display flex
        align-items center
        .searchBack
            float left
            margin-top .04rem
        .searchInput
            margin-left .05rem
            float left
            width 2.92rem
            background #ebebeb
            border-radius .05rem
            height .28rem
            i
                float left
                svg
                    margin-left .10rem
                    margin-top .05rem
            input 
                float left
                border-width 1px
                background #ebebeb
                width 2.32rem
                height .28rem
                border none
                padding 0 .05rem
                font-size .12rem
                color #333
        .u-btn-search
            float left
            border none
            background #fff
            color #999
            font-size .14rem
            margin-left .1rem
</style>


