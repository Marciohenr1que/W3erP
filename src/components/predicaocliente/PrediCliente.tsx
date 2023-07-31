import {
  GetPredictionDataClient,
  GetPreditionDataClient
} from '@/service/predicao/Getpredicacao'
import * as S from '../../assets/styles/global-styles'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { BsTelephone } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'

export default function DetailsBoard() {
  const { id } = useParams()
  const [clienteData, setClienteData] =
    useState<GetPredictionDataClient | null>(null)

  useEffect(() => {
    const fetchClienteData = async () => {
      try {
        const data = await GetPreditionDataClient(id!)
        console.log(data)
        setClienteData(data)
      } catch (error) {
        console.error(error)
      }
    }

    fetchClienteData()
  }, [id])
  return (
    <S.DetailsClient>
      <S.DivCliente>
        <h1>{clienteData?.nome}</h1>
        <S.Endereco>
          <h6>
            <BsTelephone
              style={{
                fontSize: '20px',
                marginRight: '8px',
                verticalAlign: 'middle'
              }}
            />
            {clienteData?.telefone}
          </h6>
          <AiOutlineMail
            style={{
              fontSize: '20px',
              marginLeft: '25px',
              marginRight: '10px',
              verticalAlign: 'middle'
            }}
          />
          <h6>{clienteData?.email}</h6>
        </S.Endereco>
      </S.DivCliente>
    </S.DetailsClient>
  )
}
