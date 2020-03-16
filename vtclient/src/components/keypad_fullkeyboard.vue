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
//import Router from 'vue-router'
export default {
    name: "keypad_full",
    data: () => ({
        errors: [],
        all_rows : {
            row_1 :[
                {text:"1",size:1,value:"1"},
                {text:"2",size:1,value:"2"},
                {text:"3",size:1,value:"3"},
                {text:"4",size:1,value:"4"},
                {text:"5",size:1,value:"5"},
                {text:"6",size:1,value:"6"},
                {text:"7",size:1,value:"7"},
                {text:"8",size:1,value:"8"},
                {text:"9",size:1,value:"9"},
                {icon:"mdi-keyboard-backspace",size:2,value:"BackSpace"},
            ],
            row_2 :[
                {text:"q",size:1,value:"q"},
                {text:"w",size:1,value:"w"},
                {text:"e",size:1,value:"e"},
                {text:"r",size:1,value:"r"},
                {text:"t",size:1,value:"t"},
                {text:"y",size:1,value:"y"},
                {text:"u",size:1,value:"u"},
                {text:"i",size:1,value:"i"},
                {text:"o",size:1,value:"o"},
                {text:"p",size:1,value:"p"},
            ],
            row_3 :[
                {text:"a",size:1,value:"a"},
                {text:"s",size:1,value:"s"},
                {text:"d",size:1,value:"d"},
                {text:"f",size:1,value:"f"},
                {text:"g",size:1,value:"g"},
                {text:"h",size:1,value:"h"},
                {text:"j",size:1,value:"j"},
                {text:"k",size:1,value:"k"},
                {text:"l",size:1,value:"l"},
                {text:"Enter",size:2,value:"Enter"},
            ],
            row_4 :[
                {text:"z",size:1,value:"z"},
                {text:"x",size:1,value:"x"},
                {text:"c",size:1,value:"c"},
                {text:"v",size:1,value:"v"},
                {text:"b",size:1,value:"b"},
                {text:"n",size:1,value:"n"},
                {text:"m",size:1,value:"m"},
                {text:".",size:1,value:"."},
                {text:"-",size:1,value:"-"},
                {text:"Clear",size:1,value:"Clear"},
            ],
            row_5 :[
                {text:"Space",size:5,value:"Space"},
            ],
        },
        component_name : "keypad_full",
        btn_class : "ma-0 pa-1",
    }),
    props: {

    },

    computed: {

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
