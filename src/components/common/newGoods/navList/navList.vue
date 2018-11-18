<template>

    <router-link tag="li" :to="{ name: `${this.item.name}`, query: {name: this.item.name}}" active-class="active">
    <!-- <li @click="tabSwitch($event)"> -->
        <i>
            <img :src="item.activeIcon" alt="">
        </i>
        <p class="">{{ item.name }}</p>
    <!-- </li> -->
    </router-link>
    
</template>

<script>
export default {
    props : {
        item : Object,
        navToArr : ['dailyBlockbuster','newArrival','fashionClothes','beautyDress','qualityLife','momBaby','digitalElectric','visitShop','liveShot','newGoodsRank']
    },

    methods: {
        tabSwitch(e) {
            this.$router.push({name: `${this.item.name}`, query: {name: this.item.name}})
        }
    }
}

</script>

<style lang="stylus" scoped>
.active
    p
        color #fff
        
i
    display block
    width .28rem
    height .28rem
    overflow hidden
    img
        width 100%
p
    color: rgb(102, 102, 102)
    font-size .12rem
</style>


