<template>
    <div class="m-hotwordwrap">
        <h3>热门搜索</h3>
        <div class="m-hotwordlist">
            <a href="javascript:;" :class="{ 'active' : item.isBold }"  v-for="item in searchList" :key="item.showName">{{ item.showName || item.name }}</a>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        searchList: [Array, String]
    }
};

</script>

<style lang="stylus" scoped>
.m-hotwordwrap
    h3
        height: .14rem;
        margin: .15rem 0 .1rem;
        line-height: .14rem
        font-size: .14rem
        text-indent: .12rem
        color: #666;
        font-weight 400
    .m-hotwordlist
        overflow: auto;
        width: 100%;
        padding: 0 .11rem;
        a
            display: block;
            float: left;
            width: auto;
            height: .24rem;
            margin: 0 .06rem .08rem 0;
            padding: .05rem .12rem;
            border: .01rem solid #dcdcdc;
            border-radius: .04rem;
            line-height: .12rem
            font-size: .12rem
            color: #333;
            &.active
                border-color: #ff8587;
                color: #ff8587;
</style>


