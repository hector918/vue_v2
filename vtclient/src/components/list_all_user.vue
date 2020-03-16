<template>

  <v-container fluid>
    <v-data-iterator
      :items="users"
      :items-per-page.sync="itemsPerPage"
      hide-default-footer
    >
      <template v-slot:header>
        <v-toolbar
          class="mb-2"
          color="indigo darken-5"
          dark
          flat
        >
          <v-toolbar-title><trans text="This is a header"></trans></v-toolbar-title>
        </v-toolbar>
      </template>

      <template v-slot:default="props">
        <v-row>
          <v-col
            v-for="(user,key) in props.items"
            :key="key"
            cols="12"
            sm="6"
            md="4"
            lg="3"
          >
            <v-card>
              <v-card-title 
                class="subheading font-weight-bold"
                @click="card_on_click($event,user,'barcode')"
              >{{ user.barcode }}</v-card-title>

              <v-divider></v-divider>

              <v-list dense>
                <v-list-item @click="card_on_click($event,user,'firstname')">
                  <v-list-item-content><trans text="First Name"></trans></v-list-item-content>
                  <v-list-item-content class="align-end">{{ user.firstname }}</v-list-item-content>
                </v-list-item>
                <v-list-item @click="card_on_click($event,user,'lastname')">
                  <v-list-item-content><trans text="Last Name"></trans></v-list-item-content>
                  <v-list-item-content class="align-end">{{ user.lastname }}</v-list-item-content>
                </v-list-item>

                <v-list-item @click="card_on_click($event,user,'power_tags')">
                  <v-list-item-content><trans text="Power Tags"></trans></v-list-item-content>
                  <v-list-item-content class="align-end">{{ user.power_tags }}</v-list-item-content>
                </v-list-item>

              </v-list>
            </v-card>
          </v-col>
        </v-row>
      </template>

      <template v-slot:footer>
        <v-toolbar
          class="mt-2"
          color="indigo"
          dark
          flat
        >
          <v-toolbar-title class="subheading"><trans text="This is a footer"></trans></v-toolbar-title>
        </v-toolbar>
      </template>
    </v-data-iterator>
    <inputdialogfullkeyboard 
      title="From User manager page"
      default_text="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
      :show="dialog"
      :par_send_to_input_dialog="par_send_to_input_dialog"
      @DialogReturnValue="dialog_return_value"
    >
    </inputdialogfullkeyboard>
  </v-container>

</template>

<script>

import { actions } from '../data_operater.js';

import inputdialogfullkeyboard from "../components/input_dialog_full_keyboard";

export default {
  data: () => ({
    itemsPerPage: 4,
    dialog : false,
    par_send_to_input_dialog : {text:"",title:""},
    users :[],
  }),
  components:{
    
    inputdialogfullkeyboard,
  },
  created(){
    
    actions.users.getalluser({}).then((result)=>{
      this.users = result.data.users;
    })
  },
  methods : {
    card_on_click(event,user,pointer){
      this.par_send_to_input_dialog = {
        title : pointer,
        text : user[pointer],
        _id : user._id,
      }
      this.dialog=true;
      
    },
    dialog_return_value(par){
      
      this.dialog= false;
      if(par.change)
      {
        //如果点了确定
        actions.users.update_user_field(par).then((result=>{
        
          if(result.data.result=="success")
          {
            //
            
            for(let x in this.users)
            {
              if(this.users[x]._id==par._id)
              {
                
                this.users[x][par.field]=par.text;
                break;
              }
            }
          }
          else
          {
            //

          }
        }));
      }
      else
      {
        //如果点了取消
      }
    },
  },
}
</script>

<style lang="less" scoped>

</style>
