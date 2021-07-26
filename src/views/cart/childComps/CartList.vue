<template>
    <div class="CartList">
        <scroll class="content" ref="scroll">
           <cart-list-item :itemInfo="item"  v-for="(item, index) in cartlist" :key="index"></cart-list-item>
        </scroll>
        
    </div>
</template>

<script>
import scroll from '@/components/common/scroll/scroll.vue'
import CartListItem from './CartListItem.vue'
import {mapGetters} from 'vuex'
export default {
  components: { 
      scroll,
      CartListItem,
      },
    name:'cartlist',
    computed:{
        ...mapGetters(['cartlist'])
        
    },
    activated(){
        // console.log('123')
        this.$refs.scroll.refresh()

    }
}
</script>

<style scoped>


.CartList{
    height: calc(100vh - 93px);
}
.content{
    height: 100%;
    overflow: hidden;
}
</style>