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
                        },
                        {
                            title:'测试',
                            path:'/test'
                        }
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>