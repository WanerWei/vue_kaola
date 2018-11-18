<template>
    <article class="activityHeader">
        <a href="javascript:;">
            <img :src="activityHeader" alt="">
        </a>
    </article>
</template>

<script>
export default {
    props: {
        activityHeader: String
    }
}
</script>

<style lang="stylus" scoped>
.activityHeader
    width 100%
    height .74rem
    a
        display block
        height 100%
        width 100%
        overflow hidden
        img
            width 100%
</style>


