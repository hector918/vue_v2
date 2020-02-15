<template>
  <div>

    <topNavBar></topNavBar>
    
    <login></login>
    <KeypadNumber></KeypadNumber>
  
    
  </div>
</template>

<script>


import topNavBar from "../components/top_nav_bar.vue";
import login from "../components/login";
import KeypadNumber from '../components/keypad_number.vue';
export default {
 
  components:{
    
    topNavBar,
    login,
    KeypadNumber,
  },
  created(){
    
  },
  
}
</script>
<style lang="less" scoped>

</style>
