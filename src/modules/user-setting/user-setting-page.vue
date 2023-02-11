<template>
  <q-page padding>
    <q-form @submit="store.summit" class="q-gutter-md">
      <div class="q-mb-md">
        <div class="q-mb-sm">Họ Tên</div>
        <q-input v-model="store.profile.name" :rules="[$rules.required]"></q-input>
      </div>
      <div class="q-mb-md">
        <div class="q-mb-sm">Số điện thoại</div>
        <q-input
          v-model="store.profile.phone"
          mask="### - #### - ###"
          :rules="[$rules.required, (val) => $rules.minLength(val, 16)]"
        ></q-input>
      </div>
      <div class="q-mb-md">
        <div class="q-mb-sm">Email</div>
        <q-input v-model="store.email" type="email" :rules="[$rules.required, $rules.email]" readonly></q-input>
      </div>
      <div class="q-mb-md">
        <div class="q-mb-sm">Sinh nhật</div>
        <q-input v-model="store.profile.birthday" type="date" :rules="[$rules.required]" />
      </div>
      <q-btn :loading="store.loading" color="primary" type="summit">Summit</q-btn>
    </q-form>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import userSettingStore from './user-setting-viewmodel'

export default defineComponent({
  setup() {
    const store = userSettingStore()
    store.init()
    return { store }
  },
})
</script>

<style scoped></style>
