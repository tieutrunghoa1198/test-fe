import { provider } from 'src/provider'

export class LoadingController {
  request = 0

  show() {
    if (!provider.$q.loading.isActive) provider.$q.loading.show()
    this.request++
  }

  hide() {
    this.request--
    if (!this.request) provider.$q.loading.hide()
  }
}

export const loading = new LoadingController()
