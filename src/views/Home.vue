<template>
  <div class="home">
    <div class="homeWrap">
      <dowloadbox v-if="$route.name !== 'myCollections'"></dowloadbox>
      <!-- <index></index> -->
      <router-view></router-view>
      <vue-progress-bar></vue-progress-bar>
      <!-- <my-collections></my-collections> -->
      <!-- <good-detail></good-detail> -->
      <!-- <new-goods-index></new-goods-index> -->
    </div>
    <!-- <search></search> -->
    <to-top></to-top>
  </div>

</template>

<script>

import Dowloadbox from '@/components/layout/dowloadbox'
import ToTop from 'components/layout/index/backToTop/backToTop'

import Index from './index/Index'
import newGoodsIndex from './newGoods/newGoodsIndex'
import GoodDetail from 'components/layout/goodDetail/goodDetail'
import MyCollections from 'views/myCollections/myCollections'


import Search from './search.vue'

export default {
  components: {
    Dowloadbox,
    Index,
    Search,
    newGoodsIndex,
    GoodDetail,
    MyCollections,
    ToTop
  },

  mounted() {

  },
  created() {
    this.$router.beforeEach((to, from, next) => {
      this.$Progress.start()
      next()
    })
    
    this.$router.afterEach((to, from) => {
      this.$Progress.finish()
    })
  }
}
</script>

<style lang="stylus" scoped>
.home
  // position relative
  height 6.67rem
  width 100%
  // overflow-y scroll
  background #fff
</style>
