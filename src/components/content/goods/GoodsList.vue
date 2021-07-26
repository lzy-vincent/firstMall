<template>
    <div class="goods">
        <GoodsListItem v-for="(item, index) in goods" :key="index" :goodsitem="item" class="item"></GoodsListItem>
    </div>
</template>

<script>

import GoodsListItem from './GoodsListItem'

export default {
    name:'GoodList',
    components:{
        GoodsListItem
    },
    props:{
        goods:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style scoped>
.goods{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding:2px
}
.goods .item{
    width: 48%;

}

</style>