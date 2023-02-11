import { QNotifyCreateOptions } from 'quasar'
import { provider } from 'src/provider'

export type TypeNotify = 'positive' | 'negative' | 'warning' | 'info' | 'ongoing'

export class NotifyController {
  config: QNotifyCreateOptions = {
    timeout: 4000,
  }

  positive(message: string) {
    this.config = { ...this.config, type: 'positive', message }
    this.show()
  }
  negative(message: string) {
    this.config = { ...this.config, type: 'negative', message }
    this.show()
  }
  warning(message: string) {
    this.config = { ...this.config, type: 'warning', message }
    this.show()
  }
  info(message: string) {
    this.config = { ...this.config, type: 'info', message }
    this.show()
  }
  ongoing(message: string) {
    this.config = { ...this.config, type: 'ongoing', message }
    this.show()
  }

  show() {
    provider.$q.notify(this.config)
  }
}

export const notify = new NotifyController()
