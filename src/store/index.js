
import Vue from 'vue'
import Vuex from 'vuex'


import getters from './getters'
Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        cartList:[]
    },
    getters,
    mutations:{
        addCounter(state, payload){
            payload.count++
        },
        addToCart(state, payload){
            state.cartList.push(payload);
            
        }
    },
    actions:{
        addCart({state, commit}, payload){
            return new Promise((resolve) => {
                let product = state.cartList.find(function(item){
                    return item.iid === payload.iid
                })
                if(product){
                    commit('addCounter', product)
                    resolve('商品数量加一')
                }else{
                    payload.count = 1
                    payload.checked = true
                    commit('addToCart', payload)
                    resolve('添加新商品')
                }
            })
            
        }
    }
})

export default store