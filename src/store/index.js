import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import search from './module/search'
import backToTop from './module/backToTop'
import myCollections from './module/myCollections'
import cityPicker from './module/cityPicker'
import addToCart from './module/addToCart'
import cart from './module/cart'
import signIn from './module/signIn'


export default new Vuex.Store({
    modules:{
        search,
        backToTop,
        cityPicker,
        cart,
        addToCart,
        myCollections,
        signIn    
    }
})