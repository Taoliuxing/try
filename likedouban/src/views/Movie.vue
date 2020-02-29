<template>
    <div>
        <ul class="list-box">
            <li class="list" v-for="obj in movieList" :key="obj.id" @click="goDetail(obj.id)">
                <img :src="obj.images.medium" alt="">
                <div class="desc-box">
                    <h2>{{obj.title}}</h2>
                    <div>
                        <span v-for="cast in obj.casts" :key="cast.id">{{cast.name}}|</span>
                    </div>
                    <p>207147已观看</p>
                    <p>
                        年份：{{obj.year}}
                    </p>
                    <p>
                        <span v-for="(gen,index) in obj.genres" :key="index">{{gen}}|</span>
                    </p>
                </div>
            </li>
        </ul>
        <img class="loading" v-if="isShow" src="../assets/images/loading.gif" alt="">
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        data(){
            return{
                movieList:[],
                isShow:true
            }
        },
        created(){
            axios.get('https://bird.ioliu.cn/v1?url=https://douban.uieee.com/v2/movie/in_theaters?start=0&count=10')
            .then((res)=>{
                console.log(res)
                this.movieList = res.data.subjects;
                this.isShow = false;
            }).catch((res)=>{

            })
        },
        methods:{
            goDetail(id){
                this.$router.push({path:'/movie-detail',query:{id}})
            }
        }
    }
</script>

<style lang="scss" scoped>
     .list{
        display: flex;
        color:#000;
        margin-bottom: 0.2rem;
    }
    .list img{
        width:1.8rem;
        height:2.46rem;
        margin-right: 0.2rem;
    }
    .desc-box{
        flex:1;
    }
    .list-box{
        padding:0.2rem;
    }
    .loading {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    // width:6rem;
    width: 1rem;
    }
</style>