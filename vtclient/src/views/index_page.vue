<template>
    <div class="index-view">
        <!-- 首页内容 -->
        <div class="content">
            <div class="left-content">
                <div class="top1">
                    <div class="left1">
                        <div @click="goArtist"></div>
                    </div>
                    <div class="right1">
                        <div class="top2">  
                            <div class="left2"><div @click="goABC"></div></div>
                            <div class="right2"><div @click="goLanguage"></div></div>
                        </div>
                        <div class="bottom2"><div @click="goStyle"></div></div>
                    </div>
                </div>
                <div class="bottom1"><div @click="goKtvLikes"></div></div>
            </div>
            <div class="right-content" @click="goHot()"><div></div></div>
        </div>
    </div>
</template>
<script>
//import hasLogin from "@/config/isLogin";
export default {
    name:"index-view",
    data(){
        return{

        }
    },
    /*
    methods:{
        goHot(){
            if(hasLogin()){
                this.$router.push('/home/hot');
            }
        },
        goArtist(){
            if(hasLogin()){
                this.$router.push('/home/artist');
            }
        },
        goABC(){
            if(hasLogin()){
                this.$router.push('/home/abc');
            }
        },
        goLanguage(){
            if(hasLogin()){
                this.$router.push('/home/language');
            }
        },
        goStyle(){
            if(hasLogin()){
                this.$router.push('/home/style');
            }
        },
        goKtvLikes(){
            if(hasLogin()){
                this.$router.push('/home/ktvlikes');
            }
        }
    }
    */
}
</script>
<style lang="less" scoped>
</style>