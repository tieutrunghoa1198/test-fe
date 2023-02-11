import { QBtn, QInput, QSelect } from 'quasar'
import { setQuasarComponentDefaultPropValues } from 'src/utils/components-util'

setQuasarComponentDefaultPropValues(QBtn, {
  unelevated: true,
  noCaps: true,
})

setQuasarComponentDefaultPropValues(QInput, {
  outlined: true,
  lazyRules: true,
})

setQuasarComponentDefaultPropValues(QSelect, {
  outlined: true,
})
