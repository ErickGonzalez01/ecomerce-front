import Vue from 'vue'
import Vuex from 'vuex'
import modales from "./modales"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    URL_BASE:"http://192.168.1.2"   
  },
  getters: {
    //codigo aqui
  },
  mutations: {
    //codigo aqui
  },
  actions: {
    //codigo aqui
  },
  modules: {
    modales
  }
})
