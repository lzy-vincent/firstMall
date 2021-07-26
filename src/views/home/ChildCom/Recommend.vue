<template>
    <div id="recommend">
        <div v-for="(item, index) in recommend" :key="index" class="recommend-item">
            <a :href="item.link"><img :src="item.image" alt="">
            <div>{{item.title}}</div></a>
            
        </div>
    </div>
</template>


<script>
export default {
    name:"Recommend",
    props:{
        recommend:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style scoped>
    #recommend{
        display: flex;
        width: 100%;
        text-align: center;
        font-size: 12px;
        padding: 10px 0 10px 0;
        border-bottom: solid 8px #eee;
    }
    .recommend-item{
        flex: 1;
    }
    img {
        height: 70px;
        width: 70px;
        margin-bottom: 0px;
    }
    
</style>