<template>
    <div>
        <img
        v-for="(photos,index) in $store.state.photo" 
        :key="index"
        :src="photos.src" 
        @click="$router.push({path:'/picture-detail',query:{index}})"
        alt="">
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        data(){
            return {
                // photo:[]
            }
        },
        created(){
            axios.get('data/photodata.json')
            .then((res)=>{
                // console.log(res.data.photoData)
                this.$store.commit('addPhoto',res.data.photoData)
            }).catch((res)=>{

            })
        }
    }
</script>

<style lang="scss" scoped>
    img{
        width: 50%;
        float: left;
    }
</style>