import { flow, makeObservable } from 'mobx'
import { notify } from 'src/controllers'

export class StoreManagemnetViewModel {
  constructor() {
    makeObservable(this)
    this.fetch()
  }

  @flow *fetch() {
    try {
      //
    } catch (error) {
      notify.negative('Fetch not success')
    }
  }
}
