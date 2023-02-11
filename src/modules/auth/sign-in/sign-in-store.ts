import { defineStore } from 'pinia'
import { loading, notify, router } from 'src/controllers'
import { api } from 'src/services/api-service'

export const signInStore = defineStore('sign-in', {
  state: () => ({
    username: 'n.anhtu0101@gmail.com' as string,
    password: 'Nanhtu#123' as string,
  }),

  actions: {
    async signIn() {
      try {
        loading.show()
        await api.signIn(this.username, this.password)
        router.push('/')
      } catch (error) {
        notify.negative('Đăng nhập không thành công')
      } finally {
        loading.hide()
      }
    },
  },
})
