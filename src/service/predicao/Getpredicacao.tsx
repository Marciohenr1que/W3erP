import axios from 'axios'
import { ApiService } from '../baseurl/Baseurl'
export type GetPreditionCardProps = {
  content: {
    id: number
    nome: string
    produtos: {
      id: number
      nome: string
      proximaCompra: string
    }[]
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

export const GetPreditionCard = async (
  query: string,
  page: number
): Promise<GetPreditionCardProps> => {
  try {
    const token = localStorage.getItem('token')
    const headers = {
      Authorization: `Bearer ${token}`,
      'X-TENANT-ID': 'arnia'
    }
    const result = await ApiService.get('/app/predicao', {
      headers,
      params: {
        query,
        page: 20,
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
  }
  throw new Error('Página em manutenção')
}
//.....predição cliente ///
export type GetPredictionDataClient = {
  email: string
  nome: string
  telefone: string
}

export const GetPreditionDataClient = async (
  id: string
): Promise<GetPredictionDataClient> => {
  try {
    const token = localStorage.getItem('token')
    const headers = {
      Authorization: `Bearer ${token}`,
      'X-TENANT-ID': 'arnia'
    }
    const result = await ApiService.get(`/app/cliente/${id}`, {
      headers,
      params: { id }
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
  }
  throw new Error('Página em manutenção')
}
//.......predição historico.....//
export type GetHistoricProps = {
  content: {
    id: number
    nome: string
    ultimaCompra: string
    quantidade: number
  }[]
}

export const GetPreditionHistoric = async (
  id: string
): Promise<GetHistoricProps> => {
  try {
    const token = localStorage.getItem('token')
    const headers = {
      Authorization: `Bearer ${token}`,
      'X-TENANT-ID': 'arnia'
    }
    const result = await ApiService.get(`/app/predicao/${id}/historico`, {
      headers,
      params: { id }
    })

    if (result.status === 200) {
      return result.data
    }
  } catch (error) {}
  throw new Error('Página em manutenção')
}

//.......prediçao produtos esgotados ........///
export type GetEsgotadoProps = {
  content: {
    id: number
    nome: string
    quantidade: number
    ultimaCompra: string
    proximaCompra: string
  }[]
}

export const GetPreditionEsgotado = async (
  id: string
): Promise<GetEsgotadoProps> => {
  try {
    const token = localStorage.getItem('token')
    const headers = {
      Authorization: `Bearer ${token}`,
      'X-TENANT-ID': 'arnia'
    }
    const result = await ApiService.get(`/app/predicao/${id}/esgotando`, {
      headers,
      params: { id }
    })

    if (result.status === 200) {
      return result.data
    }
  } catch (error) {}
  throw new Error('Página em manutenção')
}
