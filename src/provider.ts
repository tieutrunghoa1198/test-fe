import { Store } from 'pinia'
import { QVueGlobals } from 'quasar'
import { Router } from 'vue-router'

export class Provider {
  $q!: QVueGlobals
  router!: Router
  local!: Store<'local-store'>
}

export const provider = new Provider()
