import { useEffect, useState } from 'react'
import * as S from '../../assets/styles/global-styles'
import {
  GetProductClient,
  GetProductResumo,
  GetProductSummary
} from '@/service/Getprodutoresumo/ProducteclienteResume'
import { useParams } from 'react-router-dom'

export default function ProductMedia() {
  const [productData, setProductData] = useState<GetProductResumo | null>(null)
  const { id } = useParams()

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const productSummary = await GetProductSummary(id!)
        console.log(productSummary)
        setProductData(productSummary)
      } catch (error) {}
    }
    fetchProductData()
  }, [id])
  return (
    <div>
      <S.CustomDiv>
        <h1>{productData?.nome}</h1>
        <S.ContainerMedia>
          <S.DivCard1>
            <S.Divh4>Média 120 dias</S.Divh4>
            <h1>{productData?.media120Dias}</h1>
          </S.DivCard1>
          <S.DemaisCards>
            <h4>Últimos 30 dias</h4>
            <div className="ultimo30dias">
              <p className="teste">{productData?.ultimos30Dias}</p>
              <div>
                <p className="greenumber">
                  {productData?.percentualUltimos30Dias}
                </p>
              </div>
            </div>
          </S.DemaisCards>
          <S.DemaisCards>
            <h4>Últimos 60 dias</h4>
            <p className="teste">{productData?.ultimos60Dias}</p>
          </S.DemaisCards>
          <S.DemaisCards>
            <h4>Últimos 90 dias</h4>
            <p className="teste">{productData?.ultimos90Dias}</p>
          </S.DemaisCards>
          <S.DemaisCards>
            <h4>Últimos 120 dias</h4>
            <p className="teste">{productData?.ultimos120Dias}</p>
          </S.DemaisCards>
        </S.ContainerMedia>
      </S.CustomDiv>
    </div>
  )
}
