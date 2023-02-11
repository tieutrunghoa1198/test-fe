<template>
  <div></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { forgotPasswordStore } from './forgot-password-store'

export default defineComponent({
  setup() {
    const store = forgotPasswordStore()
    store.constructor()
    return { store }
  },
})
</script>

<style scoped></style>
