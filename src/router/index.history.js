import Vue from 'vue'
import Router from 'vue-router'
import { Indicator } from 'mint-ui'

const IndexComponent = () => import('@/components/index/index');
const GroupComponent = resolve => {
  Indicator.open();
  require.ensure(['@/components/group/index'],() => {
    resolve(require(/* webpackChunkName: "category" */'@/components/group/index'))
    Indicator.close();
  })
}
const CartComponent = resolve => {
  Indicator.open();
  require.ensure(['@/components/cart/index'],() => {
    resolve(require(/* webpackChunkName: "category" */'@/components/cart/index'))
    Indicator.close();
  })
}
const UserComponent = resolve => {
  Indicator.open();
  require.ensure(['@/components/user/index'],() => {
    resolve(require(/* webpackChunkName: "category" */'@/components/user/index'))
    Indicator.close();
  })
}

const NotFoundComponent = () => import('@/components/error/Error');

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', redirect: '/home' },
    {
      path: '/home',
      name: 'IndexComponent',
      component: IndexComponent
    },
    {
      path: '/group',
      name: 'GroupComponent',
      component: GroupComponent
    },
    {
      path: '/cart',
      name: 'CartComponent',
      component: CartComponent
    },
    {
      path: '/user',
      name: 'UserComponent',
      component: UserComponent
    },
    { path: '*', component: NotFoundComponent }

  ]
})
