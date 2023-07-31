import { ApiService } from '../baseurl/Baseurl'

export type GetProductProps = {
  classificacao: 'EM_ALTA' | 'EM_BAIXA'
  id: number
  nome: string
  percentual: number
}
export type GetPropsProduct = {
  content: GetProductProps[]
}

export const BuscarProduto = async (): Promise<GetPropsProduct> => {
  try {
    const token = localStorage.getItem('token')
    const headers = {
      Authorization: `Bearer ${token}`,
      'X-TENANT-ID': 'arnia'
    }
    const result = await ApiService.get('/app/produto', { headers })

    if (result.status === 200) {
      console.log(result)
      return result.data
    }
  } catch (error) {
    console.error('operação não autorizada', error)
  }
  throw new Error('Página em manutenção')
}
