import { defineStore } from 'pinia'
import { User } from 'src/models'

export const userStore = defineStore('user-store', {
  state: () => ({
    user: {} as User,
  }),
})
