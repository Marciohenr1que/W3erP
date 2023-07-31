import Header from '@/components/header/header'
import Navbar from '@/components/navbar'
import Graphics from '@/components/quadrodashboard'
import * as S from '../assets/styles/global-styles'
import ProductTable from '@/components/productable/ProductTable'
import ClienteTable from '@/components/cliente'

export default function Dashboard() {
  return (
    <S.BoxGraphics>
      <Navbar />
      <S.Center>
        <Header />
        <Graphics />
        <S.Division>
          <ProductTable />
          <ClienteTable />
        </S.Division>
      </S.Center>
    </S.BoxGraphics>
  )
}
