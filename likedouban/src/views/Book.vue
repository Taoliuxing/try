<template>
    <div>
        <swipe :imgs="imgs"></swipe>
    </div>
</template>

<script>
    // import axios from 'axios';
    import Swipe from '../components/Swipe';
    export default {
        components:{
            Swipe
        },
        data(){
            return {
                imgs:[
                    "https://img3.doubanio.com/lpic/s24468373.jpg",
                    "https://img3.doubanio.com/lpic/s27102925.jpg",
                    "https://img3.doubanio.com/lpic/s6989253.jpg"
                ],
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>