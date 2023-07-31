import {
  GetHistoricProps,
  GetPreditionHistoric
} from '@/service/predicao/Getpredicacao'
import * as S from '../../assets/styles/global-styles'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AiOutlineCheckCircle } from 'react-icons/ai'

export default function TablePredict() {
  const { id } = useParams()
  const [historicData, setHistoricData] = useState<GetHistoricProps | null>(
    null
  )

  useEffect(() => {
    const fetchHistoricData = async () => {
      try {
        const data = await GetPreditionHistoric(id!)
        console.log(data)
        setHistoricData(data)
      } catch (error) {
        console.error(error)
      }
    }

    fetchHistoricData()
  }, [id])

  return (
    <S.TableWrapper>
      <S.TableHead>
        <S.TableItem>ID</S.TableItem>
        <S.TableItem>Produto</S.TableItem>
        <S.TableItem>Última Compra</S.TableItem>
        <S.TableItem>Qtd.</S.TableItem>
        <S.TableItem>Dar Baixa</S.TableItem>
      </S.TableHead>
      {historicData?.content.map(item => (
        <S.TableBody key={item.id}>
          <S.TableItem>{item.id}</S.TableItem>
          <S.TableItem>{item.nome}</S.TableItem>
          <S.TableItem>{item.ultimaCompra}</S.TableItem>
          <S.TableItem>{item.quantidade}</S.TableItem>
          <S.TableItem>
            <button>
              <AiOutlineCheckCircle />
            </button>
          </S.TableItem>
        </S.TableBody>
      ))}
    </S.TableWrapper>
  )
}
