<template>
  <div id="app">
    <first-page>
      <common></common>
    </first-page>
    <not-common></not-common>
  </div>
</template>

<script>
  import Common from './components/Common';
  import NotCommon from './components/NotCommon';
  import FirstPage from './views/FirstPage';
  export default {
      components:{
        Common,
        NotCommon,
        FirstPage
      }
  }
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
</style>
