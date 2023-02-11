<template>
  <q-layout>
    <q-page-container>
      <q-page class="flex flex-center">
        <q-card bordered flat class="q-pa-lg flex column gap-5" style="min-width: 400px">
          <div class="text-h3">Sign In</div>
          <q-input v-model="username" label="Username"></q-input>
          <q-input v-model="password" label="Password" type="password"></q-input>
          <q-btn @click="signIn" color="primary" size="lg">Sign In</q-btn>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>
<script lang="ts">
import { loading, notify, router } from 'src/controllers'
import { api } from 'src/services/api-service'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const username = ref('')
    const password = ref('')

    const signIn = async () => {
      try {
        loading.show()
        await api.signIn(username.value, password.value)
        // await api.profile.getMe()
        router.push('/')
      } catch (error) {
        notify.negative('Đăng nhập không thành công')
      } finally {
        loading.hide()
      }
    }
    return { username, password, signIn }
  },
})
</script>
