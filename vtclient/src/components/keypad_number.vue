
<template>
  <v-container class="grey lighten-5">
    <v-row 
        class="justify-center"
        v-for="(row, key) in all_rows"
        v-bind:key="key"
    >
        <v-col
            cols="12"
            :sm="item.size"
            class="ma-0 pa-1"
            v-for="item in row" 
            v-bind:key="item.text"
        >
            <v-btn 
              block 
              x-large
              @click="on_click(item.value)"
            >
              {{ item.text }}
              <v-icon v-if="item.icon!=undefined" color="grey">{{item.icon}}</v-icon>
            </v-btn>
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
    all_rows : {
        row_1 :[
          {text:"1",size:2,value:"1"},
          {text:"2",size:2,value:"2"},
          {text:"3",size:2,value:"3"},
            
        ],
        row_2 :[
          {text:"4",size:2,value:"4"},
          {text:"5",size:2,value:"5"},
          {text:"6",size:2,value:"6"},
          
        ],
        row_3 :[
          {text:"7",size:2,value:"7"},
          {text:"8",size:2,value:"8"},
          {text:"9",size:2,value:"9"},
        ],
        row_4 :[
          {text:".",size:2,value:"."},
          {text:"0",size:2,value:"0"},
          {icon:"mdi-keyboard-backspace",size:2,value:"BackSpace"},
        ],
        row_5 :[
          
          {text:"Enter",size:3,value:"Enter"},
          {text:"Clear",size:3,value:"Clear"},
        ],
    },
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
    
    on_click(val){
      switch(val)
      {
          case "Clear":case "BackSpace":case "Space":case "Enter":
              //功能键
              this.$emit("FeedbackFromKeyboard",val.toLowerCase());
          break;
          default:
              this.$emit("FeedbackFromKeyboard",val);
          break;
      }
    },

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
