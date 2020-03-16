<template>
  <v-row class="fill-height">

       
    <v-col>
        <v-sheet color="orange lighten-2">Hello, world! I'm a simple v-sheet</v-sheet>
        <v-row class="fill-height">
            <v-col class="grey">
            </v-col>
        </v-row>
        

    </v-col>

    <v-col>
    </v-col>
  </v-row>
</template>


<script>
    export default {
        props:{
            start:Date,
            end:Date,

        },
        data: () => ({
            
        }),
        computed: {
            
        },
        mounted () {
            let datediff = this.end.getTime() - this.start.getTime();
            let daydiff = Math.floor(datediff / (24 * 3600 * 1000));//计算出相差天数
            //const container = 
            for (let i = 0; i < daydiff; i++) 
            {
                window.console.log(i)
            }
            

        },
        methods: {
            updaterange(){
                window.console.log(this.start.get())
            },
        },
    }
</script>

<style lang="less" scoped>

</style>
