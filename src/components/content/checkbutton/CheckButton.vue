<template>
<div>
<div class="checkbutton" :class="{check: isChecked}">
        <img src="@/assets/img/cart/tick.svg" alt="">
    </div>
</div>
    
</template>

<script>
export default {
    name:'checkbutton',
    props:{
        isChecked:{
            type:Boolean,
            default(){
                return true;
            }
        }
    },
}
</script>

<style scoped>


.checkbutton {
    position: relative;
    margin: 0;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border: 2px solid #ccc;
    cursor: pointer;
    /* background-color: #ccc; */
  }

  .check{
    background-color: #ff8198;
    border: 2px solid #ff8198;
  }
</style>