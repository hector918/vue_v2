<template>
  <v-row justify="center">
    <v-dialog v-model="show" persistent>
      
      <v-card>
        <v-card-title class="headline">{{title}}</v-card-title>
        <v-container class="grey lighten-5">
          <v-row justify="center" cols="12">
            <v-col sm="6">
              <v-textarea
                @blur="onblur"
                name="input-7-1"
                :label="this.$GetTranslation(par_send_to_input_dialog.title)"
                v-model="input_text"
                hint="Hint text"
                ref="userinput"
                v-focus
              ></v-textarea>
            </v-col>
          </v-row>
        </v-container>
        <keypadfullkeyboard 
          @FeedbackFromKeyboard="catch_from_keyboard"
        ></keypadfullkeyboard>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="error darken-1" depressed text @click="on_cancel"><trans text="Cancel"></trans></v-btn>
          <v-btn color="green darken-1" depressed text @click="on_confirm"><trans text="Save"></trans></v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>

import keypadfullkeyboard from "../components/keypad_fullkeyboard.vue";

export default {
  props:{
    title : String,
    text : String,
    default_text : String,
    show : Boolean,
    par_send_to_input_dialog : { 
      type: Object,
      
    },
  },
  watch: {
    'show': function() {
      if(this.show)
      {
        this.input_text=this.par_send_to_input_dialog.text;
      }
      
    }
  },
  computed: {
    
      
  },
  data: function () {
  return {
      input_text: "",

    }
  },
  components:{
    keypadfullkeyboard,
  },
  updated (){
    
    
  },
  created (){
    
  },
  methods : {
    onblur(e){
      
      e.target.focus();
    },
    on_cancel(){
      let par = {
        //genral id , field name , value
        _id : this.par_send_to_input_dialog._id,
        field : this.par_send_to_input_dialog.title,
        text : this.input_text,
        change : false,
      }
      this.$emit("DialogReturnValue",par);
    },
    on_confirm(){
      let par = {
        //genral id , field name , value
        _id : this.par_send_to_input_dialog._id,
        field : this.par_send_to_input_dialog.title,
        text : this.input_text,
        change : true,
      }
      this.$emit("DialogReturnValue",par);
    },
    on_input(){

    },
    catch_from_keyboard(from_keyboard_val){
      const textarea = this.$refs.userinput.$el.getElementsByTagName("textarea")[0];
      const start =textarea.selectionStart;

      switch(from_keyboard_val)
      {
        case "clear":
          this.input_text = "";
        break;
        case "backspace":
          //内容变更
          this.input_text =textarea.value.substr(0,start-1)+textarea.value.substring(start,textarea.value.length);
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
          this.input_text =textarea.value.substr(0,start)+from_keyboard_val+textarea.value.substring(start,textarea.value.length);
          //光标选择
          setTimeout(function(){
            textarea.setSelectionRange(start+1,start+1);},0);

        break;
      }

    },

  },
  directives: {
    focus: {
      inserted: function (el) {
        //backup el,binding,vnode
        //textarea 插入时设置焦点
        el.getElementsByTagName("textarea")[0].focus();
        
        //in directives context arguments[2].context is the this
        
        //let _this = vnode.context;
        //_this.send_pointer = _this.par_send_to_input_dialog.title;
        //_this.input_text = _this.par_send_to_input_dialog.text
        
      },
      componentUpdated: function (el) {
        el.getElementsByTagName("textarea")[0].focus();
        //textarea 插入时设置焦点
        //window.console.log(vnode)
        
        //let _this = vnode.context;
        //_this.send_pointer = _this.par_send_to_input_dialog.title;
        //_this.input_text = _this.par_send_to_input_dialog.text;
        
       
      }
    }
  }
}
</script>

<style lang="less" scoped>

</style>
