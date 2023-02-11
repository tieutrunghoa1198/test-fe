<template>
  <q-layout view="lHh LpR fFf">
    <q-header reveal class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="open" />

        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar>
          Title
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="drawer" side="left" bordered>
      <q-scroll-area class="fit">
        <q-list>
          <q-item
            v-for="(appTile, index) in appTiles"
            :key="index"
            :to="appTile.to"
            :disable="!user.user.profile && appTile.to !== '/user-setting'"
            clickable
            v-ripple
          >
            <q-item-section avatar>
              <q-icon :name="appTile.icon" />
            </q-item-section>
            <q-item-section>
              {{ appTile.label }}
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
<script lang="ts">
import { appTiles } from 'src/constants'
import { userStore } from 'src/stores/user-store'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const drawer = ref(false)
    const user = userStore()

    const open = () => {
      drawer.value = !drawer.value
    }

    return {
      appTiles,
      drawer,
      open,
      user,
    }
  },
})
</script>
