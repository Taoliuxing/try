import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    color:"#008c8c",
    title:"电影",
    photo:[]
  },
  mutations: {
    change(state,{color,title}){
      state.color = color;
      state.title = title;
    },
    addPhoto(state,arr){
      state.photo = arr;
    }
  },
  actions: {
  },
  modules: {
  }
})
