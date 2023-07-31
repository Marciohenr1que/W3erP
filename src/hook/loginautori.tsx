import { useNavigate } from 'react-router-dom'
import { ApiService } from '../service/baseurl/Baseurl'

export function useLogin() {
  const navigate = useNavigate()

  const handleLogin = async (email: string, senha: string) => {
    try {
      const loginURL = '/central/autenticacao/login'

      const loginData = {
        email,
        senha
      }

      const response = await ApiService.post(loginURL, loginData)
      const token = response.data.token

      localStorage.setItem('email', email)
      localStorage.setItem('token', token)

      console.log('Login bem-sucedido!')
      navigate('/home')
    } catch (error) {
      console.error('Erro ao fazer login:', error)
    }
  }

  return { handleLogin }
}
