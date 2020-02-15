<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent>
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">Open Dialog</v-btn>
      </template>
      <v-card>
        <v-card-title class="headline">Use Google's location service?</v-card-title>
        <v-row justify="center" cols="12">
          <v-col sm="6">
            <v-textarea
              @blur="this.$refs.focusTarget.focus()"
              name="input-7-1"
              label="Default style"
              value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
              hint="Hint text"
            ></v-textarea>
          </v-col>
        
        </v-row>
        <keypadfullkeyboard></keypadfullkeyboard>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="dialog = false">Disagree</v-btn>
          <v-btn color="green darken-1" text @click="dialog = false">Agree</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>

import keypadfullkeyboard from "../components/keypad_fullkeyboard.vue";

export default {
  data () {
    return {
      dialog: false,
    }
  },
  components:{
    keypadfullkeyboard,
  },
  created (){

  },
}
</script>
<style lang="less" scoped>

</style>
