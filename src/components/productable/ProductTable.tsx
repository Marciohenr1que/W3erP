import { useEffect, useState } from 'react'
import * as S from '../../assets/styles/global-styles'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { RiShoppingBasketLine } from 'react-icons/ri'
import Table from '../table'
import { BuscarProduto } from '@/service/getproduct'
import { GetProductProps } from '@/service/getproduct'
import TableEmBaixa from '../table/tableAltaBaixa/tableEmBaixa'
import TableEmAlta from '../table/tableAltaBaixa/tableEmAlta'

export default function ProductTable() {
  const [produtos, setProdutos] = useState<GetProductProps[]>([])
  const [classificacaoSelecionada, setClassificacaoSelecionada] = useState('')
  useEffect(() => {
    const fetchData = async () => {
      try {
        const produtoData = await BuscarProduto()
        setProdutos(produtoData.content)
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }, [])
  const handleEmAltaClick = () => {
    setClassificacaoSelecionada('EM_ALTA')
  }

  const handleEmBaixaClick = () => {
    setClassificacaoSelecionada('EM_BAIXA')
  }

  return (
    <S.DivTable>
      <S.Main>
        <S.Divicon>
          <S.Title>
            <RiShoppingBasketLine size={25} />
          </S.Title>
          <S.Title>Produtos</S.Title>
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
