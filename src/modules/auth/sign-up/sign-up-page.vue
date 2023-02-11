<template>
  <q-layout>
    <q-page-container>
      <q-page class="flex flex-center">
        <q-card bordered flat class="q-pa-lg flex column" style="min-width: 400px">
          <div class="text-h3 q-mb-md">Đăng kí</div>

          <q-form @submit="store.signUp" class="q-gutter-md">
            <q-input
              v-model="store.email"
              label="Email"
              type="email"
              :rules="[$rules.required, $rules.email]"
            ></q-input>
            <q-input
              v-model="store.password"
              label="Password"
              :type="!showPwd ? 'password' : 'text'"
              :rules="[$rules.required, (val) => $rules.minLength(val, 6)]"
            >
              <template v-slot:append>
                <q-icon
                  :name="showPwd ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="showPwd = !showPwd"
                />
              </template>
            </q-input>
            <q-input
              v-model="store.rePassword"
              label="Password"
              :type="!showRePwd ? 'password' : 'text'"
              :rules="[$rules.required, (val) => $rules.minLength(val, 6)]"
            >
              <template v-slot:append>
                <q-icon
                  :name="showRePwd ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="showRePwd = !showRePwd"
                />
              </template>
            </q-input>
            <q-btn color="primary" type="summit"> Đăng kí </q-btn>
          </q-form>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import { signUpStore } from './sign-up-store'

export default defineComponent({
  setup() {
    const showPwd = ref(false)
    const showRePwd = ref(false)
    const store = signUpStore()
    return { store, showPwd, showRePwd }
  },
})
</script>
