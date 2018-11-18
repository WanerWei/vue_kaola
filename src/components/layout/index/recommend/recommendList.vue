<template>
    <div class="recommendList">
        <recommend-list-item :item='item' v-for="item in recommendConList" :key="item.goodsId"></recommend-list-item>
    </div>
</template>

<script>

import RecommendListItem from 'components/common/index/recommend/recommendListItem'

export default {
    props: {
        recommendConList: Array
    },
    components: {
        RecommendListItem
    }
}
</script>

<style lang="stylus" scoped>
.recommendList
    width 100%
    height auto
    background #f2f2f2
    padding .05rem
    display flex
    flex-wrap wrap
</style>

