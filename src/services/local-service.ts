import { provider } from 'src/provider'

export type Key = 'user'

export class LocalService {
  get jwt() {
    return localStorage.getItem('jwt') ?? ''
  }

  set jwt(jwt: string) {
    localStorage.setItem('jwt', jwt)
  }

  set<T>(key: Key, model: T): void {
    provider.$q.localStorage.set(key, model)
  }

  get<T>(key: Key): T {
    return provider.$q.localStorage.getItem<object>(key) as T
  }
}

export const local = new LocalService()
