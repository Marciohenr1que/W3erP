import axios from 'axios'
import { ApiService } from '../baseurl/Baseurl'

export type GetProductPropsAll = {
  content: {
    classificacao: 'EM_ALTA' | 'EM_BAIXA' | 'NEUTRO'
    id: number
    nome: string
    percentual: number
  }[]

  empty: true
  first: true
  last: true
  number: number
  numberOfElements: number
  pageable: {
    offset: number
    pageNumber: number
    pageSize: number
    paged: true
    sort: {
      empty: true
      sorted: true
      unsorted: true
    }
    unpaged: true
  }
  size: number
  sort: {
    empty: true
    sorted: true
    unsorted: true
  }
  totalElements: number
  totalPages: number
}

export const GetProduct = async (
  query: string,
  page: number
): Promise<GetProductPropsAll> => {
  try {
    const token = localStorage.getItem('token')
    const headers = {
      Authorization: `Bearer ${token}`,
      'X-TENANT-ID': 'arnia'
    }
    const result = await ApiService.get('/app/produto', {
      headers,
      params: {
        query,
        page: page - 1,
        size: 20
      }
    })

    if (result.status === 200) {
      return result.data
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 401) {
        throw new Error('Operação não autorizada')
      }
      if (error.response?.status === 403) {
        throw new Error('Usuário não tem permissão de acesso')
      }
      if (error.response?.status === 404) {
        throw new Error('Página não encontrada')
      }
    }
    throw new Error('Página em manutenção')
  }
  throw new Error('Página em manutenção')
}
