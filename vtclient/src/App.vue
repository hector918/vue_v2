<template>
    <v-app>
        <router-view/>
    </v-app>
</template>

<script>
//import RocketNavigation from '@/components/navigation';
//import RocketPlans from '@/components/plans';
import Vue from 'vue';
import { pageVar , actions } from './data_operater.js';


Vue.component('trans', {
  data : () =>({
    content : '',
  }),
  created (){
    this.content = this.$translation[this.text];
  },
  watch: {//监听全局变量
    $translation () {
      if(this.$translation[this.text]==undefined)
      {
        //语言数组未有此key//不翻译//并更新到服务器
        this.content = this.text;
        actions.translation.update_unset(this.$current_language,this.text)
      }
      else
      {
        //有就置换
        this.content = this.$translation[this.text];
      }
    },
    
  },
  props:['text'],
  template: '<span>{{content}}</span>',

})

//import Login from '@/components/login';
export default {
    name: 'vvzApp',

    data:()=>({
      activeElement : null,
    }),

    components: {
      //Login
        //RocketNavigation,
        //RocketPlans,
        //RocketFooter
    },

    created (){

      actions.login.getSession();
      pageVar.this=this;
      window.console.log("app created");
      this.$current_language="ENG";
    },
    
};
</script>

<style>
</style>