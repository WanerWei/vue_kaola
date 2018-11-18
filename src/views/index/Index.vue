<template>
    <div class="goods-bg">
        <Header :style="headerFixed"></Header>
        <index-main></index-main>
    </div>
</template>

<script>
import Header from '@/components/layout/index/header/header'
import IndexMain from '@/components/layout/index/index-main'

import BScroll from 'better-scroll'

export default {
    data() {
        return {
            headerFixed : {
                position : 'static',
                left : 0,
                top : 0,
            }
        }
    },
    components: {
        Header,
        IndexMain,
    },

    mounted () {



        // bScroll.on('scroll', function(){
        //     let y = this.y
        //     console.log(y)

        //     if(y <= -52){
        //         this.headerFixed.position = "fixed"
        //     }
        // })
    }
}
</script>

<style lang="stylus" scoped>

</style>


