import * as S from '../../assets/styles/global-styles'
import { BiPieChartAlt } from 'react-icons/bi'
import { AiOutlineLineChart } from 'react-icons/ai'
import { HiOutlinePresentationChartLine } from 'react-icons/hi'
const Navbar = () => {
  return (
    <S.NavbarContainer>
      <S.Logo src="/src/assets/image/logo.png" />
      <S.NavList>
        <S.NavItem>
          <S.NavLink href="/home">
            <BiPieChartAlt style={{ marginRight: '8px' }} />
            Dashboard
          </S.NavLink>
        </S.NavItem>
        <S.NavItem>
          <S.NavLink href="/previsoes">
            <AiOutlineLineChart style={{ marginRight: '10px' }} />
            Predicões
          </S.NavLink>
        </S.NavItem>
        <S.NavItem>
          <S.NavLink href="/product">
            <HiOutlinePresentationChartLine style={{ marginRight: '10px' }} />
            Produtos
          </S.NavLink>
        </S.NavItem>
      </S.NavList>
      <S.Logo src="/src/assets/image/faleconosco2.png" />
    </S.NavbarContainer>
  )
}

export default Navbar
