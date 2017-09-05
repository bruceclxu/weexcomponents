import './src/data/config'
import app from './src/app.vue'
import router from './src/router/router'
import store from './src/store'
import { sync } from 'vuex-router-sync'
import mixins from './src/mixins'

sync(store, router)
Vue.mixin(mixins)
// foo.el = '#root'
export default new Vue(Vue.util.extend({ el: '#root', router, store }, app))
router.push('/')
