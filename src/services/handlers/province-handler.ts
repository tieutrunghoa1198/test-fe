import axios from 'axios'
import { District, Province, SearchResult, Ward } from 'src/models/province'

export class ProvinceHandler {
  URL = 'https://provinces.open-api.vn/api'
  api = axios.create({ baseURL: this.URL })

  async fetchProvinces(): Promise<Province[]> {
    const res = await this.api.get('/p/', { baseURL: this.URL })
    return res.data
  }

  async fetchDistricts(provinceId: number): Promise<District[]> {
    const res = await this.api.get(`/p/${provinceId}?depth=2`, { baseURL: this.URL })
    return res.data.districts
  }

  async fetchWards(districtId: number): Promise<Ward[]> {
    const res = await this.api.get(`/d/${districtId}?depth=2`, { baseURL: this.URL })
    return res.data.wards
  }

  async searchProvinces(text: string): Promise<SearchResult[]> {
    const res = await this.api.get(`/p/search/q=${text}`, { baseURL: this.URL })
    return res.data
  }

  async searchDistricts(text: string): Promise<SearchResult[]> {
    const res = await this.api.get(`/d/search/q=${text}`, { baseURL: this.URL })
    return res.data
  }

  async searchWards(text: string): Promise<SearchResult[]> {
    const res = await this.api.get(`/w/search/q=${text}`, { baseURL: this.URL })
    return res.data
  }
}
