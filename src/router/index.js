import Vue from 'vue'
import Router from 'vue-router'
import { Indicator } from 'mint-ui'

const IndexComponent = () => import('@/views/index/index');
const GroupComponent = resolve => {
  Indicator.open();
  require.ensure(['@/views/group/index'],() => {
    resolve(require(/* webpackChunkName: "category" */'@/views/group/index'))
    Indicator.close();
  })
}
const CartComponent = resolve => {
  Indicator.open();
  require.ensure(['@/views/cart/index'],() => {
    resolve(require(/* webpackChunkName: "category" */'@/views/cart/index'))
    Indicator.close();
  })
}
const UserComponent = resolve => {
  Indicator.open();
  require.ensure(['@/views/user/index'],() => {
    resolve(require(/* webpackChunkName: "category" */'@/views/user/index'))
    Indicator.close();
  })
}

const NotFoundComponent = () => import('@/views/error/Error');

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', redirect: '/home' },
    {
      path: '/home',
      name: 'IndexComponent',
      component: IndexComponent,
      meta:{
        showBottomTabbar:true
      }
    },
    {
      path: '/group',
      name: 'GroupComponent',
      component: GroupComponent,
      meta:{
        showBottomTabbar:true
      }
    },
    {
      path: '/cart',
      name: 'CartComponent',
      component: CartComponent,
      meta:{
        showBottomTabbar:true
      }
    },
    {
      path: '/user',
      name: 'UserComponent',
      component: UserComponent,
      meta:{
        showBottomTabbar:true
      }
    },
    { path: '*', component: NotFoundComponent }

  ]
})
