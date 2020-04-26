<template>
  <div id="app">
    <common-header></common-header>
    <div class="container">
      <router-view></router-view>
    </div>
    <common-footer></common-footer>
  </div>
</template>

<script>
import CommonHeader from '../src/components/CommonHeader';
import CommonFooter from '../src/components/CommonFooter';

export default {
  components:{
    CommonHeader,
    CommonFooter
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
 .container{
    margin-top: 100px;
    margin-bottom: 100px;
  }
</style>
