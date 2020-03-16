<template>
  <div>

    <topNavBar></topNavBar>
    <SizeMaster 
    ></SizeMaster>
    
  </div>
</template>

<script>

import topNavBar from "../components/top_nav_bar.vue";

import SizeMaster from "../components/size_master_edit.vue";
export default {
 
  components:{
    topNavBar,
    SizeMaster,
  },
  
}
</script>
<style lang="less" scoped>

</style>
