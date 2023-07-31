import {
  GetProductStatus,
  GetProductStatusProps
} from '@/service/getTablebaixaAlta/GetproducBaixaAlta'
import * as S from '../../assets/styles/global-styles'
import { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'
import {
  GetClienteStatus,
  GetClienteStatusprops
} from '@/service/getTablebaixaAlta/GetClienteBaixaAlta'

type ClassificationProps = {
  title: string
}

export default function TableBaixa({ title }: ClassificationProps) {
  const { id } = useParams()
  const [productsEmBaixa, setProductsEmBaixa] =
    useState<GetProductStatusProps | null>(null)
  const [clientsEmBaixa, setClientsEmBaixa] = useState<GetClienteStatus | null>(
    null
  )
  useEffect(() => {
    const fetchProductsEmBaixa = async () => {
      try {
        if (id) {
          const productsEmBaixaData = await GetProductStatus(
            Number(id),
            'EM_BAIXA'
          )
          setProductsEmBaixa(productsEmBaixaData)
        }
      } catch (error) {
        console.error(error)
      }
    }
    const fetchClientsEmBaixa = async () => {
      try {
        if (id) {
          const clientsEmBaixaData = await GetClienteStatusprops(
            Number(id),
            'EM_BAIXA'
          )
          setClientsEmBaixa(clientsEmBaixaData)
        }
      } catch (error) {
        console.error(error)
      }
    }

    fetchProductsEmBaixa()
    fetchClientsEmBaixa()
  }, [id])
  console.log(productsEmBaixa)
  console.log(clientsEmBaixa)
  return (
    <S.TabledivBaixa>
      <S.TableTitleBaixa>{title}</S.TableTitleBaixa>
      <S.StyledTableBaixa>
        <thead>
          <tr>
            <th>Id</th>
            <th>Cliente</th>
            <th>Percentual</th>
            <th>Qtd</th>
          </tr>
        </thead>
        <tbody>
          {productsEmBaixa?.map(product => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.nome}</td>
              <td>{product.percentual}%</td>
              <td>{product.quantidade}</td>
            </tr>
          ))}
          {clientsEmBaixa?.map(client => (
            <tr key={client.id}>
              <td>{client.id}</td>
              <td>{client.nome}</td>
              <td>{client.percentual}%</td>
              <td>{client.quantidade}</td>
            </tr>
          ))}
        </tbody>
      </S.StyledTableBaixa>
    </S.TabledivBaixa>
  )
}
