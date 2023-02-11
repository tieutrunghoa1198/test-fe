export interface User {
  id: number
  username: string
  email: string
  provider: string
  confirmed: boolean
  blocked: boolean
  profile?: Profile
}

export interface Profile {
  id: number
  user: number
  name: string
  phone: string
  birthday: string
  store?: Store
}

export interface Store {
  id?: number
  name: string
  phone: string
  email: string
  address: string
  description: string
  rating: string
  categories: Category[]
}

export interface Category {
  id?: number
  name: string
  products: Product[]
}

export type ProductStatus = 'active' | 'inactive' | 'cancel'
export interface Product {
  id?: number
  name: string
  price: number
  unit: string
  description: string
  image: string
  attributes: any
  status: ProductStatus
}

export interface Order {
  id: string
  user: User
  code: string
  name: string
  address: string
  products: Product[]
}
