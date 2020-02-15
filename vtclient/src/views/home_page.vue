<template>
    <div>
        <topNavBar></topNavBar>
        <KeypadNumber></KeypadNumber>
    </div>
    
</template>
<script>
import topNavBar from "../components/top_nav_bar.vue";
import KeypadNumber from '../components/home_link.vue';

//import {  actions } from '../data_operater.js';
export default {
    name:"home-view",
    data(){
        return{

        }
    },
    components:{
        topNavBar,
        KeypadNumber,
    },
    created (){
        
    },
}
</script>
<style lang="less" scoped>
</style>