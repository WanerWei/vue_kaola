<template>
    <div class="dailyRobCon">
        <!-- <div class="dailyRobTop">
            <div class="dailyRobTopL">
                <p class="Tit">
                    <span class="name">{{ dailyRobCon[0].name }}</span>
                    <span class="benefitPoint">{{ dailyRobCon[0].benefitPoint }}</span>
                </p>
                <div class="dailyRobTopLC">
                    <div class="cLeft">
                        <div class="">
                            <img :src="dailyRobCon[0].imageOne" alt="">
                        </div>
                        <p>
                            <span class="currentOnePrice">￥{{ dailyRobCon[0].currentOnePrice }}</span>
                            <span class="originalOnePrice">￥{{ dailyRobCon[0].originalOnePrice }}</span>
                        </p>
                    </div>
                    <div class="cRight">
                        <div class="">
                            <img src="" alt="">
                        </div>
                        <p>
                            <span class="currentOnePrice">￥</span>
                            <span class="originalOnePrice">￥</span>
                        </p>
                    </div>
                </div>
            </div>
        </div> -->
        <div class="dailyRobBot">
            <div class="dailyRobBotC">
                <div class="dailyRobBotT">
                    <p class="name">{{ dailyRobDetail.name1 }}</p>
                    <p class="benefitPoint">{{ dailyRobDetail.benefitPoint1 }}</p>
                </div>
                <div class="dailyRobBotB">
                    <img :src="dailyRobDetail.imgSrc1" alt="" >
                </div>
            </div>
            <div class="dailyRobBotC">
                <div class="dailyRobBotT">
                    <p class="name">{{ dailyRobDetail.name2 }}</p>
                    <p class="benefitPoint">{{ dailyRobDetail.benefitPoint2 }}</p>
                </div>
                <div class="dailyRobBotB">
                    <img :src="dailyRobDetail.imgSrc2" alt="" >
                </div>
            </div>
            <div class="dailyRobBotC">
                <div class="dailyRobBotT">
                    <p class="name">{{ dailyRobDetail.name3 }}</p>
                    <p class="benefitPoint">{{ dailyRobDetail.benefitPoint3 }}</p>
                </div>
                <div class="dailyRobBotB">
                    <img :src="dailyRobDetail.imgSrc3" alt="" >
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props : {
        dailyRobCon : Array
    },

    computed: {
        dailyRobDetail() {
            return {
                name1 : this.dailyRobCon[2] && this.dailyRobCon[2].name || '',
                name2 : this.dailyRobCon[2] && this.dailyRobCon[3].name || '',
                name3 : this.dailyRobCon[2] && this.dailyRobCon[4].name || '',
                benefitPoint1 : this.dailyRobCon[3] && this.dailyRobCon[2].benefitPoint || '',
                benefitPoint2 : this.dailyRobCon[3] && this.dailyRobCon[3].benefitPoint || '',
                benefitPoint3 : this.dailyRobCon[3] && this.dailyRobCon[4].benefitPoint || '',
                imgSrc1 : this.dailyRobCon[4] && this.dailyRobCon[2].imageOne || '',
                imgSrc2 : this.dailyRobCon[4] && this.dailyRobCon[3].imageOne || '',
                imgSrc3 : this.dailyRobCon[4] && this.dailyRobCon[4].imageOne || '',
            }
        }
    }
}

</script>

<style lang="stylus" scoped>
@import "~styles/ellipsis.styl"

.name
.benefitPoint
    ellipsis 1.25rem 1
    text-align center
    color: rgb(51, 51, 51);
.name
    font-weight: 700;
    font-size .16rem
.benefitPoint
    font-weight: 100;
    font-size .12rem
    
.dailyRobCon
    width 3.75rem
    // height 3.24rem
    height 1.80rem
    .dailyRobTop
        width 50%
        height 1.54rem
    .dailyRobBot
        width 100%
        height 1.80rem
        padding-top .1rem
    .dailyRobBotC
        float left
        width 33.3%
        height 100%
        border-right .01rem solid #f0f0f0
        display flex
        flex-direction column
        justify-content center
        align-items center
        img 
            width .77rem
            height .77rem
         
</style>


