<template>

  <v-card
    color=""
    tile
  >
    <v-app-bar dense flat color="">
      <v-app-bar-nav-icon>
        <v-icon color="grey">mdi-plus-one</v-icon>
      </v-app-bar-nav-icon>
 
      <v-toolbar-title><trans text="NavBar"></trans></v-toolbar-title>
      
      <v-spacer></v-spacer>
      <v-chip
        class="ma-2"
        color="primary"
        label
        outlined
        v-if="this.$user.length"
        v-bind:text="this.$user.firstname"
      >
        
      </v-chip>
      <v-col
        cols="6"
        md="2"
        class="align-self-baseline"
      >
        <v-select
          v-model="current_language"
          :items="items"
          item-text="showing"
          item-value="value"
          dense
          :label="this.$GetTranslation('Language')"
        ></v-select>
      </v-col>
      
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>  
      <v-btn icon @click="JumpHome">
        <v-icon>mdi-home</v-icon>
      </v-btn>
      
    </v-app-bar>
  </v-card>

</template>

<script>


import { actions } from '../data_operater.js';
export default {
  name: "login",
  data: () => ({
    errors: [],

    user: {
        barcode: "Enter your barcode",

    },
    items: [{showing:"English",value:"ENG"},{showing:"中文",value:"CHN"}],
    
  }),
  props: {
    //msg: String
  },
  watch:{
    
  },
  computed: {
    current_language :{
      get(){
        
        return this.$current_language;
      },
      set(val){
        
        this.$current_language = val;
      }
    },

  },
  created(){
    
  },
  methods: {
    
    LogingOut : function(){
      actions.login.logingout().then((response)=>{
        window.console.log(response.data)
        this.errors=[];
        if(response.data.result=="success")
        {
          //
        }
        else
        {
          this.errors.push(response.data.result);
        }
      })
    },
    JumpHome (){
      this.$router.push("home").catch(()=>{});
    },
  },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
