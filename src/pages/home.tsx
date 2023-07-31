import * as S from '../assets/styles/global-styles'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import imagemlogin from '../assets/image/imagemlogin.jpeg'
import { SetStateAction, useState } from 'react'
import { useLogin } from '@/hook/loginautori'
export default function Login() {
  const [passwordVisible, setPasswordVisible] = useState(false)
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const { handleLogin } = useLogin()
  const handleIconClick = () => {
    setPasswordVisible(!passwordVisible)
  }
  const handleEmailChange = (e: {
    target: { value: SetStateAction<string> }
  }) => {
    setEmail(e.target.value)
  }

  const handleSenhaChange = (e: {
    target: { value: SetStateAction<string> }
  }) => {
    setSenha(e.target.value)
  }

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    handleLogin(email, senha)
  }

  return (
    <>
      <S.Container>
        <S.FieldForm>
          <S.Form onSubmit={handleSubmit}>
            <S.Paragraph>Seja Bem Vindo!</S.Paragraph>
            <S.Heading2>Realize seu Login</S.Heading2>
            <S.Fieldset>
              <S.Legend>E-mail</S.Legend>
              <S.Input
                type="email"
                required
                value={email}
                onChange={handleEmailChange}
              />
            </S.Fieldset>
            <S.Fieldset>
              <S.Legend>Senha</S.Legend>
              <S.InputWrapper>
                <S.Input
                  type={passwordVisible ? 'text' : 'password'}
                  required
                  value={senha}
                  onChange={handleSenhaChange}
                />
                <S.IconWrapper onClick={handleIconClick}>
                  {passwordVisible ? (
                    <AiOutlineEye size={25} />
                  ) : (
                    <AiOutlineEyeInvisible size={25} />
                  )}
                </S.IconWrapper>
              </S.InputWrapper>
            </S.Fieldset>
            <S.Box>
              <S.Checkbox type="checkbox" />
              <S.Label>Lembrar-me</S.Label>
              <S.Span>Esqueci minha senha</S.Span>
            </S.Box>
            <S.Button type="submit">Entrar</S.Button>
          </S.Form>
        </S.FieldForm>
        <S.FieldImg>
          <S.Img src={imagemlogin} />
        </S.FieldImg>
      </S.Container>
    </>
  )
}
