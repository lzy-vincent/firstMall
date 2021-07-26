<template>
    <div id="tab-bar">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:'tabbar'
}
</script>

<style scoped>
 @import '../../assets/css/base.css';
#tab-bar{
  display: flex;
  background-color: #f6f6f6;

  position: fixed;
  right: 0;
  left: 0;
  bottom: 0;
  box-shadow: 0 -2px 2px rgba(100, 100, 50, 0.2);
  z-index: 9; 
  /* 让tabbar不被遮挡 */
}

</style>