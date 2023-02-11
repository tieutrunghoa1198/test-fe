<template>
  <q-layout>
    <q-page-container>
      <q-page class="flex flex-center">
        <q-card bordered flat class="q-pa-lg flex column gap-5" style="min-width: 400px">
          <div class="text-h3">Sign Up</div>
          <q-input v-model="username" label="Username"></q-input>
          <q-input v-model="password" label="Password" type="password"></q-input>
          <q-input v-model="email" label="Email" type="email"></q-input>
          <q-btn @click="signUp" color="primary" size="lg">Sign Up</q-btn>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>
<script lang="ts">
import { loading, notify } from 'src/controllers'
import { api } from 'src/services/api-service'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const username = ref('')
    const password = ref('')
    const email = ref('')

    const signUp = async () => {
      try {
        loading.show()
        await api.signUp(username.value, password.value, email.value)
      } catch (error) {
        notify.negative('Đăng kí không thành công')
      } finally {
        loading.hide()
      }
    }
    return { username, password, email, signUp }
  },
})
</script>
