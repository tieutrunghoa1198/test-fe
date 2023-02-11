import { User } from 'src/models'
import { _api } from '..'
import { BaseHandler } from './base-handler'

export class UserHandler<T> extends BaseHandler<T> {
  async getMe(deep = 2): Promise<User> {
    const res = await _api.get('users/me?populate=deep', {
      params: {
        polulate: `deep,${deep}`,
      },
    })
    return res.data
  }
}
