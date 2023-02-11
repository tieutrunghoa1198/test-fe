<template>
  <router-view />
</template>

<script lang="ts">
import { useQuasar } from 'quasar'
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import { provider } from './provider'

export default defineComponent({
  name: 'App',
  setup() {
    provider.$q = useQuasar()
    provider.router = useRouter()
  },
})
</script>
