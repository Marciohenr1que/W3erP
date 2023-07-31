import * as S from '../assets/styles/global-styles'
import Navbar from '@/components/navbar'
import Header from '@/components/header/header'
import TablePredict from '@/components/tablepredict/Tablepredict'
import DetailsBoard from '@/components/predicaocliente/PrediCliente'
import TableEsgotado from '@/components/tableesgotado/TableEsgot'
import { IoMdArrowRoundBack, IoMdTime } from 'react-icons/io'
import { HiOutlinePresentationChartLine } from 'react-icons/hi'

export default function DetailsCard() {
  return (
    <S.BoxGraphics>
      <Navbar />
      <S.Center>
        <Header />
        <S.StyledLink to="/previsoes">
          <IoMdArrowRoundBack /> Voltar
        </S.StyledLink>
        <DetailsBoard />
        <div>
          <S.FlexTable>
            <S.TitleTabela>
              <IoMdTime style={{ marginRight: '10px' }} />
              Historico
            </S.TitleTabela>
            <S.TitleTabela2>
              <HiOutlinePresentationChartLine style={{ marginRight: '10px' }} />
              Produtos esgotando
            </S.TitleTabela2>
          </S.FlexTable>
          <S.Division>
            <TablePredict />
            <TableEsgotado />
          </S.Division>
        </div>
      </S.Center>
    </S.BoxGraphics>
  )
}
