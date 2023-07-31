import Navbar from '@/components/navbar'
import * as S from '../assets/styles/global-styles'
import Header from '@/components/header/header'
import ProductMedia from '@/components/produtoeclientemedia/produtomedia'
import TableBaixa from '@/components/tablebaixa/Tablebaixa'
import TableAlta from '@/components/table/tablealta/TableAlta'
import ClienteMedia from '@/components/produtoeclientemedia/Clientemedia'

export default function ClientDetails() {
  return (
    <S.BoxGraphics>
      <Navbar />
      <S.Center>
        <Header />
        <ClienteMedia />
        <S.Division>
          <TableBaixa title="Produtos em Baixa" />
          <TableAlta title="Produtos em Alta" />
        </S.Division>
      </S.Center>
    </S.BoxGraphics>
  )
}
