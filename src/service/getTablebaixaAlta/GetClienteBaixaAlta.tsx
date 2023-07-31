import axios from 'axios'
import { ApiService } from '../baseurl/Baseurl'

export type GetClienteStatus = {
  quantidade: number
  id: number
  nome: string
  percentual: number
  classificacao: string
}[]
export const GetClienteStatusprops = async (
  id: number,
  classificacao: 'EM_ALTA' | 'EM_BAIXA'
): Promise<GetClienteStatus> => {
  try {
    const token = localStorage.getItem('token')
    const headers = {
      Authorization: `Bearer ${token}`,
      'X-TENANT-ID': 'arnia'
    }
    const result = await ApiService.get(`/app/produto/${id}/clientes`, {
      headers,
      params: { classificacao }
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
