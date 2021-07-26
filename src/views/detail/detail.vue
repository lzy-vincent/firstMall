<template>
    <div id="detail">
        <DetailNavBar class="detailnavbar" @itemclick="itemclick" ref="nav"></DetailNavBar>
        <scroll class="content" ref="scroll" @scroll="itemposition" :probeType="3">
        <detail-swiper :images="Topimages"></detail-swiper>
        <DetailBaseInfo :goods="goods"></DetailBaseInfo>
        <detailparam-info :paramInfo="goodsparam" ref="params"></detailparam-info>
        <detial-comments :commentInfo="comments" ref="comments"></detial-comments>
        <goods-list :goods="recommend" ref="recommends"></goods-list>
        </scroll>
        <top-back v-show="isBack" @click.native="topback" class="topback"></top-back>
        <detail-add-cart @addtocart="addtocart"></detail-add-cart>
        <!-- <Toast :message="message" :show="show"></Toast> -->
    </div>
</template>

<script>
// import DetailNavBar from './childComps/DetailNavBar.vue'
import DetailNavBar from '@/views/detail/childComps/DetailNavBar'
import DetailSwiper from './childComps/DetailSwiper.vue'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailparamInfo from './childComps/DetailparamInfo.vue'
import DetialComments from './childComps/DetialComments.vue'
import DetailAddCart from './childComps/DetailAddCart.vue'

import scroll from '@/components/common/scroll/scroll'
import TopBack from '@/components/content/topback/TopBack.vue'
import GoodsList from '@/components/content/goods/GoodsList.vue'
// import Toast from '@/components/common/toast/Toast'

import {getDetail, Goods, GoodsParam, getRecommend} from '@/network/detail'
import {debounce} from '@/common/utils'



export default {
    name:'detail',
    data() {
        return {
            id: null,
            Topimages:[],
            goods:{},
            goodsparam:{},
            comments:{},
            recommend:[],
            detailItemListener:null,
            itemtopy:[],
            getitemtopy:null,
            currentIndex:0,
            isBack:false,
        }
    },
    methods:{
        topback(){
            this.$refs.scroll.scrollto(0,0,500)
        },
        _getRecommend(){
            getRecommend().then(res => {
            this.recommend = res.data.list
        })
        },
        itemclick(index) {
            this.$refs.scroll.scrollto(0, -this.itemtopy[index] + 44, 500)
        },
        itemposition(position) {
            let positionY = -position.y + 44
            let length = this.itemtopy.length
            for(let i=0; i < length - 1; i++){
                // console.log(i)
                if(this.currentIndex !== i && positionY >= this.itemtopy[i] && positionY < this.itemtopy[i+1]){
                    this.currentIndex = i
                    this.$refs.nav.currentIndex = this.currentIndex
                    console.log(this.currentIndex)
                }
            }

            this.isBack = -position.y > 1000;
            // console.log(positionY)
        },
        addtocart(){
        const obj = {}
        obj.iid = this.id
        obj.imgURL = this.Topimages[0]
        obj.title = this.goods.title
        obj.desc = this.goods.desc
        obj.price = this.goods.realPrice
        this.$store.dispatch('addCart', obj).then(res => {
            this.$toast.show(res, 2000)
        })
        }
    },
    created(){
        //保存传入的iid
        this.id = this.$route.params.id
        // console.log(this.$route)
        //根据iid请求详情数据
        getDetail(this.id).then(res => {
            //1.获取数据
            console.log(res)
            const data = res.result

            //2.获取顶部图片数据
            this.Topimages = res.result.itemInfo.topImages

            //3.获取商品信息
            this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
            // console.log(this.goods)
            // console.log(data)
            //4.获取参数信息
            this.goodsparam = new GoodsParam(data.itemParams.info, data.itemParams.rule)
            if(data.rate.list.cRate !== 0) this.comments = data.rate.list[0];
        });
        this._getRecommend(),
        this.getitemtopy = function() {setTimeout(() =>{
                this.itemtopy = [];
            this.itemtopy.push(0)
            this.itemtopy.push(this.$refs.params.$el.offsetTop)
            this.itemtopy.push(this.$refs.comments.$el.offsetTop)
            this.itemtopy.push(this.$refs.recommends.$el.offsetTop)
            this.itemtopy.push(Number.MAX_VALUE)
            console.log(this.itemtopy)
        }, 500)
            
        }
    },
    mounted() {
        const refresh =debounce(this.$refs.scroll.refresh, 50)
        this.detailItemListener = () => { refresh() }
        this.$bus.$on('itemimgload', this.detailItemListener)
        setTimeout(() => {
            this.getitemtopy()
        }, 500)
        
    },
    destroyed() {
        this.$bus.$off('itemimgload', this.detailItemListener)
    },
    components:{
        DetailNavBar,
        DetailSwiper,
        DetailBaseInfo,
        scroll,
        DetailparamInfo,
        DetialComments,
        GoodsList,
        TopBack,
        DetailAddCart,
        // Toast
    }
}
        
        
</script>

<style scoped>
#detail{
    position: relative;
    z-index: 9;
    height: 100vh;
    background-color: #fff;
}
.detailnavbar{
    position: relative;
    z-index: 9;
    background-color: #fff
}
.content{
    height:calc(100% - 44px - 49px)
}
/* .topback img{
    position: relative;
    bottom: 100px;
} */
</style>