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
        data: () => ({
            
            gmdata:[{
                name : "b",
                opt : "in",
                amount : "1565",
                date : new Date("3/5/2020"),
            },]
        }),
        computed: {
            
        },
        mounted () {
            
        },
        methods: {
            
        },
    }
</script>

<style lang="less" scoped>

</style>
