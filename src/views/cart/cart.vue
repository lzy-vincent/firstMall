<template>
    <div class="cart"> 
        <nav-bar class="nav"><div slot="center">购物车({{length}})</div></nav-bar>
        <!-- <scroll class="scroll"><cart-list class="content2"></cart-list></scroll> -->
        <cart-list></cart-list>

        <cart-bottom-bar></cart-bottom-bar>
    </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar.vue'


import { mapGetters } from 'vuex'
import CartList from './childComps/CartList.vue'
import CartBottomBar from './childComps/CartBottomBar.vue'

export default {
    name:'cart',
    components:{
        NavBar,
        CartList,
        CartBottomBar,
        
    },
    computed:{
        ...mapGetters({ length : 'listlength'})
    }
}
</script>

<style scoped>
.nav{
    background-color: var(--color-tint);
    color:#fff;
    /* font-weight:500; */
}
/* .cart{
    height: 100vh;
}
.scroll{
    height: calc(100% - 93px);
    overflow: hidden;
} */

</style>