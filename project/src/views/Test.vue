<template>
    <div>
      <div>
        {{$store.state.count}}
      </div>
      <div>
        {{$store.state.num}}
      </div>
      <div>
        <!-- <button @click="$store.commit('add',3)">add</button> -->
        <button @click="add(5)">add</button>
      </div>
      <div>
        getters测试{{addTwo}}
      </div>
      <div>
        <button @click="addAction">actions</button>
      </div>
        测试页
        <router-link to="/test/kid">Kid</router-link>
        <transition name="kidd">
        <router-view></router-view>
        </transition>
    </div>
</template>

<script>
    import {mapState , mapMutations , mapGetters , mapActions} from 'vuex' 
    export default {
        computed:{
          ...mapState(['count','num']),
          ...mapGetters(['addTwo'])
        },
        methods:{
          ...mapMutations(["add"]),
          ...mapActions(['addAction'])
        }
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