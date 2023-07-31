import * as S from '../../../assets/styles/global-styles'
import { MdKeyboardArrowRight } from 'react-icons/md'
import {
  BuscarCliente,
  GetClienteProps
} from '@/service/getclientes/Getclientes'
import { useEffect, useState } from 'react'

export default function TableEmAlta() {
  const [clientes, setClientes] = useState<GetClienteProps[] | null>(null)
  const [classificacaoSelecionada, setClassificacaoSelecionada] = useState('')
  useEffect(() => {
    const fetchClientes = async () => {
      try {
        const clienteData = await BuscarCliente()
        console.log(clienteData.content)
        setClientes(clienteData.content)
      } catch (error) {
        console.error(error)
      }
    }
    fetchClientes()
  }, [])

  const clientesFiltrados = clientes?.filter(
    item => item.classificacao === 'EM_ALTA'
  )

  console.log(clientesFiltrados)
  return (
    <S.Table>
      <thead>
        <tr style={{ backgroundColor: '#001c98' }}>
          <S.Th className="testeleft">id</S.Th>
          <S.Th>Cliente</S.Th>
          <S.Th>Percentual</S.Th>
          <S.Th></S.Th>
          <S.Th style={{ backgroundColor: '#001c98' }}></S.Th>
          <S.Th
            className="testeright"
            style={{ backgroundColor: '#001c98' }}
          ></S.Th>
        </tr>
      </thead>
      <tbody className="tbody">
        {clientesFiltrados?.map(item => (
          <tr key={item.id}>
            <S.Td>{item.id}</S.Td>
            <S.Td>{item.nome}</S.Td>
            <S.Td>{item.percentual} %</S.Td>
            <S.Td>
              <MdKeyboardArrowRight />
            </S.Td>
          </tr>
        ))}
      </tbody>
    </S.Table>
  )
}
