import axios from 'axios'

export const _api = axios.create({
  baseURL: process.env.VUE_ROUTER_BASE,
  params: {
    params: {
      polulate: 'deep,2',
    },
  },
})

export type ApiRouteType = 'users' | 'profiles' | 'products' | 'orders' | 'stores' | 'categories'
