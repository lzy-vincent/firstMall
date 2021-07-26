<template>
    <Swiper class="detail-swiper">
        <SwiperItem v-for="(item, index) in images" :key="index"><img :src="item" alt=""></SwiperItem>
    </Swiper>
</template>

<script>
import {Swiper, SwiperItem} from '@/components/common/swiper'

export default {
    name:'detailswiper',
    props:{
        images:{
            type:Array,
            default(){
                return []
            }
        }
    },
    components:{
        Swiper,
        SwiperItem
    }
}
</script>

<style scoped>
.detail-swiper{
    height: 300px;
}
</style>