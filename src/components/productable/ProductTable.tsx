import { useEffect, useState } from 'react'
import * as S from '../../assets/styles/global-styles'
import Table from '../table'
import { BuscarProduto } from '@/service/getproduct'
import { GetProductProps } from '@/service/getproduct'
import TableEmBaixa from '../table/tableAltaBaixa/tableEmBaixa'
import TableEmAlta from '../table/tableAltaBaixa/tableEmAlta'

export default function ProductTable() {
  const [produtos, setProdutos] = useState<GetProductProps[]>([])
  const [classificacaoSelecionada, setClassificacaoSelecionada] = useState('')
  const [classificacao, setClassificacao] = useState('')
  const [isClicked, setIsClicked] = useState(false)
  const [isClickedbaixa, setIsClickedbaixa] = useState(false)
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
    setIsClicked(true)
    setIsClickedbaixa(false)
    setClassificacaoSelecionada('EM_ALTA')
  }

  const handleEmBaixaClickbaixa = () => {
    setIsClickedbaixa(true)
    setIsClicked(false)
    setClassificacao('EM_BAIXA')
  }

  return (
    <S.DivTable>
      <S.Main>
        <S.Divicon>
          <S.Title>
            <div className="fundoicone">
              <S.IconeEstilizado />
            </div>
          </S.Title>
          <S.Title>Produtos</S.Title>
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
      {classificacao === 'EM_BAIXA' ? (
        <TableEmBaixa />
      ) : classificacaoSelecionada === 'EM_ALTA' ? (
        <TableEmAlta />
      ) : (
        <Table
          id="Id"
          produto="Produto"
          percentual="Percentual"
          showIcon={true}
          showStatus={false}
          type="produtos"
        />
      )}
    </S.DivTable>
  )
}
