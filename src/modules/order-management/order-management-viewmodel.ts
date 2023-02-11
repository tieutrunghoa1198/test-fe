import { flow, makeObservable, observable } from 'mobx'
import { loading, notify } from 'src/controllers'
import { Profile } from 'src/models'

export class OrderManagementViewModel {
  @observable profile: Profile | undefined = undefined

  constructor() {
    makeObservable(this)
    this.fetchProfile()
  }

  @flow *fetchProfile() {
    try {
      loading.show()
    } catch (error) {
      notify.negative(error as string)
    } finally {
      loading.hide()
    }
  }
}
