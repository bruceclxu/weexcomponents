// import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'

// Vuex is auto installed on the web
if (WXEnvironment.platform !== 'Web') {
  Vue.use(Vuex)
}

const store = new Vuex.Store({
  actions,
  // mutations,
  state: {
    // 首页分类
    classeslist:[],    
    productList:[],//商品列表
    peoplefoodList:[],//人群食物列表
  },
  getters: {
 
  }
})

export default store
