<template>
    <div>
        <router-link to='/picture'>
            <v-touch 
            class="img-box"
            :style="{backgroundImage:`url(${$store.state.photo[idx].src})`}"
            @swipeleft="changeLeft()"
            @swiperight="changeRight()"
            >
            </v-touch>
        </router-link>
    </div>
</template>

<script>
    import Vue from 'vue'
    import VueTouch from 'vue-touch'
    Vue.use(VueTouch, {name: 'v-touch'})
    export default {
        data(){
            return{
                idx:this.$route.query.index
            }
        },
        methods:{
            changeLeft(){
                this.idx++;
                if(this.idx >= this.$store.state.photo.length){
                    this.idx = 0;
                }
            },
            changeRight(){
                this.idx--;
                if(this.idx < 0){
                    this.idx = this.$store.state.photo.length-1;
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .img-box{
        position: absolute;
        left: 0;
        right: 0;
        top: 1rem;
        bottom: 1rem;
        background: #000 center center no-repeat;
        background-size: contain;
    }
</style>