<template>
  <div>

    <topNavBar></topNavBar>
    
    <login></login>
    
  
    
  </div>
</template>

<script>


import topNavBar from "../components/top_nav_bar.vue";
import login from "../components/login";
export default {
 
  components:{
    
    topNavBar,
    login,
  },
  created(){
    
  },
  methods :{
    
  }
}
</script>
<style lang="less" scoped>

</style>
