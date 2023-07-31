import { useState } from 'react'
import * as S from '../../assets/styles/global-styles'
type TitleProps = {
  title: string
  onFilterChange: (filterValue: string) => void
}
export default function Input({ title, onFilterChange }: TitleProps) {
  const [filterValue, setFilterValue] = useState('')
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setFilterValue(value)
    onFilterChange(value) // o valor do filtro que vai para produtos
  }
  return (
    <>
      <S.DivTitle>
        <h1>{title}</h1>
      </S.DivTitle>
      <S.InputContainer>
        <S.SearchInput
          type="text"
          placeholder="Pesquise uma palavra-chave"
          value={filterValue}
          onChange={handleInputChange}
        />
        <S.SearchIcon size={20} />
      </S.InputContainer>
    </>
  )
}
