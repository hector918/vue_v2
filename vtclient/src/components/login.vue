
<template>
  <v-container class="grey lighten-5">
    <v-flex xs12>
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        ></v-img>
      </v-flex>
      <transition name="slide">
      <v-row
        no-gutters
        style="height: 150px;"
        v-if="errors.length"
      >
        <v-col>
          <v-card
            class="pa-2"
            outlined
            tile
          >
          <v-alert outlined color="red" >
            <div class="title"><trans text="Please correct the following error(s):"></trans></div>
            <trans v-for="(error,idx) in errors" v-bind:key="idx" v-bind:text="error"></trans>
          </v-alert>
          </v-card>
        </v-col>
      </v-row>
      </transition>
      <v-row
        no-gutters
        style="height: 150px;"
      >
        <v-col >
          
            <v-text-field
              v-model="user.barcode"
              :hint="this.$GetTranslation('For example, flowers or used cars')"
              :counter="10"
              clearable="clearable"
              :label="this.$GetTranslation('Barcode')"
              required
              @blur="this.$input_ele_on_blur"
              @focusin="onfocus('user.barcode',$event)"
              id='barcodeinput'
            ></v-text-field>
            <v-btn class="mr-4" v-on:click="LogingIn"><trans text="Login"></trans></v-btn>
            <v-btn @click="clear" ><trans text="Clear"></trans></v-btn>
          
    
        </v-col>
    </v-row>
  </v-container>  
</template>

<script>

import { pageVar,  actions} from '../data_operater.js';
//import Router from 'vue-router'
export default {
  name: "login",
  data: () => ({
    errors: [],
    
    user: {
        barcode: "",

    }
  }),
  props: {
    //msg: String
  },

  computed: {
    count() {
        return pageVar.count;
    },
    
  },
  mounted (){

    document.getElementById("barcodeinput").focus();
  },
  created (){
    //actions.users.fetchUsersFromApi()
  },
  methods: {
    onfocus (obj,e){
      let par = {
        "obj" : obj,
        "event" : e,
        "this" : this
      }
      
      this.$active_element=par;
      //this.$active_element=`${this[obj]}`;
    },
    LogingIn (){
      
      this.errors=[];
      
      actions.login.logingin({barcode:this.user.barcode}).then((response)=>{
        
          
        this.errors=[];
        if(response.data.result=="success")
        {
            this.$router.push("/home");
        }
        else
        {
            this.errors.push(response.data.result);
        }
        
      }).catch((error)=>{
        this.errors.push(error);
      })
      
        
    },
    clear () {
      
      this.barcode = ''
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
