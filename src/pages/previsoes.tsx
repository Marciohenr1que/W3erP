import Navbar from '@/components/navbar'
import * as S from '../assets/styles/global-styles'
import Header from '@/components/header/header'
import Input from '@/components/input'
import { useState, useEffect } from 'react'
import { GetPreditionCard } from '@/service/predicao/Getpredicacao'
import { useNavigate } from 'react-router-dom'
import { TbPointFilled } from 'react-icons/tb'

//estruturas dos dados
type Produto = {
  id: number
  nome: string
  proximaCompra: string
}

type HotelData = {
  id: number
  nome: string
  produtos: Produto[]
}

export default function Prevision() {
  const navigate = useNavigate()
  //armazena os dados da api
  const [predictionData, setPredictionData] = useState<HotelData[]>([])
  //ligando para api
  useEffect(() => {
    const fetchData = async () => {
      try {
        const prediction = await GetPreditionCard() //obter os dados
        setPredictionData(prediction ? prediction.content : [])
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }, [])
  return (
    <S.BoxGraphics>
      <Navbar />
      <S.Center>
        <Header />
        <Input title="Predições" />
        <S.Boxcard>
          {predictionData.map(hotelData => (
            <S.CardContainer key={hotelData.id}>
              <div onClick={() => navigate(`/cardpredicoes/${hotelData.id}`)}>
                <S.DivTitleCard>
                  <S.HotelIcon />
                  <div>
                    <S.TitlePredi>
                      {hotelData.nome.split(' ').slice(0, 2).join(' ')}
                    </S.TitlePredi>
                    <S.SubTitle>
                      <TbPointFilled />
                      Status
                    </S.SubTitle>
                  </div>
                </S.DivTitleCard>
                <S.DivCenterCard>
                  <S.ProductInfo>
                    <S.ProductTitle>Produto</S.ProductTitle>
                    {hotelData.produtos.map(produto => (
                      <p key={produto.id}>
                        {produto.nome.split(' ').slice(0, 2).join(' ')}
                      </p>
                    ))}
                  </S.ProductInfo>
                  <S.DateInfo>
                    <S.DateTitle>Próx compra</S.DateTitle>
                    {hotelData.produtos.map(produto => (
                      <S.Data key={produto.id}>{produto.proximaCompra}</S.Data>
                    ))}
                  </S.DateInfo>
                </S.DivCenterCard>
              </div>
            </S.CardContainer>
          ))}
        </S.Boxcard>
      </S.Center>
    </S.BoxGraphics>
  )
}
