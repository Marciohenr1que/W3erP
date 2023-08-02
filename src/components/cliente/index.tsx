import { useEffect, useState } from 'react'
import * as S from '../../assets/styles/global-styles'
import Table from '../table'
import {
  BuscarCliente,
  GetClienteProps
} from '@/service/getclientes/Getclientes'
import TableEmBaixa from '../table/tableAltaBaixa/tableEmBaixa'
import TableEmAlta from '../table/tableAltaBaixa/tableEmAlta'
import { BsPeople } from 'react-icons/bs'
const ClienteTable = () => {
  const [clientes, setClientes] = useState<GetClienteProps[] | null>(null)
  const [classificacaoSelecionada, setClassificacaoSelecionada] = useState('')
  const [isClicked, setIsClicked] = useState(false)
  const [isClickedbaixa, setIsClickedbaixa] = useState(false)

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
    setIsClicked(true)
    setIsClickedbaixa(false)
    setClassificacaoSelecionada('EM_ALTA')
  }

  const handleEmBaixaClickbaixa = () => {
    setIsClickedbaixa(true)
    setIsClicked(false)
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
            <div className="iconecliente">
              <S.IconeCliente />
            </div>
          </S.Title>
          <S.Title>Clientes</S.Title>
        </S.Divicon>
        <S.DivButton>
          <S.ButtonTable isClicked={isClicked} onClick={handleEmAltaClick}>
            Em Alta
          </S.ButtonTable>
          <S.ButtonTableBaixa
            isClickedbaixa={isClickedbaixa}
            onClick={handleEmBaixaClickbaixa}
          >
            Em Baixa
          </S.ButtonTableBaixa>
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
