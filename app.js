import foo from './src/foo.vue'
import './src/data/config'

foo.el = '#root'
export default new Vue(foo);