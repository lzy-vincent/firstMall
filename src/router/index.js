import Vue from 'vue'
import Router from 'vue-router'

const home = () => import('../views/home/home')
const cate = () => import('../views/cate/cate')
const cart = () => import('../views/cart/cart')
const profile = () => import('../views/profile/profile')

const detail = () => import('../views/detail/detail')
Vue.use(Router)
const routes = [
    {
      path:'',
      redirect:'/home'
    },
    {
      path:'/home',
      component:home
    },
    {
      path:'/cate',
      component:cate
    },
    {
      path:'/cart',
      component:cart
    },
    {
      path:'/profile',
      component:profile
    },
    {
      path:'/detail/:id',
      component:detail
    }
]
const router = new Router({
  routes,
  mode: 'history'
})

// 以上是用来修改连续点击报错
const originalPush = Router.prototype.push
//修改原型对象中的push方法
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
// ---------------------------------------------------------


export default router