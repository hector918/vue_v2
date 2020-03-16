<template>
  <div>

    <topNavBar></topNavBar>
    <basicform 
    ></basicform>
    
  </div>
</template>

<script>

import topNavBar from "../components/top_nav_bar.vue";

import basicform from "../components/basic_form.vue";
export default {
 
  components:{
    topNavBar,
    basicform,
  },
  
}
</script>
<style lang="less" scoped>

</style>
