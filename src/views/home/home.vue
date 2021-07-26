<template>
    <div id="Home">
        <nav-bar class="home-nav">
            <div slot="center">
                购物街
            </div>
        </nav-bar>
        <tab-control :titles="['流行', '新款', '精选']" 
        ref="faketabcontrol"
        class="fakehomecontrol" 
        @tabclick="tabclick" 
        v-show="isShow" >
        </tab-control>
        <scroll 
        class="content" 
        ref="scroll" 
        :probeType="0"
        :pullingUpload="true"
        @scroll="isBackShow" 
        @pullingUp="pullingUp">
        <HomeCom :banner="banner" @swiperimgload="swiperimgload"></HomeCom>

        <Recommend :recommend="recommends"></Recommend>
        <feature-view></feature-view>
        <tab-control :titles="['流行', '新款', '精选']" 
        ref="tabcontrol"
        class="homecontrol" 
        @tabclick="tabclick" >
        </tab-control>
        <GoodList :goods="goods[currenttype].list"></GoodList>
        
        </scroll>
        <top-back @click.native="backTop" v-show="isBack"></top-back>

       
    </div>
</template>

<script>

import Recommend from './ChildCom/Recommend'
import HomeCom from '@/views/home/ChildCom/HomeCom.vue'
import FeatureView from './ChildCom/FeatureView'


import NavBar from '@/components/common/navbar/NavBar.vue'
import TabControl from '@/components/content/tabControl/TabControl' 
import GoodList from '@/components/content/goods/GoodsList'

import scroll from '@/components/common/scroll/scroll'

import {getHomeMultidata, getHomegoods} from '@/network/home'
import TopBack from '@/components/content/topback/TopBack.vue'

import {debounce} from '@/common/utils'


export default {
    name:'home',
    components:{

        HomeCom,
        Recommend,
        FeatureView,


        NavBar,
        TabControl,
        GoodList,

        scroll,
        TopBack,
        },
    data(){
        return {
            banner:[],
            recommends:[],
            goods:{
                'pop':{page:0, list:[]},
                'new':{page:0, list:[]},
                'sell':{page:0, list:[]},
            },
            currenttype: 'pop',
            isBack:false,
            isShow:false,
            taboffsetTop: 0,
            saveY: 0,
            homeItemListener:null
        }
    },
    created(){
        this._getHomeMultidata()
        

        this.getHomegoods('pop')
        this.getHomegoods('new')
        this.getHomegoods('sell')

        
    },
    mounted(){
        const refresh =debounce(this.$refs.scroll.refresh, 50)
        this.homeItemListener = () => { refresh() }
        this.$bus.$on('itemimgload', this.homeItemListener)
    },
    activated(){
        this.$refs.scroll.scrollto(0, this.saveY, 500)
        this.$refs.scroll.refresh()
    },
    deactivated(){
        this.saveY = this.$refs.scroll.scroll.y
        this.$bus.$off('itemimgload', this.homeItemListener)
    },
    methods:{
        debounce(func, delay){
            let timer = null;
            return function(...args) {
                if(timer) clearTimeout(timer)
                timer = setTimeout(()=> {
                    func.apply(this, args)
                }, delay)
            }
        },
        tabclick(index) {
            switch(index) {
                case 0:
                    this.currenttype ='pop';
                    break
                case 1:
                    this.currenttype = 'new';
                    break
                case 2:
                    this.currenttype = 'sell';
                    break
            }
            this.$refs.tabcontrol.currentIndex = index;
            this.$refs.faketabcontrol.currentIndex = index
            
        },
        backTop(){
            this.$refs.scroll.scrollto(0,0,500)
        },
        isBackShow(position){
            this.isBack = -position.y > 1000;
            this.isShow = -position.y > this.taboffsetTop


        },
        pullingUp(){
            this.getHomegoods(this.currenttype)
            // this.$refs.scroll.refresh()       
        },
        swiperimgload(){
            this.taboffsetTop = this.$refs.tabcontrol.$el.offsetTop
            
        },
        _getHomeMultidata() {
            getHomeMultidata().then(res => {
            this.banner = res.data.banner.list;
            this.recommends = res.data.recommend.list;
            // console.log(this.banner)
            // console.log(this.recommends)
        })},

        
        getHomegoods(type) {
            const page = this.goods[type].page + 1;
            getHomegoods(type, page).then(res => {
                
                this.goods[type].list.push(...res.data.list) 
                this.goods[type].page +=1;
                // console.log(this.goods[type].list)
                this.$refs.scroll.finishPullUp()
                // this.poplist = res.data.list
            }).catch(err => { console.log(err)
            console.log('失败了')})
        }
    }

}


</script>

<style scoped>
#Home {
    /* padding-top: 44px; */
    height: 100vh;
    /* padding-bottom: 1000px; */
    position: relative;
}
/* #Home ul li{
    position: relative;
        z-index: -2;
} */
.home-nav{
    background-color: var(--color-tint);
    color: white;

    position: relative;
    top:0;
    left: 0;
    right: 0;
    z-index: 2;
}
/* .homecontrol {
    position: sticky;
    top: 44px;
    z-index: 1;

} */
.content{
    /* height: 300px; */
    overflow: hidden;
    position: absolute;
    top:44px;
    bottom: 49px;
}
.fakehomecontrol{
    position: relative;
    z-index: 10;
}
</style>