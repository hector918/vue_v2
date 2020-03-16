<template>
  <div>

    <topNavBar></topNavBar>
    <listalluser></listalluser>
    
  </div>
</template>

<script>

import topNavBar from "../components/top_nav_bar.vue";
import listalluser from "../components/list_all_user.vue";

export default {
 
  components:{
    topNavBar,
    listalluser,
  },
  
}
</script>
<style lang="less" scoped>

</style>
