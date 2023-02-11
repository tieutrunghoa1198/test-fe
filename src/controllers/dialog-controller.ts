import { provider } from 'src/provider'

export class Dialog {
  confirm({ title = '', message = '' }): Promise<boolean> {
    return new Promise((resolve, reject) => {
      provider.$q
        .dialog({
          title,
          message,
          cancel: true,
          persistent: true,
        })
        .onOk(() => {
          resolve(true)
        })
        .onCancel(() => {
          reject(false)
        })
    })
  }

  open<T>(component: any) {
    return new Promise<T>((resolve, reject) => {
      provider.$q
        .dialog({
          component: component,
        })
        .onOk((payload) => {
          resolve(payload)
        })
        .onCancel(() => {
          reject(undefined)
        })
    })
  }
}

export const dialog = new Dialog()
