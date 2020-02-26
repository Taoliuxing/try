<template>
  <div>
    首页
    <common></common>
    <first-page></first-page>
    <not-common></not-common>
  </div>
</template>

<script>
import FirstPage from "./FirstPage";
import Common from "../components/Common";
import NotCommon from "../components/NotCommon";
export default {
  components: {
    FirstPage,
    NotCommon,
    Common
  }
};
</script>

<style lang="scss" scoped>
</style>