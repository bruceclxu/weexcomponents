// import Vue from 'vue'
import Router from 'vue-router'
import foo from '../foo.vue'
import ButtonView from'../views/ButtonView.vue'
import AddressPicker from '../views/AddressPicker.vue'
import SliderPager from '../views/SliderPager.vue'
import AppDemoList from'../AppDemoList.vue'


Vue.use(Router)

export default new Router({
  // mode: 'abstract',
  routes: [
    // { path: '/foo', component: foo },  
    { path: '/addresspicker', component: AddressPicker }, 
    { path: '/sliderpager', component: SliderPager },  
    { path: '/demolist', component: AppDemoList },    
    { path: '/buttonview', component: ButtonView },      
    { path: '/', redirect: '/buttonview' }
  ]
})
