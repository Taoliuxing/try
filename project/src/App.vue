<template>
  <div id="app">
    <!-- <first-page>
      <common></common>
    </first-page>
    <not-common></not-common>-->
    <!-- <router-link to='/'>首页</router-link> | -->
    <!-- <router-link to='/home'>首页</router-link> | -->
    <router-link to="/hhh">hhh首页</router-link>|
    <router-link to="/test">测试页</router-link>|
    <!-- <router-link to='/end'>尾页</router-link> | -->
    <!-- <router-link :to="{name:'end', params:{id:25,name:'xx'}}">尾页</router-link> -->
    <!-- <router-link :to="{path:'/end', query:{id:25,name:'xx'}}">尾页</router-link> -->
    <router-link to="/end/25/lxt">尾页</router-link>
    <button @click="before">上一页</button>
    <button @click="after">下一页</button>
    <button @click="first">首页</button>
        <transition name="test">
      <router-view />
    </transition>
  </div>
</template>

<script>
import Common from "./components/Common";
import NotCommon from "./components/NotCommon";
import FirstPage from "./views/FirstPage";
export default {
  components: {
    Common,
    NotCommon,
    FirstPage
  },
  methods:{
    before(){
      this.$router.go(-1);
    },
    after(){
      this.$router.go(1);
    },
    first(){
      this.$router.push('/home');
      // this.$router.push({path:'/end', query:{id:25,name:'xx'}});
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.test-enter {
  // opacity: 0;
  transform: translate(100%);
}
.test-enter-active {
  // transition: opacity 1s ease;
  transition: transform 1s ease;
}
.test-enter-to {
  // opacity: 1;
  transform: translate(0);
}
.test-leave {
  opacity: 1;
}
.test-leave-active {
  transition: opacity 1s ease;
}
.test-leave-to {
  opacity: 0;
}
</style>
