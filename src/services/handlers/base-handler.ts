import { ApiRouteType, _api } from '..'

export class BaseHandler<T> {
  route = ''

  constructor(route: ApiRouteType) {
    this.route = route
  }

  async findOne(id: number, deep = 2): Promise<T> {
    const res = await _api.get(`${this.route}/${id}`, {
      params: {
        polulate: `deep,${deep}`,
      },
    })
    return res.data.data
  }

  async find(deep = 2): Promise<T[]> {
    const res = await _api.get(`${this.route}`, {
      params: {
        polulate: `deep,${deep}`,
      },
    })
    return res.data
  }

  async create(model: T, deep = 2): Promise<T> {
    const res = await _api.post(
      `${this.route}`,
      { data: { ...model } },
      {
        params: {
          polulate: `deep,${deep}`,
        },
      }
    )
    return res.data.data
  }

  async update(id: number, model: T, deep = 2): Promise<T> {
    const res = await _api.put(
      `${this.route}/${id}`,
      { data: { ...model } },
      {
        params: {
          polulate: `deep,${deep}`,
        },
      }
    )
    return res.data.data
  }

  async delete(id: number, deep = 2): Promise<T> {
    const res = await _api.delete(`${this.route}/${id}`, {
      params: {
        polulate: `deep,${deep}`,
      },
    })
    return res.data.data
  }
}
