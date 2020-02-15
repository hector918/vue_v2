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
          <v-toolbar-title>This is a header</v-toolbar-title>
        </v-toolbar>
      </template>

      <template v-slot:default="props">
        <v-row>
          <v-col
            v-for="user in props.items"
            :key="user.barcode"
            cols="12"
            sm="6"
            md="4"
            lg="3"
          >
            <v-card>
              <v-card-title class="subheading font-weight-bold">{{ user.barcode }}</v-card-title>

              <v-divider></v-divider>

              <v-list dense>
                <v-list-item>
                  <v-list-item-content>first name:</v-list-item-content>
                  <v-list-item-content class="align-end">{{ user.firstname }}</v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>Last Name:</v-list-item-content>
                  <v-list-item-content class="align-end">{{ user.lastname }}</v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content>Power Tags:</v-list-item-content>
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
          <v-toolbar-title class="subheading">This is a footer</v-toolbar-title>
        </v-toolbar>
      </template>
    </v-data-iterator>
  </v-container>
</template>

<script>

import { actions } from '../data_operater.js';

export default {
  data: () => ({
    itemsPerPage: 4,
    
    users :[],
  }),
  components:{
    
  },
  created(){
    
    actions.users.getalluser({}).then((result)=>{
      this.users = result.data.users;
      window.console.log(this.users)
    })
  },
}
</script>

<style lang="less" scoped>

</style>
