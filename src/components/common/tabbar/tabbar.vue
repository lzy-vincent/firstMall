<template>
<div id="tab">
    <Tabbar>
      <TabbarItem path='/home'>
        <img src="@/assets/img/tabbar/football.png" slot="item-img" >
        <img src="@/assets/img/tabbar/basketball.png" slot="item-img-active">
        <div slot="item-text">首页</div>
      </TabbarItem>
      <TabbarItem path='/cate'>
        <img src="@/assets/img/tabbar/usball.png" slot="item-img">
        <img src="@/assets/img/tabbar/basketball.png" slot="item-img-active">
        <div slot="item-text">分类</div>
      </TabbarItem>
      <TabbarItem path='/cart'>
        <img src="@/assets/img/tabbar/baseball.png" slot="item-img">
        <img src="@/assets/img/tabbar/basketball.png" slot="item-img-active">
        <div slot="item-text">购物</div>
      </TabbarItem>
      <TabbarItem path='/profile'>
        <img src="@/assets/img/tabbar/snooker.png" slot="item-img">
        <img src="@/assets/img/tabbar/basketball.png" slot="item-img-active">
        <div slot="item-text">我的</div>
      </TabbarItem>
    </Tabbar>
</div>
     
</template>
<script>

import Tabbar from '@/components/common/tabbar'
import TabbarItem from '@/components/common/tabbaritem'


 export default {
     name:'tab',
     components:{
         Tabbar,
         TabbarItem
     }
 }
</script>

<style scoped>

</style>