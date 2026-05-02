import type { Product } from '@/types'
import { API_BASE_URL } from '@/constants'


export const fetchProducts = async (): Promise<Product[]> => {
  const res = await fetch(`${API_BASE_URL}/products`)
  if (!res.ok) throw new Error('Error downloading data from server')

  const responseData = await res.json()
  return responseData.data as Product[]
}
