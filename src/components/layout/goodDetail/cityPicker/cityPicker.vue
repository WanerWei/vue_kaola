<template>
    <div class="cityPick" :style="{ display : getStyle }">
        <div class="cityPicker">
            <div class="pickTit">
                <div class="cancle" @click="cancle"><span>取消</span></div>
                <div class="compelete" @click="compelete"><span>完成</span></div>
            </div>
            <div class="addrbox">
                <div class="pickbox">
                    <mt-picker :slots="slots" @change="onValuesChange"></mt-picker>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import Vue from 'vue'
import http from 'utils/http'

import _ from 'lodash'
import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'
import { Picker } from 'mint-ui';
Vue.component(Picker.name, Picker);

export default {
    
    methods: {
        
        // 选择城市时，动态获取被选择的城市
        onValuesChange(picker, values) {
            let _this = this
            this.$nextTick(() => {
                _this.provinceCurrentName = values[0]
                _this.cityCurrentName = values[1]
                _this.districtCurrentName = values[2]
                _this.values = values
            })

            // console.log(values)
            // console.log(this.provinceCurrentName, this.cityCurrentName, this.districtCurrentName)
        },

        cancle() {
            this.$store.dispatch('cityPicker/change',"none")
        },

        compelete() {
            // 触发 选择城市的 状态管理
            this.$store.dispatch('cityPicker/chooseCity', this.values)

            this.$store.dispatch('cityPicker/change',"none")
        }
    },

    data() {
        return {
            values : '',
            // 省
            provinceNameList : [],
            provinceCodeList : [],
            provinceCurrentName : '',
            provinceCurrentCode: '',
            // 市
            cityNameList : [],
            cityCodeList : [],
            cityCurrentName : '',
            cityCurrentCode: '',
            // 区
            districtNameList : [],
            districtCodeList : [],
            districtCurrentName : '',
            // districtCurrentCode: '',
            slots: [
                {
                    flex: 1,
                    // 这样直接赋值是不行的
                    // 因为此时的values不具有响应式
                    // 官方解释: Vue 不能检测到对象属性的添加或删除。
                    // values: this.provinceNameList,
                    values: [],
                    className: 'slot1',
                    textAlign: 'center'
                }, {
                    divider: true,
                    content: '-',
                    className: 'slot2'
                }, {
                    flex: 1,
                    values: [],
                    className: 'slot3',
                    textAlign: 'center'
                },
                {
                    divider: true,
                    content: '-',
                    className: 'slot4'
                }, {
                    flex: 1,
                    values: [],
                    className: 'slo5',
                    textAlign: 'center'
                }
            ]
        };
    },
    
    async mounted(){

        // 获取  省 数据 
        let provinces = (await http({
            method: 'post',
            url : '/geography/get.html',
            headers: {
                "content-Type" : "application/x-www-form-urlencoded",
            },
            data: 'level=1&code='
        })).body.list

        let _this = this

        // 拿到 province 列表 和 code列表
        _.forEach(provinces, function(value, key) {
            _this.provinceNameList.push(value.name);
            _this.provinceCodeList.push(value.code);
        })

        // 手动更新 非响应式 的data数据
        this.slots[0].values = this.provinceNameList
    },

    computed : {
        ...mapGetters('cityPicker',['getStyle'])
    },

    watch: {
        // 监听 新选择的 城市
         async provinceCurrentName (newValue) {
            //  获取当前城市的下标
            let provinceIndex = this.provinceNameList.lastIndexOf(newValue)
            // 根据下标 获取当前城市的 code
            this.provinceCurrentCode = this.provinceCodeList[provinceIndex]
            // 获取到 code 后
            if(!!this.provinceCurrentCode) {
                // 先清空 市 的城市列表
                this.cityNameList.splice(0,this.cityNameList.length)
                this.cityCodeList.splice(0,this.cityCodeList.length)

                // 获取 当前省 的 市
                let cities = (await http({
                    method: 'post',
                    url : '/geography/get.html',
                    headers: {
                        "content-Type" : "application/x-www-form-urlencoded",
                    },
                    data: `level=2&code=${ this.provinceCurrentCode }`
                })).body.list || []
        
                let _this = this
                // 拿到 city列表 和 code列表
                _.forEach(cities, function(value, key) {
                    _this.cityNameList.push(value.name);
                    _this.cityCodeList.push(value.code);
                })
                // 先清空当前的 列表
                this.slots[2].values.splice(0,this.slots[2].values.length)
                // 手动更新 非响应式 的data数据
                this.slots[2].values.push(...this.cityNameList)

            }
        },

        async cityCurrentName(newValue) {
            let cityIndex = this.cityNameList.lastIndexOf(newValue)
            this.cityCurrentCode = this.cityCodeList[cityIndex]

            if(!!this.cityCurrentCode) {

                this.districtNameList.splice(0,this.districtNameList.length)

                let districts = (await http({
                    method: 'post',
                    url : '/geography/get.html',
                    headers: {
                        "content-Type" : "application/x-www-form-urlencoded",
                    },
                    data: `level=3&code=${ this.cityCurrentCode }`
                })).body.list || []
        
                let _this = this
        
                // 拿到 city列表 和 code列表
                _.forEach(districts, function(value, key) {
                    _this.districtNameList.push(value.name);
                    // _this.districtCodeList.push(value.code);
                })
        
                // 先清空当前的 列表
                this.slots[4].values.splice(0,this.slots[4].values.length)
                // 手动更新 非响应式 的data数据
                this.slots[4].values.push(...this.districtNameList)
            }
        },

        // districtCurrentName(newValue) {
        //     let districtIndex = this.districtNameList.lastIndexOf(newValue)
        //     this.districtCurrentCode = this.districtCodeList[districtIndex]
        // }
    }
}

</script>

<style lang="stylus" scoped>
.cityPick
    width 100%
    height 2.46rem
    position fixed
    bottom 0
    left 0
    background #fff
    .pickTit
        width 100%
        height .40rem
        background #dedede
        display flex
        justify-content space-between
        .cancle
        .compelete
            width 1rem
            height 100%
            text-align center
            line-height .4rem
            color: #2383f6;
            font-size: 14px;

</style>


