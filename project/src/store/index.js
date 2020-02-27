import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count : 1,
    num : 300
  },
  mutations: {
    add(state,xx){
      state.count += xx;
    }
  },
  getters:{
    addTwo:function(state){
      return state.count*2 + state.num;
    }
  },
  actions: {
    addAction({commit}){
      setTimeout(function(){
        commit('add',10)
      },1000)
    }
  },
  modules: {
  }
})
