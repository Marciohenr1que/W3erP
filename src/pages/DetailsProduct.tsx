import Navbar from '@/components/navbar'
import * as S from '../assets/styles/global-styles'
import Header from '@/components/header/header'
import ProductMedia from '@/components/produtoeclientemedia/produtomedia'
import TableBaixa from '@/components/tablebaixa/Tablebaixa'
import TableAlta from '@/components/table/tablealta/TableAlta'

export default function DetailsProduct() {
  return (
    <S.BoxGraphics>
      <Navbar />
      <S.Center>
        <Header />
        <ProductMedia />
        <S.Division>
          <TableBaixa title="Clientes em Baixa" />
          <TableAlta title="Clientes em Alta" />
        </S.Division>
      </S.Center>
    </S.BoxGraphics>
  )
}
