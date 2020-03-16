<template>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="firstname"
            :rules="nameRules"
            :counter="10"
            :label="this.$GetTranslation('First name')"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="lastname"
            :rules="nameRules"
            :counter="10"
            :label="this.$GetTranslation('Last name')"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="email"
            :rules="emailRules"
            :label="this.$GetTranslation('E-mail')"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
          <v-btn
            @click=get_all_form_data()
          >
          Normal</v-btn>
      </v-row>
    </v-container>
  </v-form>
</template>
<script>
    import { actions } from '../data_operater.js';
    export default {
        name : "basic_form",
        data: () => ({
            valid: false,
            firstname: '',
            lastname: '',

            email: '',

        }),
        computed:{
        nameRules(){
            return [
                v => !!v || this.$GetTranslation('Name is required'),
                v => v.length <= 10 || this.$GetTranslation('Name must be less than 10 characters'),
            ]
            },
            emailRules(){
                return [
                    v => !!v || this.$GetTranslation('E-mail is required'),
                    v => /.+@.+/.test(v) || this.$GetTranslation('E-mail must be valid'),
                ]
            },
        },
        components:{

        },
        created () {

            actions.form.get_unfinished_form(this.$options.name).then((result)=>{
                
                try {
                    var target = result.data.form.unfinished_form.rawdata;
                } catch (error) {
                    return
                }
                
                if(target==undefined)
                {
                    return;
                }
                for(let x in target)
                {
                    this[x]=target[x];
                }
            })
        },
        methods:{
            get_all_form_data(){


                actions.form.upload_unfinished_form(this.$options.name,this._data).then(result=>{
                    window.console.log(result);
                })


            },
            refill_unfinished_form(){

            }
        },
    }
</script>