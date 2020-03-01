<template>
    <div>
        <aplayer autoplay
            :music="{
                title: '因为爱情',
                artist: '陈奕迅',
                src: 'http://m10.music.126.net/20200301000818/cb16596d456d9c731a0856c678fd24f1/ymusic/61f8/acca/ae45/098caa71f39e824afb2e899e39d5c4eb.mp3',
                pic: 'http://p1.music.126.net/GGYQjJ-zDEivv9l6QgJUFg==/109951163020567917.jpg',
                lrc: 'http://localhost:8080/lrc/广东爱情故事.lrc'
            }"
            :list="musicDetail"
            :showLrc= true
        />  
    </div>
</template>

<script>
import axios from 'axios'
import Aplayer from 'vue-aplayer'
    export default {
        data(){
            return {
                musicDetail:[]
            }
        },
        created(){
            axios.get('data/musicdata.json')
            .then((res)=>{
                this.musicDetail = res.data.musicData;
            }).catch((res)=>{

            })
        },
        components:{
            Aplayer
        }
        
    }
</script>

<style lang="scss" scoped>
  
</style>