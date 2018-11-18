<template>
    <div class="dailyRobTit">
        <img :src="dailyRobTit" alt="">
    </div>
</template>

<script>
export default {
    props : {
        dailyRobTit : String
    }
}

</script>

<style lang="stylus" scoped>
.dailyRobTit
    width 3.75rem
    height .38rem
    overflow hidden
    img 
        width 100%
</style>


