import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    a: '我是测试'
  },
  mutations: {
    addSomeThings (state, obj) {
      state.a = obj
    }
  },
  actions: {
  },
  modules: {
  }
})
