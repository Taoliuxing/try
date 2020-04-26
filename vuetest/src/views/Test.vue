<template>
  <div>
    <el-button type="primary" @click="say()">主要按钮</el-button>
    <el-input placeholder="请输入内容" v-model="input" clearable ></el-input>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: ""
    };
  },
  methods: {
    say() {
      console.log(this.input);
    }
  }
}
</script>

<style lang="scss" scoped>
</style>