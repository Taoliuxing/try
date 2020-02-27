<template>
  <footer :style="{background:$store.state.color}">
    <router-link 
    v-for="(obj,index) in menu" 
    :key="index"
    :to="obj.path"
    @click.native="$store.commit('change',obj)"
    >
    {{obj.title}}
    </router-link>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      menu: [
            {
                title:"电影",
                path:'/movie',
                color:'#008c8c'
            },
            {
                title:"音乐",
                path:'/music',
                color:'yellow'
            },
            {
                title:"图书",
                path:'/book',
                color:'green'
            },
            {
                title:"照片",
                path:'/picture',
                color:'pink'
            }
          ]
    };
  },
   // 每次刷新页面进来 state 会取到默认值
  created(){
            // 取到页面的路由的path 判断path和menu菜单中哪个obj对象是对应的 change(obj)
            // console.log(this.$route.path)
        this.menu.forEach((obj,index)=>{
            if(this.$route.path == obj.path){
                this.$store.commit('change',obj);
            }
        })
  }
};
</script>

<style lang="scss" scoped>
footer {
  width: 100%;
  height: 1rem;
  line-height: 1rem;
  background: red;
  text-align: center;
  position: fixed;
  bottom: 0;
  display: flex;
  a{
      flex: 1;
      text-decoration: none;
      color: #000;
  }
  .router-link-active{
      color:#fff;
  }
}
</style>