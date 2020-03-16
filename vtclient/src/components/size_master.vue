<template>
    <v-container>
        <v-row
            v-for="(item,index) in size_item"
            :key=index
        >
            <v-col
                v-for="(sitem,sindex) in item"
                :key=sindex
            >
                {{sitem}}
            </v-col>
        </v-row>
        
        <v-snackbar v-model="snack" :timeout="3000" :color="snackColor">
            {{ snackText }}
            <v-btn text @click="snack = false">Close</v-btn>
        </v-snackbar>
    </v-container>
    
</template>
<script>
    import { actions } from '../data_operater.js';
    export default {
        name : "size_master",
        data () {
            return{
                size_item:{
                    "size_master":[
                        "x","s","n","l"
                    ],
                    "size_for_control_sheet":[
                        "10/1","12/2","13/4","12121/"
                    ]
                    
                },
                snack: false,
                snackColor: '',
                snackText: '',
            }
        },
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

            },
            save () {
                this.snack = true
                this.snackColor = 'success'
                this.snackText = 'Data saved'
            },
            cancel () {
                this.snack = true
                this.snackColor = 'error'
                this.snackText = 'Canceled'
            },
            open () {
                this.snack = true
                this.snackColor = 'info'
                this.snackText = 'Dialog opened'
            },
            close () {
                window.console.log('Dialog closed')
            },
        },
    }
</script>