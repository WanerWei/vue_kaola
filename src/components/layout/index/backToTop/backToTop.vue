<template>
    <div class="toTop" :style="{ display : getStyle }">
        <i>
            <svg t="1541667823952" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1093" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16"><path d="M910.222222 796.444444c-17.066667 0-34.133333-5.688889-45.511111-17.066666L551.822222 409.6c-11.377778-5.688889-17.066667-11.377778-34.133333-11.377778-5.688889 0-22.755556 5.688889-28.444445 11.377778l-329.955555 364.088889c-22.755556 22.755556-56.888889 22.755556-79.644445 5.688889-22.755556-22.755556-22.755556-56.888889-5.688888-79.644445l329.955555-364.088889c28.444444-34.133333 73.955556-51.2 119.466667-51.2s85.333333 22.755556 119.466666 56.888889l312.888889 364.088889c22.755556 22.755556 17.066667 56.888889-5.688889 79.644445-11.377778 5.688889-28.444444 11.377778-39.822222 11.377777z" p-id="1094" fill="#e6e6e6"></path></svg>
        </i>
        <span class="txt" @click.self ="toTop">顶部</span>
    </div>
</template>

<script>

import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'

export default {
    data() {
        return {
            gotoTop :false
        }
   },
    methods: {
        toTop() {
            this.$store.dispatch('backToTop/goToTop')                        
        }
    },

    computed: {
        ...mapGetters('backToTop', ["getStyle"])
    }
}
</script>

<style lang="stylus" scoped>
.toTop
    position fixed
    bottom .15rem
    right .3rem
    border-radius 50%
    width .4rem
    height .4rem
    background rgba(0,0,0,.4)
    color #fff
    font-size .12rem
    .txt
        display block
        position absolute
        width .3rem
        text-align center
        line-height .3rem
        height .3rem
        left .05rem
        top .10rem
        opacity .8
    i
        position absolute
        left .11rem
        top .02rem
</style>


