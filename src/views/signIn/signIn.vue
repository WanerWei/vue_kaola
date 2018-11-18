<template>
    <div id="signIn">
        <div class="signInTit">
            <i class="back" @click.once="$router.back()">
                <svg t="1541493588317" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1090" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20"><path d="M672 160c0 8.2-3.1 16.4-9.4 22.6L333.3 512l329.4 329.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0l-352-352c-12.5-12.5-12.5-32.8 0-45.3l352-352c12.5-12.5 32.8-12.5 45.3 0 6.2 6.2 9.3 14.4 9.3 22.6z" p-id="1091" fill="#8a8a8a"></path></svg>
            </i>
            <span>用户登录</span>
        </div>
        <div class="signInBox">
            <div class="signBg">
                <img src="signIn_bg.png" alt="">
            </div>
            <div class="signCon">
                <input type="text" class="name" v-model="name" placeholder="网易邮箱账号">
                <input type="password" class="passWord" v-model="password" placeholder="密码">
                <a class="toSignIn" @click="toSignIn">登录</a>
                <div class="signBot">
                    <div>
                        <input type="checkBox" name="" id="rememberMe">
                        <label for="remeberMe"> 10天免登陆</label>
                    </div>
                    <span>忘记密码?</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import { mapActions } from 'vuex'
import { Toast } from 'mint-ui'

import http from 'utils/http'

export default {
    data() {
        return {
            name : '',
            password : ''
        }
    },

    methods : {
        async toSignIn() {
            let result = await http({
                url : '/api/user/signIn',
                method: 'post',
                headers : {
                    'content-type' : 'application/x-www-form-urlencoded'
                },
                data : `userName=${this.name}&passWord=${this.password}`
            })

            if(!!result.ret) {
                this.$store.dispatch('signIn/handleSignIn', 1)
                let _this = this

                Toast({
                    message: '登录成功 ^_^',
                    position: 'middle',
                    duration: 1000
                });

                setTimeout(function() {
                    _this.$router.back()
                },1000)

            }else {
                Toast({
                    message: '用户名或者密码错误 >_<',
                    position: 'middle',
                    duration: 2000
                });
            }

        }
    }
}
</script>

<style lang="stylus" scoped>

.signCon
    width 3.75rem
    height 2rem
    padding 0 .15rem
    .name
    .passWord
        float left
        height: .44rem;
        width: 100%;
        padding: .12rem .40rem .12rem .10rem;
        line-height: .20rem;
        box-sizing: border-box;
        border-radius: 0;
        font-size: .14rem;
        background-color: #f7f7f7;
        border 0
        margin-bottom .15rem
        border-radius .06rem
    .toSignIn
        margin-bottom .15rem
        float left
        height: .45rem;
        background-color: #111;
        border-radius: .03rem;
        font-weight: bold;
        font-size: .15rem;
        width: 100%;
        height: .44rem;
        text-align: center;
        color: #fff;
        font-size: .18rem;
        line-height: .44rem
    .signBot
        width 100%
        float left
        color #999
        display flex
        justify-content space-between
        align-items center
        input
            vertical-align middle
        


        

.signBg
    margin-top .15rem
    width 100%
    height .7rem
    padding .15rem 1rem
    overflow hidden
    img 
        width 100%

#signIn
    height 100%
    width 100%
    .signInTit
        width 100%
        height .45rem
        text-align center
        line-height .45rem
        position relative
        font-size .18rem
        border-bottom 0.01rem solid #f0f0f0
        .toHome 
            position absolute 
            right .2rem
            top .06rem
            height .32rem
        .back
            position absolute 
            left .2rem
            top .05rem
            height .32rem

.signInBox
    width 100%
    height 6.22rem
    background #ffffff

</style>


