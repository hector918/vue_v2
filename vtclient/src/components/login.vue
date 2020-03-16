<template>
  <v-container class="grey lighten-5">
    <v-flex xs12>
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="180"
        ></v-img>
    </v-flex>

    <v-row justify="center" >
      <v-col cols="6">
        
        <v-text-field
          v-model="user.barcode"
          :counter="10"
          :rules="barcodeinputrule"
          :label="this.$GetTranslation('Barcode')"
          persistent-hint
          required
          @blur="onblur"
          id='barcodeinput'
        ></v-text-field>
        
      </v-col>
    </v-row>
    <v-row class="justify-center" >
      <v-col cols="6">
        <v-btn class="mr-4" v-on:click="LogingIn"><trans text="Login"></trans></v-btn>
      </v-col>
    </v-row>
    <KeypadNumber @FeedbackFromKeyboard="catch_from_keyboard"></KeypadNumber>
  </v-container>  
</template>

<script>

import { pageVar,  actions} from '../data_operater.js';

import KeypadNumber from '../components/keypad_number.vue';
//import Router from 'vue-router'
export default {
  name: "login",
  components:{

    KeypadNumber,
  },
  data: () => ({
    errors: [],
    
    error_on:true,
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
    barcodeinputrule(){

      if(this.$GetTranslation(this.errors.toString())==undefined)
      {
        return [""]
      }
      else
      {
        let arr = [];
        for(var x in this.errors)
        {
          arr.push(this.$GetTranslation(this.errors[x].toString()));
        }
        return arr;
      }
    },
  },
  mounted (){

    document.getElementById("barcodeinput").focus();
  },
  created (){
    //actions.users.fetchUsersFromApi()
  },
  methods: {
    onblur(e){
      
      e.target.focus();
    },
    catch_from_keyboard(from_keyboard_val){
      
      const textarea = document.getElementById("barcodeinput");
      
      const start =textarea.selectionStart;

      switch(from_keyboard_val)
      {
        case "clear":
          this.user.barcode = "";
        break;
        case "backspace":
          //内容变更
          this.user.barcode =textarea.value.substr(0,start-1)+textarea.value.substring(start,textarea.value.length);
          //光标选择
          setTimeout(function(){
            textarea.setSelectionRange(start-1,start-1);},0);
        break;
        case "enter":

        break;
        default:
          //space
          if(from_keyboard_val=="space"){from_keyboard_val=" ";}
       
          //内容变更
          this.user.barcode =textarea.value.substr(0,start)+from_keyboard_val+textarea.value.substring(start,textarea.value.length);
          //光标选择
          setTimeout(function(){
            textarea.setSelectionRange(start+1,start+1);},0);

        break;
      }
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
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
