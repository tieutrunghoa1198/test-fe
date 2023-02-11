import { defineStore } from 'pinia'
import { loading, notify } from 'src/controllers'
import { Profile } from 'src/models'
import { api } from 'src/services/api-service'
import { userStore } from 'src/stores/user-store'

export default defineStore('user-setting', {
  state: () => ({
    profile: {
      name: '',
      phone: '',
      birthday: '',
    } as Profile,
  }),

  getters: {
    email() {
      return userStore().user.email
    },
  },

  actions: {
    async init() {
      try {
        loading.show()
        const user = userStore().user
        if (user.profile) {
          this.profile = await api.profile.findOne(user.profile.id)
        }
      } catch (error) {
        notify.negative('Lấy thông tin không thành công')
      } finally {
        loading.hide()
      }
    },

    async summit() {
      const userId = userStore().user.id
      if (userId) {
        try {
          this.loading = true
          this.profile = { ...this.profile, user: userId }
          if (userStore().user.profile) {
            this.profile = await api.profile.update(this.profile.id, this.profile)
            console.log(this.profile)
          } else {
            this.profile = await api.profile.create(this.profile)
          }
        } catch (error) {
          notify.negative('Đăng kí người dùng thất bại')
        } finally {
          this.loading = false
        }
      }
    },
  },
})
