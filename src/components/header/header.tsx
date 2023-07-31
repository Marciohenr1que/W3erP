import { useState } from 'react'
import * as S from '../../assets/styles/global-styles'
import { BiUser } from 'react-icons/bi'
import { RiArrowDropDownLine } from 'react-icons/ri'

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false)

  const handleLogout = () => {
    localStorage.removeItem('token')
    window.location.href = '/'
  }

  const handleDropdownClick = () => {
    // Inverte showDropdown para mostrar ou ocultar o dropdown
    setShowDropdown(!showDropdown)
  }
  const emailUsuario = localStorage.getItem('email')
  return (
    <S.HeaderContainer>
      <S.UserContainer>
        <S.IconContainer>
          <BiUser style={{ color: 'white', fontSize: '24px' }} />
        </S.IconContainer>
        <S.UserDetails>
          <S.UserName>marcio</S.UserName>
          <S.UserEmail>{emailUsuario}</S.UserEmail>
        </S.UserDetails>
      </S.UserContainer>
      <S.DropdownContainer onClick={handleDropdownClick}>
        {showDropdown ? (
          <>
            <RiArrowDropDownLine />
            <S.DropdownLink href="/" onClick={handleLogout}>
              Sair
            </S.DropdownLink>
          </>
        ) : (
          <RiArrowDropDownLine style={{ color: '#333', fontSize: '20px' }} />
        )}
      </S.DropdownContainer>
    </S.HeaderContainer>
  )
}

export default Header
