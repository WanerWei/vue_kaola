<template>
    <div class="m-associatewrap">
        <div class="m-associatelist">
            <a href="javascript:;" v-for="item in keyList" :key="item.levelOneKeyWords">
                <div>{{ item.levelOneKeyWords}}</div>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        keyList: [Array, String]
    }
}
</script>

<style lang="stylus" scoped>
.m-associatewrap
    position: relative;
    height: 100%;
    overflow: hidden;    
    .m-associatelist
        width: 100%;
        padding-bottom: 55px;
        a
            display: block;
            width: 100%;
            height: 45px;
            padding-left: 10px;
            color #333
            div
                height: .45rem;
                width: 100%;
                padding: .15rem 0;
                border-bottom: .01rem solid #dcdcdc;
                line-height: .14rem;
                font-size: .14rem;
                text-indent: .01rem;
                margin-top: -.01rem;
                color: #333;
</style>


