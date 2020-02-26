<template>
    <div>
        测试页
        <router-link to="/test/kid">Kid</router-link>
        <transition name="kidd">
        <router-view></router-view>
        </transition>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.kidd-enter {
  // opacity: 0;
  transform: translate(100%);
}
.kidd-enter-active {
  // transition: opacity 1s ease;
  transition: transform 1s ease;
}
.kidd-enter-to {
  // opacity: 1;
  transform: translate(0);
}
.kidd-leave {
  opacity: 1;
}
.kidd-leave-active {
  transition: opacity 1s ease;
}
.kidd-leave-to {
  opacity: 0;
}
</style>