<template>
    <div>
        <router-link 
        v-for="(obj,index) in menu" 
        :key="index" 
        :to="obj.path"
        >
        {{obj.title}}
        </router-link>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                menu:[
                        {
                            title:'电影',
                            path:'/movie'
                        }
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>