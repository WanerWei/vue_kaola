<template>
    <div class="icon-slider">
        <ul>
            <icon-slider-list-item :item='item' v-for="item in iconSliderList" :key="item.biMark"></icon-slider-list-item>
        </ul>
    </div>
</template>

<script>
import IconSliderListItem from 'components/common/icon-slider-list'

export default {
    props : {
        iconSliderList : Array
    },
    components: {
        IconSliderListItem
    }
}
</script>

<style lang="stylus" scoped>
.icon-slider
    width 100%
    height 1.72rem
    background #fff
</style>