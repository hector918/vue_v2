
<template>
  <v-container class="grey lighten-5">
    <v-row class="justify-center">
        <v-col
            cols="12"
            :sm="item.size"
            class="ma-0 pa-1"
            v-for="item in row_1" 
            v-bind:key="item.text"
        >
            <v-btn 
            block 
            x-large
            @click="on_click(item.text)"
            >{{ item.text }}</v-btn>
      </v-col>
    </v-row>
    <v-row class="justify-center">
        <v-col
            cols="12"
            :sm="item.size"
            class="ma-0 pa-1"
            v-for="item in row_2" 
            v-bind:key="item.text"
        >
            <v-btn 
            block 
            x-large
            @click="on_click(item.text)"
            >{{ item.text }}</v-btn>
      </v-col>
    </v-row>
    <v-row class="justify-center">
        <v-col
            cols="12"
            :sm="item.size"
            class="ma-0 pa-1"
            v-for="item in row_3" 
            v-bind:key="item.text"
        >
            <v-btn 
            block 
            x-large
            @click="on_click(item.text)"
            >{{ item.text }}</v-btn>
      </v-col>
    </v-row>
    <v-row class="justify-center">
        <v-col
            cols="12"
            :sm="item.size"
            class="ma-0 pa-1"
            v-for="item in row_4" 
            v-bind:key="item.text"
        >
            <v-btn 
            block 
            x-large
            @click="on_click(item.text)"
            >{{ item.text }}</v-btn>
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
    row_1 :[
        {text:"1",size:1},
        {text:"2",size:1},
        {text:"3",size:1},
        {text:"4",size:1},
        {text:"5",size:1},
        {text:"6",size:1},
        {text:"7",size:1},
        {text:"8",size:1},
        {text:"9",size:1},
        {text:"BackSpace",size:2},
    ],
    row_2 :[
        {text:"q",size:1},
        {text:"w",size:1},
        {text:"e",size:1},
        {text:"r",size:1},
        {text:"t",size:1},
        {text:"y",size:1},
        {text:"u",size:1},
        {text:"i",size:1},
        {text:"o",size:1},
        {text:"p",size:1},
    ],
    row_3 :[
        {text:"a",size:1},
        {text:"s",size:1},
        {text:"d",size:1},
        {text:"f",size:1},
        {text:"g",size:1},
        {text:"h",size:1},
        {text:"j",size:1},
        {text:"k",size:1},
        {text:"l",size:1},
        {text:"Enter",size:2},
    ],
    row_4 :[
        {text:"z",size:1},
        {text:"x",size:1},
        {text:"c",size:1},
        {text:"v",size:1},
        {text:"b",size:1},
        {text:"n",size:1},
        {text:"m",size:1},
        {text:".",size:1},
        {text:"-",size:1},
        {text:"Clear",size:1},
    ],
    component_name : "keypad_number",
    btn_class : "ma-0 pa-1",
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
