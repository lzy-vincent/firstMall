<template>
    <div class="goodsitem" @click="itemclick">
        
        <img :src="showImage" alt="" @load="imgload">
        <div class="goods-info">
            <p>{{goodsitem.title}}</p>
            <span class="price">{{goodsitem.price}}</span>
            <span class="collect">{{goodsitem.cfav}}</span>
        </div>
        
        
    </div>
</template>

<script>
export default {
    name:'GoodListItem1',
    props:{
        goodsitem:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    methods:{
        imgload(){
            this.$bus.$emit('itemimgload')
        },
        itemclick(){
            this.$router.push('/detail/' + this.goodsitem.iid)
            // console.log(this.$route)
        }
    },
    computed:{
        showImage() {
            return  this.goodsitem.img||this.goodsitem.image||this.goodsitem.show.img
        }
    }
}
</script>

<style scoped>
.goodsitem{
    position: relative;
    padding-bottom: 40px;
}
.goodsitem img{
    width: 100%;
    border-radius: 5px;
}
.goods-info{
    font-size: 12px;
    position: absolute;
    overflow: hidden;
    bottom: 5px;
    left: 0;
    right: 0;
    text-align: center
}
.goods-info p{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
}

.goods-info .price{
    color: var(--color-high-text);
    padding-right: 15%;
}

.goods-info .collect {
    position: relative;
}

.goods-info .collect::before{
    content: '';
    position: absolute;
    left: -15px;
    top: 0px;
    width: 14px;
    height: 14px;
    background: url("../../../assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>