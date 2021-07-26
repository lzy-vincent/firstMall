<template>
<div id="homeCom">
    <swiper>
            <SwiperItem v-for="(item,index) in banner" :key="index">
                <a :href="item.link">
                <img :src="item.image" alt=""  @load="swiperimgload"></a>
            </SwiperItem>
        </swiper>
        </div>
    
</template>

<script>
import {Swiper, SwiperItem} from '@/components/common/swiper'

export default {
    name:'HomeCom',
    props:{
        banner:{
            type:Array,
            default(){
                return []
            }
        }
    },
    data(){
        return {
            isload:false,
        }
    },
    components:{
        Swiper,
        SwiperItem
    },
    methods:{
        swiperimgload(){
            if(!this.isload){
                console.log('轮播图加载完成')
                this.$emit('swiperimgload')
                this.isload = true
            }
           
            
        }
    }
}
</script>

<style scoped>

</style>