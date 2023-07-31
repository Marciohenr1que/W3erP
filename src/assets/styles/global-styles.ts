import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'
export default createGlobalStyle`
  :root {
    --dark: #313131;
  }

  * {
    margin: 0;
    padding: 0;
  }

  *, ::after, ::before {
    box-sizing: border-box;
  }

  html {
    font-size: 13px;
  }

  body, input, select, textarea {
    font-size: 1rem;
    color: var(--dark);
  }

`
export const Container = styled.div`
  display: flex;
  height: 100vh;
`
export const FieldForm = styled.main`
  display: flex;
  align-items: center;
  width: 50%;
`
export const FieldImg = styled.section`
  width: 50%;
  height: auto;
  background-color: #001c98;
  position: relative;
`
export const Form = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0.7em;
`
export const Img = styled.img`
  width: 100%;
  height: 100%;
`
export const ImgHands = styled.img`
  position: absolute;
  bottom: 21.8%;
  left: 6.8%;
  width: 8%;
  height: 6.5%;
`
export const ImgGraphic = styled.img`
  position: absolute;
  top: 24.5%;
  right: 6.7%;
  width: 8%;
  height: 5.6%;
`
export const Legend = styled.legend`
  font-family: sans-serif;
  font-size: 0.9em;
  margin-left: 0.5em;
`
export const IconWrapper = styled.div`
  position: absolute;
  right: 0.5em;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
`
export const Fieldset = styled.fieldset`
  width: 44%;
  border: 0.125em solid #e0e0e0;
  border-radius: 0.5em;
  transition: border-color 0.3s ease;
  overflow: hidden;
  &:focus-within {
    border-color: #00c247;
    ${Legend} {
      color: #00c247;
    }
    ${IconWrapper} {
      color: #00c247;
    }
  }
`
export const InputWrapper = styled.div`
  position: relative;
`
export const Input = styled.input`
  outline: none;
  border: none;
  padding: 0.3em;
  width: 100%;
`
export const Box = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 0.9em;
`
export const Span = styled.span`
  font-family: 'Poppins', sans-serif;
  font-size: 0.8em;
  margin-left: 3.7em;
`
export const Checkbox = styled.input`
  margin-right: 1.3em;
`
export const Label = styled.label`
  font-family: 'Poppins', sans-serif;
  font-size: 0.9em;
  font-weight: bold;
  margin-left: -2em;
`
export const Heading2 = styled.h2`
  font-family: 'Sora', sans-serif;
  margin-left: -4em;
  @media screen and (max-width: 767px) {
    margin: 0 auto;
  }
`
export const Paragraph = styled.p`
  margin-left: -11em;
  font-family: 'Sora', sans-serif;
  @media screen and (max-width: 767px) {
    margin: 0 auto;
  }
`
export const Button = styled.button`
  font-family: 'Poppins', sans-serif;
  padding: 0.8em;
  border: none;
  color: #fff;
  background-color: #001c98;
  border-radius: 0.5em;
  width: 44%;
  margin-top: 0.4em;
`
export const NavbarContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 220px;
  height: 100vh;
  flex-direction: column;
  background-color: #001c98;
`

export const Logo = styled.img`
  padding: 16px;
  margin-top: 50px;
`

export const NavList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-top: 50px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`

export const NavItem = styled.li`
  margin-bottom: 8px;
`

export const NavLink = styled.a`
  display: block;
  padding: 8px;
  text-decoration: none;
  color: white;
  width: 220px;
  font-size: 19px;
  margin-bottom: 10px;

  &:hover {
    background-color: #7682c1;
  }
`
export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 16px;
  background-color: #f0f0f0;
`

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
`

export const IconContainer = styled.div`
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: #001c98;
  border-radius: 50%;
`
export const UserDetails = styled.div`
  display: flex;
  flex-direction: column;
`

export const UserName = styled.span`
  font-weight: bold;
`

export const UserEmail = styled.span`
  color: gray;
`

export const DropdownContainer = styled.div`
  position: relative;
  cursor: pointer;
`

export const DropdownLink = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #333;
  margin-left: 16px;
  padding: 8px;
  cursor: pointer;
  svg {
    margin-right: 4px;
  }
`
export const BoxGraphics = styled.div`
  display: flex;
  height: 100vh;
`
export const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  font-size: 26px;
  margin-left: 30px;
`
export const Center = styled.div`
  flex-grow: 1;
  .divproduto {
    width: 90%;
    display: flex;
    margin: 0 auto;
    justify-content: center;
  }
`
export const Centergraphics = styled.div`
  background-color: #001c98;
  color: white;
  width: 95%;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 20px;
  border-radius: 20px;
`
export const Num = styled.div`
  background-color: #02156a;
  width: 22%;
  display: flex;
  gap: 30px;
  padding: 10px;
  border-radius: 10px;
`

export const GraphicsCenter = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 30px;
`

export const Porcentagem = styled.div`
  background-color: #000e4d;
  border-radius: 100%;
  padding: 14px;
  margin-left: 8px;
  border: 4px solid #796ce0;
  box-sizing: border-box;
  position: relative;
  font-size: 24px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Positive = styled.div`
  border-radius: 20px;
  color: white;
  background-color: #00c247;
  margin-left: 10px;
  width: 70%;
  padding: 2px;
`
export const Negative = styled.div`
  border-radius: 30px;
  color: white;
  background-color: #ff3333;
  padding: 0 6px 0 6px;
  margin-left: 10px;
  width: 70%;
  padding: 2px;
`

export const Title = styled.span`
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`
export const Results = styled.div`
  font-size: 15px;
  && span {
    font-size: 25px;
  }
`

export const ButtonTable = styled.button<{ isClicked: boolean }>`
  background-color: ${props => (props.isClicked ? 'green' : '#ccc')};
  color: ${props => (props.isClicked ? '#ccc' : 'white')};
  padding: 8px 16px;
  border: none;
  cursor: pointer;
  border-radius: 10px;
`
export const ButtonTableBaixa = styled.button<{ isClickedbaixa: boolean }>`
  background-color: ${props => (props.isClickedbaixa ? 'red' : '#ccc')};
  color: ${props => (props.isClickedbaixa ? '#ccc' : 'white')};
  padding: 8px 16px;
  border: none;
  cursor: pointer;
  border-radius: 10px;
`

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  background-color: #ccc;
  margin-top: 20px;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;

  .tbody {
    text-align: center;
  }
  .tr {
    background-color: #001c98;
    color: white;
  }
  .testeleft {
    border-top-left-radius: 20px;
  }
  .testeright {
    border-top-right-radius: 20px;
  }
`

export const Th = styled.th`
  color: white;
  padding: 8px;
`

export const Td = styled.td`
  padding: 8px;
  border-bottom: 1px solid lightgray;
  .green {
    padding: 6px 10px 6px 10px;
    background-color: #d9fee6;
    color: #00c247;
    border-radius: 6px;
  }
  .red {
    padding: 6px;
    background-color: #ffe1e1;
    color: #ff3333;
    border-radius: 6px;
  }
  .neutro {
    padding: 6px;
    background-color: #ccc;
    color: black;
    border-radius: 6px;
  }
`
export const Division = styled.div`
  display: flex;
  margin-top: 0px;
  padding: 20px;
  gap: 20px;
`
export const Main = styled.div`
  background-color: white;
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 8px;
`
export const DivButton = styled.div``
export const DivTable = styled.div`
  padding: 20px;
  width: 49%;
`
export const Divicon = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`
export const DivTitle = styled.div`
  margin-top: 100px;
  margin-left: 40px;
`
export const InputContainer = styled.div`
  position: relative;
  width: 300px;
  margin-top: 20px;
  margin-left: 40px;
`

export const SearchInput = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
`
import { FaSearch } from 'react-icons/fa'
export const SearchIcon = styled(FaSearch)`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  color: blue;
  cursor: pointer;
`
export const CardContainer = styled.div`
  width: 24%;
  border-radius: 5px;
  background-color: white;
  padding: 8px;
`

export const TitlePredi = styled.h3`
  margin-bottom: 5px;
`

export const SubTitle = styled.p`
  color: green;
  margin-bottom: 10px;
`

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  && p {
    color: #424242;
    font-weight: bold;
  }
`

export const ProductTitle = styled.h3`
  margin-right: 5px;
  color: #796ce0;
  margin-bottom: 10px;
`

export const DateInfo = styled.div`
  display: flex;
  flex-direction: column;
`
export const Data = styled.div`
  text-align: right;
  color: #424242;
  font-weight: bold;
`
export const DateTitle = styled.h3`
  color: #796ce0;
  margin-bottom: 10px;
`
import { FaArrowRight } from 'react-icons/fa'
export const ArrowIcon = styled(FaArrowRight)`
  color: #888;
`
import { AiOutlineUser } from 'react-icons/ai'
import { Link } from 'react-router-dom'
export const HotelIcon = styled(AiOutlineUser)`
  font-size: 36px;
  padding: 5px;
  margin-bottom: 10px;
  background-color: #c5cfff;
  border-radius: 50%;
`

export const ArrowIconContainer = styled.div`
  display: flex;
  align-items: center;
`

export const CardsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`
export const DivTitleCard = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 15px;
`
export const Boxcard = styled.div`
  background-color: #ccc;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 10px;
  padding: 10px;
  justify-content: center;
  margin-top: 20px;
`
export const DivCenterCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
`
export const Thend = styled.th`
  border-top-right-radius: 20px;
`
export const CalendarDashboardStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  border-radius: 8px;
  width: 175px;
  padding: 4px;
  margin-bottom: 6px;

  span {
    font-weight: 400;
    font-size: 12px;
    color: green;
    margin: 0 3px;
  }

  select {
    font-weight: 600;
    font-size: 13px;
    color: blue;
    border: none;
    cursor: pointer;
  }

  option {
    font-size: 13px;
    font-weight: 400;
  }
`
export const Calendar = styled.div``

export const DetailsClient = styled.div`
  background-color: #001c98;
  color: white;
  width: 95%;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 20px;
  border-radius: 20px;
  margin-top: 50px;
  font-family: sans-serif;
`
export const Endereco = styled.div`
  display: flex;
  font-size: 30px;
  padding: 20px 0px 0px 0px;
`
export const FlexTable = styled.div`
  font-size: 30px;
  display: flex;
  justify-content: space-around;
  margin-top: 40px;
`
export const TableWrapper = styled.table`
  width: 50%;
  border-collapse: collapse;
  margin: 20px 0;
`

export const TableHead = styled.thead`
  background-color: blue;
  color: white;
  font-size: 15px;
  display: flex;
  margin: 0 auto;
  padding: 10px;
  gap: 20px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
`

export const TableBody = styled.tbody`
  background-color: gray;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  &:nth-child(odd) {
    background-color: lightgray;
  }
`

export const TableItem = styled.th`
  flex-basis: 100%;
  text-align: center;
  max-width: 100px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  && button {
    border: none;
    background: none;
    padding: 0;
    outline: none;
    cursor: pointer;
  }
`
export const TableWrapperProximaCompra = styled.table`
  width: 50%;
  border-collapse: collapse;
  margin: 20px 0;
`

export const TableHeadProximaCompra = styled.thead`
  background-color: blue;
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  font-size: 15px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
`

export const TableBodyProximaCompra = styled.div`
  background-color: gray;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  &:nth-child(odd) {
    background-color: lightgray;
  }
`

export const TableItemProximaCompra = styled.th`
  flex-basis: 100%;
  text-align: center;
  max-width: 100px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  && button {
    border: none;
    background: none;
    padding: 0;
    outline: none;
    cursor: pointer;
  }
`
export const TitleTabela2 = styled.h4`
  margin-left: -100px;
  color: #ff3333;
`
export const TitleTabela = styled.h4`
  margin-left: -200px;
  color: #212121;
`
export const DivCliente = styled.div``
export const CustomDiv = styled.div`
  width: 95%;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 20px;
  border-radius: 20px;
  margin-top: 70px;
  font-family: sans-serif;
  && h1 {
    margin-bottom: 20px;
  }
`
export const ContainerMedia = styled.div`
  display: flex;
  gap: 80px;
`
export const DivCard1 = styled.div`
  background-color: #001c98;
  color: white;
  padding: 20px 70px 10px 10px;
  border-radius: 15px;
`
export const Divh4 = styled.h4`
  font-size: 20px;
  white-space: nowrap;
  margin-bottom: 10px;
  color: white;
`
export const DemaisCards = styled.div`
  padding: 20px 10px 10px 10px;
  & h4 {
    white-space: nowrap;
    margin-bottom: 10px;
    font-size: 15px;
    color: #212121;
  }
  .ultimo30dias {
    display: flex;
    gap: 20px;
  }
  .greenumber {
    background-color: #00c247;
    color: white;
    padding: 2px 10px 0px 10px;
    border-radius: 10px;
  }
  .teste {
    font-size: 25px;
    color: #001c98;
  }
`
export const StyledTableBaixa = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  overflow: hidden;

  & th {
    background-color: #001c98;
    color: white;
    padding: 10px;
    text-align: left;
  }

  & td {
    border: 1px solid #ccc;
    padding: 10px;
  }
`

export const TableTitleBaixa = styled.h1`
  margin: 20px 0;
`
export const TableTitleAlta = styled.h1`
  margin: 20px 0;
`

export const StyledTableAlta = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  overflow: hidden;

  & th {
    background-color: #001c98;
    color: white;
    padding: 10px;
    text-align: left;
  }

  & td {
    border: 1px solid #ccc;
    padding: 10px;
  }
`
export const TabledivBaixa = styled.div`
  width: 50%;
`
export const TableDivAlta = styled.div`
  width: 50%;
`
export const ContainerPage = styled.div`
  display: flex;
  flex-direction: end;
  align-items: center;
  justify-content: center;
  && span {
    font-size: 25px;
  }
`

export const ButtonPage = styled.button`
  padding: 10px 10px;
  margin: 5px;
  background-color: #001c98;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`
export const TableContainerAll = styled.div`
  width: 95%;
  margin: 0 auto;
  border: 1px solid #ccc;
`

export const TableHeaderAll = styled.div`
  display: flex;
  background-color: #001c98;
  color: white;
  font-weight: bold;
  padding: 8px;
`

export const TableCell = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border-bottom: 1px solid #ccc;

  &:last-child {
    border-right: none;
  }
`

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;
`

export const PaginationButton = styled.button`
  background-color: #001c98;
  color: white;
  border: none;
  padding: 8px 16px;
  margin: 0 4px;
  cursor: pointer;

  &:hover {
    background-color: #0027d9;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`
