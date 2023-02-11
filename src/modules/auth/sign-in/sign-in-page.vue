<template>
  <q-layout>
    <q-page-container>
      <q-page class="flex flex-center">
        <q-card bordered flat class="q-pa-lg flex column" style="min-width: 400px">
          <div class="text-h3 q-mb-md">Đăng nhập</div>

          <q-form @submit="store.signIn" class="q-gutter-md">
            <q-input v-model="store.username" label="Email" type="email" :rules="[$rules.required]"></q-input>
            <q-input
              v-model="store.password"
              label="Password"
              :type="!showPwd ? 'password' : 'text'"
              :rules="[$rules.required]"
            >
              <template v-slot:append>
                <q-icon
                  :name="showPwd ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="showPwd = !showPwd"
                />
              </template>
            </q-input>

            <q-btn color="primary" type="summit"> Đăng nhập </q-btn>
          </q-form>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import { signInStore } from './sign-in-store'

export default defineComponent({
  setup() {
    const showPwd = ref(false)
    const store = signInStore()
    return { store, showPwd }
  },

  beforeUnmount() {
    // this.store.$reset()
  },
})
</script>
