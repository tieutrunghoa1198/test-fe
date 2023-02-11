import { Order, Product, Profile, Store, User } from 'src/models'
import { _api } from '.'
import { OrderHandler } from './handlers/order-handler'
import { ProductHandler } from './handlers/product-handler'
import { UserHandler } from './handlers/user-handler'
import { ProvinceHandler } from './handlers/province-handler'
import { StoreHandler } from './handlers/store-handler'
import { router } from 'src/controllers'
import { ProfileHandler } from './handlers/profile-handler'
import { local } from './local-service'
import { userStore } from 'src/stores/user-store'

export class ApiService {
  user = new UserHandler<User>('users')
  profile = new ProfileHandler<Profile>('profiles')
  store = new StoreHandler<Store>('stores')
  order = new OrderHandler<Order>('orders')
  product = new ProductHandler<Product>('products')
  province = new ProvinceHandler()

  constructor() {
    _api.interceptors.request.use((config) => {
      const jwt = local.jwt
      if (jwt) {
        config.headers = { ...config.headers, Authorization: `Bearer ${jwt}` }
      }
      return config
    })

    _api.interceptors.response.use((response) => {
      if (response.status === 200) {
        switch (response.config.url) {
          case 'auth/local':
          case 'auth/change-password':
            local.jwt = response.data.jwt
            break
          case 'users/me?populate=deep':
            userStore().user = response.data
            break
          default:
            break
        }
      }
      return response
    })
  }

  async signIn(username: string, password: string): Promise<User> {
    const res = await _api.post('auth/local', { identifier: username, password: password })
    return res.data
  }

  async signUp(email: string, password: string) {
    const res = await _api.post('auth/local/register', {
      username: email,
      email: email,
      password: password,
    })
    return res.data
  }
  async signOut() {
    local.jwt = ''
    router.push('/sign-in')
  }

  async changePassword(currentPassword: string, password: string, passwordConfirmation: string): Promise<User> {
    const res = await _api.post('auth/change-password', {
      currentPassword,
      password,
      passwordConfirmation,
    })
    return res.data
  }

  async forgotPassword(email: string): Promise<User> {
    const res = await _api.post('auth/forgot-password', { email })
    return res.data
  }

  async resetPassword(code: string, password: string, passwordConfirmation: string): Promise<User> {
    const res = await _api.post('auth/reset-password', {
      code,
      password,
      passwordConfirmation,
    })
    return res.data
  }
}

export const api = new ApiService()
