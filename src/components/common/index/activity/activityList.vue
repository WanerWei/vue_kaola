<template>
    <article class="activityCon">
        <div class="activityHead">
            <a href="javascript:;">
                <img :src="activityListHead" alt="">
            </a>
        </div>
        <div class="activityListArr">
            <ul>
                <div v-if="activityListArr[0].appImgUrlList">
                    <activity-list-item :item="item2.appImgUrlList" :currentPrice="item2.currentPrice" :originalPrice="item2.originalPrice" :benefitPointList="item2.benefitPointList" :title="item2.title"  v-for="item2 in activityListArr" :key="item2.goodsId"></activity-list-item>
                </div>
                <div v-else>
                    <activity-list-item :descriptionOne="item.description_1" :descriptionTwo="item.description_2" :imgUrl="item.imgUrl"  v-for="item in activityListArr" :key="item.goodsId"></activity-list-item>
                </div>
                <li class="seeMore">
                    <a href="javasctipt:;">
                        <img src="https://haitao.nos.netease.com/d1e92de4-e260-4f05-a8ab-b9dd30f38073.png" alt="">
                    </a>
                    <p>查看更多</p>
                </li>
            </ul>
        </div>
    </article>
</template>

<script>

import ActivityListItem from './activityListItem'

export default {
    props: {
        activityListHead: String,
        activityListArr: Array
    },
    // data() {
    //     activityListArr2: this.activityListArr
    // },
    components: {
        ActivityListItem
    },
    computed: {

    },

    mounted() {
        // console.log(this.activityListArr)
    }
}

</script>

<style lang="stylus" scoped>
.activityCon
    height 3.65rem
    .activityHead
        width 100%
        height 1.875rem
        a
            display block
            height 100%
            width 100%
            overflow hidden
            img
                width 100%
    .activityListArr
        overflow scroll
        width 100%
        height 2.08rem
        position: relative;
        top: -.34rem;
        padding: 0 .15rem
        ul
            width 9.91rem;
            display flex
            flex-wrap nowrap
            overflow visible
            background #fff
            margin-top .10rem
            .seeMore
                width 1.06rem
                height 1.84rem
                float left
                border 1px solid #ececec
                padding .5rem 0
                a
                    display block
                    width 100%
                    height .7rem            
                    overflow hidden
                    padding 0 .12rem
                    img
                        width 100%
                p
                    text-align center
                    color #696969

        
</style>


