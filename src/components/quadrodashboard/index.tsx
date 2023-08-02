import { GetDashBoard, GetSummary } from '@/service/dashboard/ResumeDash'
import * as S from '../../assets/styles/global-styles'
import { useState, useEffect } from 'react'
import { CalendarDashboard } from '../mostrarcalendario/Calendario'

export default function Graphics() {
  const [dashboardData, setDashboardData] = useState<GetDashBoard | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const summaryData = await GetSummary('dataInicio', 'dataFim')
        console.log(summaryData)
        setDashboardData(summaryData)
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }, [])

  return (
    <S.Centergraphics>
      <S.Title>
        <h3>Dashboard</h3>
        <CalendarDashboard
          setDate={function (date: Date): void {
            throw new Error('Function not implemented.')
          }}
        />
      </S.Title>
      {dashboardData && (
        <S.GraphicsCenter>
          <S.Num>
            <S.Porcentagem>
              {dashboardData.percentualTotalProdutosAlta}%
            </S.Porcentagem>

            <S.Results>
              <p>
                Total <S.BoldText>produtos</S.BoldText> em alta
              </p>
              <div className="flexegreen">
                <h2>{dashboardData.quantidadeProdutosAlta}</h2>
                <div>
                  <S.Positive>
                    {dashboardData.percentualTotalProdutosAlta}%
                  </S.Positive>
                </div>
              </div>
            </S.Results>
          </S.Num>
          <S.Num>
            <S.Porcentagem>
              {dashboardData.percentualTotalProdutosBaixa}%
            </S.Porcentagem>
            <S.Results>
              <p>
                Total <S.BoldText>produtos</S.BoldText> em baixa
              </p>
              <div className="flexegreen">
                <h2>{dashboardData.quantidadeProdutosBaixa}</h2>
                <div>
                  <S.Negative>
                    {dashboardData.percentualVariacaoProdutosBaixa}%
                  </S.Negative>
                </div>
              </div>
            </S.Results>
          </S.Num>
          <S.Num>
            <S.Porcentagem>
              {dashboardData.percentualVariacaoClientesAlta}%
            </S.Porcentagem>
            <S.Results>
              <p>
                Total <S.BoldText>clientes</S.BoldText> em alta
              </p>
              <div className="flexegreen">
                <h2>{dashboardData.quantidadeClientesAlta}</h2>
                <div>
                  <S.Positive>
                    +{dashboardData.percentualVariacaoClientesAlta}%
                  </S.Positive>
                </div>
              </div>
            </S.Results>
          </S.Num>
          <S.Num>
            <S.Porcentagem>
              {dashboardData.percentualTotalClientesBaixa}%
            </S.Porcentagem>
            <S.Results>
              <p>
                Total <S.BoldText>clientes</S.BoldText> em baixa
              </p>
              <div className="flexegreen">
                <h2>{dashboardData.quantidadeClientesBaixa}</h2>
                <div>
                  <S.Negative>
                    {dashboardData.percentualVariacaoClientesBaixa}%
                  </S.Negative>
                </div>
              </div>
            </S.Results>
          </S.Num>
        </S.GraphicsCenter>
      )}
    </S.Centergraphics>
  )
}
