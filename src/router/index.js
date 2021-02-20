import Vue from 'vue'
import VueRouter from 'vue-router'
// import store from '@/store'
const Layout = () => import('@/views/Layout')
const Login = () => import('@/views/login/login.vue') // 我的

const Home = () => import('@/views/Home/home.vue') // 首页
const Team = () => import('@/views/team/team.vue') // 团队
const OrderForm = () => import('@/views/orderForm/orderForm.vue') // 订单
const Mine = () => import('@/views/Mine/mine.vue') // 我的
const ExChange = () => import('@/views/exchange/exchange.vue') // 我的
const XinXi = () => import('@/views/Mine/xinxi.vue') // 我的

const Listcontent = () => import('@/views/Home/listcontent.vue')
const Listtwo = () => import('@/views/Home/listtwo.vue')
const IntegralQuery = () => import('@/views/exchange/integralQuery.vue') // 积分查询
const Conversion = () => import('@/views/exchange/conversion.vue') // 兑换conversion
const AddMembers = () => import('@/views/team/addMembers.vue') // 添加成员
const Discount = () => import('@/views/team/discount.vue') // 添加成员

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '/',
          name: 'home',
          component: Home
        },
        {
          path: '/team',
          name: 'team',
          component: Team
        },
        {
          path: '/exchange',
          name: 'exchange',
          component: ExChange
        },
        {
          path: '/orderForm',
          name: 'orderForm',
          component: OrderForm
        },
        {
          path: '/mine',
          name: 'mine',
          component: Mine
        },
        {
          path: '/xinxi',
          name: 'xinxi',
          component: XinXi
        },
        {
          path: '/listcontent',
          name: 'listcontent',
          component: Listcontent
        },
        {
          path: '/listtwo',
          name: 'listtwo',
          component: Listtwo
        },
        {
          path: '/conversion',
          name: 'conversion',
          component: Conversion
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/integralQuery',
      name: 'integralQuery',
      component: IntegralQuery
    },
    {
      // 添加成员
      path: '/addMembers',
      name: 'addMembers',
      component: AddMembers
    },
    {
      // 折扣管理
      path: '/discount',
      name: 'discount',
      component: Discount
    }
  ]
})

// 登录拦截
// 条件一： 需要登录
// 条件二： 没有token信息
// router.beforeEach((to, from, next) => {
//   // 跳转的时候需要 带上当前的路由地址
//   const login = { path: '/login', query: { redirect: to.path } }
//   if (to.path.startsWith('/') && !store.state.user.token) return next(login)
//   next()
// })

export default router
