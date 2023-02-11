import { api } from 'src/services/api-service'
import { local } from 'src/services/local-service'
import { userStore } from 'src/stores/user-store'
import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/auth',
    beforeEnter: (to, from, next) => {
      local.jwt ? next({ path: '/order-management' }) : next()
    },
    children: [
      {
        path: 'sign-in',
        component: () => import('src/modules/auth/sign-in/sign-in-page.vue'),
      },
      {
        path: 'sign-up',
        component: () => import('src/modules/auth/sign-up/sign-up-page.vue'),
      },
    ],
  },
  {
    path: '/',
    beforeEnter: async (to, from, next) => {
      if (!local.jwt) {
        next({ path: '/auth/sign-in' })
      } else {
        const me = await api.user.getMe()
        userStore().user = me
        if (!me.profile && to.path !== '/user-setting') {
          next({ path: '/user-setting' })
        } else {
          next()
        }
      }
    },
    component: () => import('src/layouts/app-layout.vue'),
    children: [
      {
        path: '/order-management',
        component: () => import('src/modules/order-management/order-management-page.vue'),
      },
      {
        path: '/store-management',
        component: () => import('src/modules/store-managament/store-management-page.vue'),
      },
      {
        path: '/shipper-management',
        component: () => import('src/modules/shipper-mamagement/shipper-management-page.vue'),
      },
      {
        path: '/user-setting',
        component: () => import('src/modules/user-setting/user-setting-page.vue'),
      },
    ],
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('src/modules/error/error-page.vue'),
  },
]

export default routes
