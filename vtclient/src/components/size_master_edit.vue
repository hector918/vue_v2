<template>
    <div>
        <v-container fluid>
            <v-row>
                <v-col align="left">
                    <div>
                    
                        <template >
                            <v-edit-dialog
                                :return-value.sync="add_row_input"
                                @save="save"
                                @cancel="cancel"
                                @open="open"
                                @close="close"

                            >
                            <v-btn small >add Row<v-icon color="grey">mdi-arrow-collapse-down</v-icon></v-btn>
                            <template v-slot:input>
                                <v-text-field
                                dense
                                clearable
                                persistent-hint
                                hint="Enter to Confirm"
                                single-line
                                counter
                                autofocus
                                :value="add_row_input"
                                ></v-text-field>
                            </template>
                            </v-edit-dialog>
                        </template>
                    </div>
                </v-col>
                <v-col
                align="right"
                >
                    <v-btn small @click="add_col">add Col<v-icon color="grey">mdi-arrow-collapse-right</v-icon> </v-btn>
                </v-col>
            </v-row>
        </v-container>
        <v-simple-table
            dark
        >
            
            <tbody>
                <tr
                v-for="(item,index) in size_item"
                :key=index
                >
                    <th>
                        {{index}}
                    </th>
                    <td
                    v-for="(sitem,sindex) in item"
                    :key=sindex
                    align="center"
                    >
                    
                    <template>
                        <v-edit-dialog
                            :return-value.sync="size_item[index][sindex]"
                            small
                            @save="save"
                            @cancel="cancel"
                            @open="open"
                            @close="close"

                        >
                        <div >{{ sitem }}</div>
                        
                        <template v-slot:input>
                            <v-text-field
                            dense
                            clearable
                            persistent-hint
                            hint="Enter to Confirm"
                            single-line
                            counter
                            autofocus
                            :value="size_item[index][sindex]"
                            ></v-text-field>
                        </template>
                        </v-edit-dialog>
                    </template>
                    </td>
                </tr>    
            </tbody>

            
        </v-simple-table>
        <v-snackbar v-model="snack" :timeout="3000" :color="snackColor">
            {{ snackText }}
            <v-btn text @click="snack = false">Close</v-btn>
        </v-snackbar>
    </div>
</template>
<script>
    import { actions } from '../data_operater.js';
    export default {
        name : "size_master_edit",
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
                add_row_input:'',
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
            upload_unfinished_form(){


                actions.form.upload_unfinished_form(this.$options.name,this._data).then(result=>{
                    window.console.log(result);
                })


            },
            refill_unfinished_form(){

            },
            add_row(){
                let tmp = this.add_row_input;
                let doc = {};
                doc[tmp]=Array(this.size_item[Object.keys(this.size_item)[0]].length).fill("");
                this.size_item=Object.assign(doc,this.size_item)
                
                this.add_row_input="";
            },
            add_col(){
                for(let x in this.size_item)
                {
                    this.size_item[x].push('');
                }
            },
            save () {
                this.snack = true
                this.snackColor = 'success'
                this.snackText = 'Data saved'
                setTimeout(() => {
                    this.add_row();
                    this.upload_unfinished_form();
                }, 0);
                
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