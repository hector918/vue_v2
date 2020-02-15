<template>
  <div>

    <topNavBar></topNavBar>
    <listalluser></listalluser>
    <inputdialogfullkeyboard></inputdialogfullkeyboard>
  </div>
</template>

<script>

import topNavBar from "../components/top_nav_bar.vue";
import listalluser from "../components/list_all_user.vue";
import inputdialogfullkeyboard from "../components/input_dialog_full_keyboard";

export default {
 
  components:{
    topNavBar,
    listalluser,
    inputdialogfullkeyboard,
  },
  
}
</script>
<style lang="less" scoped>

</style>
