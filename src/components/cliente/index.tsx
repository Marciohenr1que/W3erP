import { useEffect, useState } from 'react'
import * as S from '../../assets/styles/global-styles'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { FaUnderline } from 'react-icons/fa'
import Table from '../table'
import {
  BuscarCliente,
  GetClienteProps
} from '@/service/getclientes/Getclientes'
import TableEmBaixa from '../table/tableAltaBaixa/tableEmBaixa'
import TableEmAlta from '../table/tableAltaBaixa/tableEmAlta'
const ClienteTable = () => {
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
  const handleEmAltaClick = () => {
    setClassificacaoSelecionada('EM_ALTA')
  }

  const handleEmBaixaClick = () => {
    setClassificacaoSelecionada('EM_BAIXA')
  }

  const clientesFiltrados = clientes?.filter(item => {
    if (
      classificacaoSelecionada === 'EM_ALTA' &&
      item.classificacao === 'EM_ALTA'
    ) {
      return true
    }
    if (
      classificacaoSelecionada === 'EM_BAIXA' &&
      item.classificacao === 'EM_BAIXA'
    ) {
      return true
    }
    return false
  })
  console.log(clientesFiltrados)

  return (
    <S.DivTable>
      <S.Main>
        <S.Divicon>
          <S.Title>
            <FaUnderline size={25} />
          </S.Title>
          <S.Title>Clientes</S.Title>
        </S.Divicon>
        <S.DivButton>
          <S.ButtonTable onClick={handleEmAltaClick}>Em Alta</S.ButtonTable>
          <S.ButtonTable onClick={handleEmBaixaClick}>Em Baixa</S.ButtonTable>
        </S.DivButton>
      </S.Main>
      {classificacaoSelecionada === 'EM_BAIXA' ? (
        <TableEmBaixa />
      ) : classificacaoSelecionada === 'EM_ALTA' ? (
        <TableEmAlta />
      ) : (
        <Table
          id="Id"
          produto="Cliente"
          percentual="Percentual"
          showIcon={true}
          showStatus={false}
          type="clientes"
        />
      )}
    </S.DivTable>
  )
}

export default ClienteTable
