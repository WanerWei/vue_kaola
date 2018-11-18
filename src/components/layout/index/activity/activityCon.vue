<template>
    <div>
        <activity-head :activityHeader="activityHeader"></activity-head>
        <!-- <activity-list :activityListHead="activityListHead" :activityListArr="activityListArr"></activity-list> -->
        <activity-list :activityListHead="item.imageUrl" :activityListArr="item.itemList" v-for="item in activityArr" :key="item.biMark"></activity-list>
    </div>
</template>

<script>
import axios from 'utils/http'
import activityHead from 'components/layout/index/activity/activityHeader'
import activityList from 'components/common/index/activity/activityList'

export default {
    data() {
        return {
            activityHeader: '',
            activityListHead: '',
            activityListArr: [],
            activityArr: [],
            activityArrFir: null
        }
    },
    components: {
        activityHead,
        activityList
    },
    async beforeCreate() {
        // 精品活动

        let _this = this
        let activityContent = (await axios({
            method: 'get',
            url: '/home/index.html',
            params: {
                pageNo : 2
            },
            _this
        })).data.home

        this.activityHeader = activityContent[0].imageUrl
        // this.activityListHead = activityContent[1].imageUrl
        // this.activityListArr = activityContent[1].itemList

        this.activityArrFir = activityContent[1]

        this.activityArr = activityContent.slice(1)
    }
}
</script>


<style lang="stylus" scoped>

</style>

