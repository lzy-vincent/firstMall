<template>
    <div id="pop">
        <div v-for="(item, index) in poplist" :key="index">
            <a :href="item.link">{{item.title}}</a>
        </div>
    </div>
</template>

<script>
export default {
    name:'pop',
    props:{
        poplist:{
                type:Array,
                default(){
                    return []
                }
        }
    }
}

</script>

<style scoped>

</style>