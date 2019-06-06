import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

//1.导入插件
import ElementUI from 'element-ui'
import vueRouter from 'vue-router'
//插件样式
import 'element-ui/lib/theme-chalk/index.css'
//2.注册插件
Vue.use(ElementUI)
Vue.use(vueRouter)
//1.导入插件
import Login from './pages/login.vue'
//配置路由
const routes=[
  {path:"/login",component,Login}
]
//路由实例
const router=new vueRouter({routes})
Vue.config.productionTip = false
//绑定到原型
Vue.prototype.axios=axios

new Vue({
  render: h => h(App),
  //挂载路由
  router
}).$mount('#app')
