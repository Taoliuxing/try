<template>
    <div>
        <img v-for="music in musicList" :key="music.id" :src="music.bg" alt="">
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        data(){
            return {
                musicList:[]
            }
        },
        created(){
            axios.get('data/musiclist.json')
            .then((res)=>{
                this.musicList = res.data.albums;
            }).catch((res)=>{

            })
        }
    }
</script>

<style lang="scss" scoped>
    img{
        width:50%;
        float: left;    
    }
</style>