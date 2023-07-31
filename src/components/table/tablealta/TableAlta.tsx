import { useEffect, useState } from 'react'
import * as S from '../../../assets/styles/global-styles'
import {
  GetClienteStatus,
  GetClienteStatusprops
} from '@/service/getTablebaixaAlta/GetClienteBaixaAlta'
import {
  GetProductStatus,
  GetProductStatusProps
} from '@/service/getTablebaixaAlta/GetproducBaixaAlta'
import { useParams } from 'react-router-dom'
type TitleProps = {
  title: string
}
export default function TableAlta({ title }: TitleProps) {
  const { id } = useParams()
  const [productsEmAlta, setProductsEmAlta] =
    useState<GetProductStatusProps | null>(null)
  const [clientsEmAlta, setClientsEmAlta] = useState<GetClienteStatus | null>(
    null
  )
  useEffect(() => {
    const fetchProductsEmAlta = async () => {
      try {
        if (id) {
          const productsEmBaixaData = await GetProductStatus(
            Number(id),
            'EM_ALTA'
          )
          setProductsEmAlta(productsEmBaixaData)
        }
      } catch (error) {
        console.error(error)
      }
    }
    const fetchClientsEmAlta = async () => {
      try {
        if (id) {
          const clientsEmBaixaData = await GetClienteStatusprops(
            Number(id),
            'EM_ALTA'
          )
          setClientsEmAlta(clientsEmBaixaData)
        }
      } catch (error) {
        console.error(error)
      }
    }

    fetchProductsEmAlta()
    fetchClientsEmAlta()
  }, [id])
  return (
    <S.TableDivAlta>
      <S.TableTitleAlta>{title}</S.TableTitleAlta>
      <S.StyledTableAlta>
        <thead>
          <tr>
            <th>Id</th>
            <th>Cliente</th>
            <th>Percentual</th>
            <th>Qtd</th>
          </tr>
        </thead>
        <tbody>
          {productsEmAlta?.map(product => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.nome}</td>
              <td>{product.percentual}%</td>
              <td>{product.quantidade}</td>
            </tr>
          ))}
          {clientsEmAlta?.map(client => (
            <tr key={client.id}>
              <td>{client.id}</td>
              <td>{client.nome}</td>
              <td>{client.percentual}%</td>
              <td>{client.quantidade}</td>
            </tr>
          ))}
        </tbody>
      </S.StyledTableAlta>
    </S.TableDivAlta>
  )
}
