<template>
    <div id="detailnavbar">
        <nav-bar class="navbar">
        <div slot="left" class="back"><img src="@/assets/img/common/back.svg" alt="" @click="backclick"></div>
        <div slot="center" class="title">
            <div v-for="(item, index) in titles" 
            :key="index" class="title-item" 
            :class="{active: currentIndex === index}"
            @click="itemclick(index)">{{item}}</div>
        </div>
        
        </nav-bar>
    </div>
</template>

<script>

import NavBar from '@/components/common/navbar/NavBar'

export default {
    name:'detailnavbar',
    data() {
        return {
            titles:['商品', '参数', '评论', '推荐'],
            currentIndex: 0
        }
    },
    components:{
        NavBar,
    },
    methods:{
        itemclick(index) {
            this.currentIndex = index;
            this.$emit('itemclick', index)
        },
        backclick(){
            this.$router.go(-1)
        }
    }
}
</script>

<style scoped>
.navbar{
    margin:0;
    padding: 0;

}
.title{
    display: flex;
    /* align-content: center; */
    
}

.title-item{
    flex:1;
    align-content: center;
    /* justify-content: space-around; */
    align-items: center;
}
.active {
    color: var(--color-high-text);
    /* color: red; */
}
.back{
    margin-bottom: 0;
    padding-bottom: 0;
}
.back img{

    margin-left: 10px;
    
    vertical-align: middle;
    
}
</style>