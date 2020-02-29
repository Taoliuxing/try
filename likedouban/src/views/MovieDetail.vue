<template>
    <div>
        <div v-if="allDetail">
            <div class="detail-top">
                <img :src="detail.images.medium" alt="图丢了">
                <div class="detail-info">
                  <h2>{{detail.original_title}}</h2>
                  <p>上映时间:{{detail.pubdate}}</p>
                  <p>时长:{{detail.durations[0]}}</p>
                </div>
            </div>
        </div>
        <div class="detail-bottom">{{detail.summary}}</div>
        <img class="loading" v-if="isShow" src="../assets/images/loading.gif" alt="">
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        data(){
            return {
                detail:{},
                isShow:true,
                allDetail:false
            }
        },
        created(){
            axios.get('https://bird.ioliu.cn/v1?url=https://douban.uieee.com/v2/movie/subject/'+this.$route.query.id)
            .then((res)=>{
                this.detail = res.data;
                this.isShow = false;
                this.allDetail = false;
            }).catch((res)=>{

            })
        }
    }
</script>

<style lang="scss" scoped>
.detail-top {
  display: flex;
  img {
    width: 3rem;
  }
  .detail-info {
    flex: 1;
  }
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