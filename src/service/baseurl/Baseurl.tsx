import axios from 'axios'

export const ApiService = axios.create({
  baseURL: 'https://api.predict.app.br'
})
