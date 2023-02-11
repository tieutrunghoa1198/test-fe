import { defineStore } from 'pinia'
import { loading, notify } from 'src/controllers'
import { api } from 'src/services/api-service'

export const signUpStore = defineStore('signUp', {
  state: () => ({
    email: '' as string,
    password: '' as string,
    rePassword: '' as string,
  }),

  actions: {
    async signUp() {
      try {
        loading.show()
        if (this.password !== this.rePassword) {
          notify.negative('Mật khẩu không trùng khớp')
          return
        }
        await api.signUp(this.email, this.password)
      } catch (error) {
        notify.negative('Đăng kí không thành công')
      } finally {
        loading.hide()
      }
    },
  },
})
