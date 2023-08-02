import { MdKeyboardArrowRight } from 'react-icons/md'
import * as S from '../../assets/styles/global-styles'
import { BuscarProduto } from '@/service/getproduct'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  BuscarCliente,
  GetClienteProps
} from '@/service/getclientes/Getclientes'

type TableProps = {
  type: 'produtos' | 'clientes'
  id: string
  produto: string
  percentual: string
  status?: boolean
  showIcon?: boolean
  showStatus?: boolean
  productfilter?: GetproductProps
  clientefilter?: GetCliente
  data?: GetproductProps
}

type GetproductProps = {
  id: number
  nome: string
  classificacao: string
  percentual: number
}[]
type GetCliente = {
  id: number
  nome: string
  classificacao: string
  percentual: number
}[]

const useProdutos = () => {
  const [produtos, setProdutos] = useState<GetproductProps>([]) //tipagem de produto

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productData = await BuscarProduto()
        setProdutos(productData.content)
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }, [])

  return produtos
}

const useClientes = () => {
  const [clientes, setClientes] = useState<GetCliente>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const clientData = await BuscarCliente()
        setClientes(clientData.content)
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }, [])

  return clientes
}

export default function TableComponent({
  type,
  id,
  produto,
  percentual,
  status,
  showIcon,
  showStatus
}: TableProps) {
  const [productdados, setProductdados] = useState<
    'EM_ALTA' | 'EM_BAIXA' | null
  >(null)
  const produtos = useProdutos()
  const clientes = useClientes()

  const dataToDisplay = type === 'produtos' ? produtos : clientes

  const productfilter =
    productdados === null
      ? dataToDisplay
      : dataToDisplay.filter(item => item.classificacao === productdados)

  const tableData = productfilter.map(item => ({
    classificacao: item.classificacao,
    id: item.id,
    nome: item.nome,
    percentual: item.percentual
  }))

  console.log(tableData)
  const navigate = useNavigate()

  return (
    <S.Table>
      <thead>
        <tr style={{ backgroundColor: '#001c98' }}>
          <S.Th className="testeleft">{id}</S.Th>
          <S.Th>{produto}</S.Th>
          <S.Th>{percentual}</S.Th>
          {status && <S.Th>Status</S.Th>}
          <S.Th></S.Th>
          <S.Th style={{ backgroundColor: '#001c98' }}></S.Th>
          <S.Th
            className="testeright"
            style={{ backgroundColor: '#001c98' }}
          ></S.Th>
        </tr>
      </thead>
      <tbody className="tbody">
        {productfilter !== null &&
          tableData.map(item => (
            <tr key={item.id}>
              <S.Td>{item.id}</S.Td>
              <S.Td>{item.nome}</S.Td>
              <S.Td>{item.percentual} %</S.Td>
              {showIcon && (
                <S.Td onClick={() => navigate(`/${type}/${item.id}`)}>
                  <MdKeyboardArrowRight />
                </S.Td>
              )}
            </tr>
          ))}
      </tbody>
    </S.Table>
  )
}
