<template>
    <div id="collections">
        <div class="myCollectionTit">
            <i class="back" @click="$router.back()">
                <svg t="1541493588317" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1090" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20"><path d="M672 160c0 8.2-3.1 16.4-9.4 22.6L333.3 512l329.4 329.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0l-352-352c-12.5-12.5-12.5-32.8 0-45.3l352-352c12.5-12.5 32.8-12.5 45.3 0 6.2 6.2 9.3 14.4 9.3 22.6z" p-id="1091" fill="#8a8a8a"></path></svg>
            </i>
            <span>我的收藏</span>
            <i @click="$router.push({ name : 'index' })" class="toHome">
                <svg t="1541681314579" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2739" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32"><path d="M744 536c-8.848 0-16 7.152-16 16l0 240-128 0 0-176c0-8.848-7.152-16-16-16l-160 0c-8.848 0-16 7.152-16 16l0 176-128 0 0-240c0-8.848-7.152-16-16-16s-16 7.152-16 16l0 256c0 8.848 7.152 16 16 16l160 0c8.848 0 16-7.152 16-16l0-176 128 0 0 176c0 8.848 7.152 16 16 16l160 0c8.848 0 16-7.152 16-16l0-256C760 543.152 752.848 536 744 536zM821.6 508.688 515.312 202.416c-6.256-6.256-16.368-6.256-22.624 0L186.4 508.688c-6.256 6.256-6.256 16.368 0 22.624s16.384 6.256 22.624 0L504 236.352l294.96 294.96c6.256 6.256 16.384 6.256 22.64 0S827.84 514.944 821.6 508.688zM648 296l48 0 0 48c0 8.832 7.152 16 16 16s16-7.168 16-16l0-64c0-8.832-7.152-16-16-16l-64 0c-8.848 0-16 7.168-16 16S639.152 296 648 296z" p-id="2740" fill="#ff1e32"></path></svg>
            </i>
        </div>
        <div class="collectionBox">
            <div class="collectionWrap">
                <collection-list :item="item" v-for="item in collections" :key="item.goodsId"></collection-list>
            </div>
        </div>
    </div>
</template>

<script>

import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'
// import { scroll } from 'utils/scroll'
import BScroll from 'better-scroll'

import CollectionList from 'components/common/collections/collectionList'

export default {
    // data() {
    //     return {
    //         collections: []
    //     }
    // },
    components: {
        CollectionList
    },

    computed: {
        ...mapState('myCollections', {
            collections: "myCollections"
        })
    },

    created() {
    //     // console.log(this.$store)
    //     ...mapState('myCollections', {
    //         collections: "myCollections"
    //     })
    },

    mounted() {

        // this.$nextTick(() => {
        //     // scroll({
        //     //     el: '.collectionBox'
        //     // })
        //     new BScroll('.collectionBox',{
        //         probeType:1
        //     })
        // })
    }
}
</script>

<style lang="stylus" scoped>
#collections
    height 100%
    width 100%
    .myCollectionTit
        width 100%
        height .45rem
        text-align center
        line-height .45rem
        position relative
        font-size .18rem
        .toHome 
            position absolute 
            right .2rem
            top .06rem
            height .32rem
        .back
            position absolute 
            left .2rem
            top .05rem
            height .32rem

.collectionBox
    width 100%
    height 6.22rem
    background #f0f0f0
    .collectionWrap
        padding-top .1rem
        height 2rem
        width 100%

</style>


