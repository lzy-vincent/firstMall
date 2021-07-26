<template>
  <div id="app">
   <tabbar></tabbar>
   <keep-alive exclude="detail"><router-view></router-view></keep-alive>
    
  </div>
</template>

<script>
import Tabbar from '@/components/common/tabbar/tabbar'
 

export default {
  name: 'App',
  components: {
   Tabbar
  }
}
</script>

<style>
@import 'assets/css/base.css';

</style>
