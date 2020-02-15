<template>
    <v-container fluid>
    <v-row>
        
        <v-col cols="12" sm="8" offset-sm="2">
        <v-card elevation="0" class="">
            <v-container >
            <v-row>
                <v-col
                    key="1"
                    class="d-flex child-flex"
                    cols="4"
                >
                <v-card 
                    tile 
                    ripple 
                    class="mx-auto"
                    @click="JumpTest"
                >
                    <v-img
                        :src="`https://picsum.photos/500/300?image=${ 5 + 10}`"
                        :lazy-src="`https://picsum.photos/10/6?image=${ 5 + 10}`"
                        aspect-ratio="1.5"
                        class="lighten-2 align-end"
                    >
                        <template v-slot:placeholder>
                            <v-row
                                class="fill-height ma-0"
                                align="center"
                                justify="center"
                            >
                                <v-progress-circular 
                                    indeterminate 
                                    color="grey lighten-5"
                                ></v-progress-circular>
                            </v-row>
                        </template>
                    
                    </v-img>
                    
                    <v-card-subtitle><trans text="test"></trans></v-card-subtitle>
                </v-card>
                </v-col>
                <!------------------------------------------->
                <v-col
                    key="2"
                    class="d-flex child-flex"
                    cols="4"
                >
                <v-card 
                    tile 
                    ripple 
                    class="mx-auto"
                    @click="JumpUserManager"
                >
                    <v-img
                        :src="`https://picsum.photos/500/300?image=${ 10 + 10}`"
                        :lazy-src="`https://picsum.photos/10/6?image=${ 10 + 10}`"
                        aspect-ratio="1.5"
                        class="lighten-2 align-end"
                    >
                        <template v-slot:placeholder>
                            <v-row
                                class="fill-height ma-0"
                                align="center"
                                justify="center"
                            >
                                <v-progress-circular 
                                    indeterminate 
                                    color="grey lighten-5"
                                ></v-progress-circular>
                            </v-row>
                        </template>
                    
                    </v-img>
                    
                    <v-card-subtitle><trans text="users manager"></trans></v-card-subtitle>
                </v-card>
                </v-col>
                <!------------------------------------------->
                <v-col
                    key="3"
                    class="d-flex child-flex"
                    cols="4"
                >
                <v-card 
                    tile 
                    ripple 
                    class="mx-auto"
                    @click="LogingOut"
                >
                    <v-img
                        :src="`https://picsum.photos/500/300?image=${ 15 + 10}`"
                        :lazy-src="`https://picsum.photos/10/6?image=${ 15 + 10}`"
                        aspect-ratio="1.5"
                        class="lighten-2 align-end"
                    >
                        <template v-slot:placeholder>
                            <v-row
                                class="fill-height ma-0"
                                align="center"
                                justify="center"
                            >
                                <v-progress-circular 
                                    indeterminate 
                                    color="grey lighten-5"
                                ></v-progress-circular>
                            </v-row>
                        </template>
                    
                    </v-img>
                    
                    <v-card-subtitle><trans text="Logout"></trans></v-card-subtitle>
                </v-card>
                </v-col>
                <!------------------------------------------->
                <v-col
                    v-for="n in tmp"
                    :key="n"
                    class="d-flex child-flex"
                    cols="4"
                >
                <v-card 
                    tile 
                    ripple 
                    class="mx-auto"
                >
                    <v-img
                        :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
                        :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
                        aspect-ratio="1.5"
                        class="lighten-2 align-end"
                    >
                        <template v-slot:placeholder>
                            <v-row
                                class="fill-height ma-0"
                                align="center"
                                justify="center"
                            >
                                <v-progress-circular 
                                    indeterminate 
                                    color="grey lighten-5"
                                ></v-progress-circular>
                            </v-row>
                        </template>
                    
                    </v-img>
                    
                    <v-card-subtitle>Top western road trips</v-card-subtitle>
                </v-card>
                </v-col>
            </v-row>
            </v-container>
        </v-card>
        </v-col>
    </v-row>
    </v-container>
</template>

<script>

import { actions } from '../data_operater.js';

export default {
    data: () => ({
        tmp : [4,5,6,7,8,9],
    }),
    components:{

    },
    methods :{
        JumpTest (){
            this.$router.push('test')
        },
        JumpUserManager(){
            this.$router.push('usermanagerpage')
        },
        LogingOut : function(){
            actions.login.logingout().then((response)=>{
                window.console.log(response.data)
                this.errors=[];
                if(response.data.result=="success")
                {
                //
                }
                else
                {
                    this.errors.push(response.data.result);
                }
            })
        },
    },
  
}
</script>
<style lang="less" scoped>

</style>
