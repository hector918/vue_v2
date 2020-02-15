
<template>
  <v-container class="grey lighten-5">
    <v-row >
      <v-col
        
        cols="12"
        sm="4"
        v-bind:class="this.component_name"
        class="py-1"
      >
        <v-btn 
          block 
          @click="on_click('1')"
        >1</v-btn>
      </v-col>
      <v-col
       
        cols="12"
        sm="4"
        v-bind:class="this.component_name"
        class="py-1"
      >
        <v-btn 
          block 
          @click="on_click('2')"
        >2</v-btn>
      </v-col>
      <v-col
        class="py-1"
        cols="12"
        sm="4"
        v-bind:class="this.component_name"
      >
        <v-btn 
          block 
          @click="on_click('3')"
        >3</v-btn>
      </v-col>

    </v-row>
        <v-row >
      <v-col
        
        cols="12"
        sm="4"
        v-bind:class="this.component_name"
        class="py-0"
      >
        <v-btn 
          block 
          @click="on_click('4')"
        >4</v-btn>
      </v-col>
      <v-col
        class="py-1"
        cols="12"
        sm="4"
        v-bind:class="this.component_name"
      >
        <v-btn 
          block 
          @click="on_click('5')"
        >5</v-btn>
      </v-col>
      <v-col
        class="py-1"
        cols="12"
        sm="4"
        v-bind:class="this.component_name"
      >
        <v-btn 
          block 
          @click="on_click('6')"
        >6</v-btn>
      </v-col>

    </v-row>
    <v-row >
      <v-col
        class="py-1"
        cols="12"
        sm="4"
        v-bind:class="this.component_name"
      >
        <v-btn 
          block 
          @click="on_click('7')"
        >7</v-btn>
      </v-col>
      <v-col
        class="py-1"
        cols="12"
        sm="4"
        v-bind:class="this.component_name"
      >
        <v-btn 
          block 
          @click="on_click('8')"
        >8</v-btn>
      </v-col>
      <v-col
        class="py-1"
        cols="12"
        sm="4"
        v-bind:class="this.component_name"
      >
        <v-btn 
          block 
          @click="on_click('9')"
        >9</v-btn>
      </v-col>
    
    </v-row>
    <v-row >
      <v-col
        class="py-1"
        cols="12"
        sm="4"
        v-bind:class="this.component_name"
      >
        <v-btn 
          block 
          @click="on_click('.')"
        >.</v-btn>
      </v-col>
      <v-col
        class="py-1"
        cols="12"
        sm="4"
        v-bind:class="this.component_name"
      >
        <v-btn 
          block 
          @click="on_click('0')"
        >0</v-btn>
      </v-col>
      <v-col
        class="py-1"
        cols="12"
        sm="4"
        v-bind:class="this.component_name"
        
      >
        <v-btn 
          block 
          @click="on_click('clear')"
        >Clear</v-btn>
      </v-col>

    </v-row>
  </v-container>
</template>

<script>
import { pageVar } from '../data_operater.js';
//import Router from 'vue-router'
export default {
  name: "keypad_number",
  data: () => ({
    errors: [],
    
    component_name : "keypad_number",
  }),
  props: {
    //msg: String
  },

  computed: {
    count() {
        return pageVar.count;
    },
    
  },
  created (){
    //actions.users.fetchUsersFromApi()
    
  },
  methods: {
    get_sub_var(obj,path){
      let arr = path.split(".");
      
      for(let x in arr)
      {
        obj = obj[arr[x]]
      }
      return obj
    },
    set_sub_var(obj,path,val){
      //如果直接返回， 是返回值，这里last_one返回的是指针
      let arr = path.split(".");
      let last_one=arr.pop();
      for(let x in arr)
      {
        obj = obj[arr[x]]
      }
      obj[last_one]=val;
    },
    on_click(val){

      if(this.$active_element==undefined)
      {
        return;
      }
      if(!this.$active_element.hasOwnProperty("event"))
      {
        return;
      }

      switch(val)
      {
        case "clear":
          
          this.set_sub_var(this.$active_element['this'],this.$active_element["obj"],"");
          
        break;
        default:
          
          {//如果有选定目标
            let input_obj=this.$active_element["event"].target;
            if(input_obj!=undefined)
            {
              //如果有光标
              let origin = this.get_sub_var(this.$active_element['this'],this.$active_element["obj"]);

              const start =input_obj.selectionStart;
              let length = origin.length;
              
              this.set_sub_var(this.$active_element['this'],this.$active_element["obj"],origin.substr(0,start)+val+origin.substring(start,length));
              
              setTimeout(function() {
                input_obj.setSelectionRange(start+1,start+1);
              }, 0);
              
            }
            
          }
        break;
      }
    },

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
