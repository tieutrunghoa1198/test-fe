import get from 'lodash/get'
import { date } from 'quasar'
import { boot } from 'quasar/wrappers'

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $format: (val: Date, format: string) => string
    $get: (any: any, path: string, defaultValue: string) => any
    $rules: Rules
  }
}

export interface Rules {
  required: (val: any) => boolean | string
  email: (val: string) => boolean | string
  maxLength: (val: string, length: number) => boolean | string
  minLength: (val: string, length: number) => boolean | string
}

export const rules: Rules = {
  required: (val: any) => !!val || 'Vui lòng nhập',
  maxLength: (val: string, length: number) => val.length <= length || `Tối đa ${length} kí tự`,
  minLength: (val: string, length: number) => val.length >= length || `Tối thiểu ${length} kí tự`,
  email: (v: string) =>
    (v &&
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        v.trim()
      )) ||
    !v ||
    'Đây không phải email',
}

export default boot(({ app }) => {
  const $_format = (val: Date, format: string) => date.formatDate(val, format)
  const $_get = (any: any, path: string, defaultValue: string) => get(any, path, defaultValue)

  app.config.globalProperties.$format = $_format
  app.config.globalProperties.$get = $_get
  app.config.globalProperties.$rules = rules
})
