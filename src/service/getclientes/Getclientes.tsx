import axios from 'axios'
import { ApiService } from '../baseurl/Baseurl'

export type GetClienteProps = {
  classificacao: 'EM_ALTA' | 'EM_BAIXA'
  id: number
  nome: string
  percentual: number
}
export type GetPropsCliente = {
  content: GetClienteProps[]
}

export const BuscarCliente = async (): Promise<GetPropsCliente> => {
  try {
    const token = localStorage.getItem('token')
    const headers = {
      Authorization: `Bearer ${token}`,
      'X-TENANT-ID': 'arnia'
    }
    const result = await ApiService.get('/app/cliente', { headers })

    if (result.status === 200) {
      console.log(result)
      return result.data
    }
  } catch (error) {
    console.error('operação não autorizada', error)
  }
  throw new Error('Página em manutenção')
}
//.......total clientes.....//
export type GetTotalCliente = {
  content: {
    content: {
      classificacao: 'EM_ALTA' | 'EM_BAIXA'
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
}
export const GetClienteAll = async (
  query: string
): Promise<GetTotalCliente> => {
  try {
    const token = localStorage.getItem('token')
    const headers = {
      Authorization: `Bearer ${token}`,
      'X-TENANT-ID': 'arnia'
    }
    const result = await ApiService.get('/app/cliente', {
      headers,
      params: {
        query
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
