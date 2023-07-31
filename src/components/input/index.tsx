import * as S from '../../assets/styles/global-styles'
type TitleProps = {
  title: string
}
export default function Input({ title }: TitleProps) {
  return (
    <>
      <S.DivTitle>
        <h1>{title}</h1>
      </S.DivTitle>
      <S.InputContainer>
        <S.SearchInput type="text" placeholder="Pesquise uma palavra-chave" />
        <S.SearchIcon size={20} />
      </S.InputContainer>
    </>
  )
}
