// import Vue from 'vue'
import Vuex from 'vuex'
// import * as mutations from './mutations'

// Vuex is auto installed on the web
if (WXEnvironment.platform !== 'Web') {
  Vue.use(Vuex)
}

const store = new Vuex.Store({
//   actions,
  // mutations,
  state: {
  },
  getters: {
 
  }
})

export default store
