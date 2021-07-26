<template>
    <div class="tab-control">
        <div v-for="(item, index) in titles" :key="index" class="item" @click="itemclick(index)" :class="{active: index === currentIndex}">
            <span>{{item}}</span>
        </div>
    </div>
</template>


<script>
export default {
  name:'tabcontrol',
  props:{
      titles:{
          type:Array,
          default(){
              return []
          }
      }
  },
  data(){
      return {
          currentIndex: 0
      }
  },
  methods:{
      itemclick(index){
        this.currentIndex = index
        this.$emit('tabclick', index)
      }
  }

}
</script>

<style scoped>
.tab-control{
    display: flex;
    padding: 10px 10px 5px 10px;
    background-color: white;
    /* border-bottom: 2px solid silver; */
}
.item{
    flex:1;
    text-align: center;
}
.active{
    color: red;
}
.active span {
    padding: 5px;
    border-bottom: 3px solid var(--color-tint);
}
</style>