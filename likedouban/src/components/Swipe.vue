<template>
    <div>
        <transition-group tag="ul" class="li-box" name="fade">
            <li v-for="(img,index) in imgs" :key="index" v-show="index==iNow" class="img-box">
                <img :src="img" alt="">
            </li>
        </transition-group>    
        <ul class="btns-box">
            <li 
            :class="{btns:true,choosen:iNow==index}" 
            v-for="(img,index) in imgs" 
            :key="index" 
            >
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                imgs:[
                    "https://img3.doubanio.com/lpic/s24468373.jpg",
                    "https://img3.doubanio.com/lpic/s27102925.jpg",
                    "https://img3.doubanio.com/lpic/s6989253.jpg"
                ],
                iNow:0,

            }
        },
        created(){
            setInterval(()=>{
                this.iNow++;
                if(this.iNow == this.imgs.length){
                    this.iNow = 0;
                }
            },2000)
        }

    }
</script>

<style lang="scss" scoped>
    .li-box{
        position: relative;
        width: 100%;
        height: 6rem;
        .img-box{
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 6rem;
            img{
                width:100%;
                height: 6rem;
            }
        }
    }
    .btns-box{
        display: flex;
        justify-content: center;
        .btns{
            width: 0.2rem;
            height: 0.2rem;
            background: #cccccc;
            border-radius: 50%;
            margin-right: 0.1rem;
        }
        .choosen{
            background: #000;
        }
    }
    .fade-enter{
        transform: translate(-100%);
    }
    .fade-enter-active{
        transition: transform 1s linear;
    }
    .fade-enter-to{
        transform: translate(0%);
    }
    .fade-leave{
        transform: translate(0);
    }
    .fade-leave-active{
        transition: transform 1s linear;
    }
    .fade-leave-to{
        transform: translate(100%);
    }
</style>