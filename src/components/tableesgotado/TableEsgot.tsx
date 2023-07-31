import { useParams } from 'react-router-dom'
import * as S from '../../assets/styles/global-styles'
import { useEffect, useState } from 'react'
import {
  GetEsgotadoProps,
  GetPreditionEsgotado
} from '@/service/predicao/Getpredicacao'
import { AiOutlineCheckCircle } from 'react-icons/ai'

export default function TableEsgotado() {
  const { id } = useParams()
  const [esgotandoData, setHistoricData] = useState<GetEsgotadoProps | null>(
    null
  )

  useEffect(() => {
    const fetchEsgotandoData = async () => {
      try {
        const data = await GetPreditionEsgotado(id!)
        console.log(data)
        setHistoricData(data)
      } catch (error) {
        console.error(error)
      }
    }

    fetchEsgotandoData()
  }, [id])

  return (
    <S.TableWrapperProximaCompra>
      <S.TableHeadProximaCompra>
        <S.TableItemProximaCompra>ID</S.TableItemProximaCompra>
        <S.TableItemProximaCompra>Produto</S.TableItemProximaCompra>
        <S.TableItemProximaCompra>Últ.Compra</S.TableItemProximaCompra>
        <S.TableItemProximaCompra>Próx.Compra</S.TableItemProximaCompra>
        <S.TableItemProximaCompra>Qtd.</S.TableItemProximaCompra>
        <S.TableItemProximaCompra>Dar Baixa</S.TableItemProximaCompra>
      </S.TableHeadProximaCompra>
      {esgotandoData?.content.map(item => (
        <S.TableBodyProximaCompra key={item.id}>
          <S.TableItemProximaCompra>{item.id}</S.TableItemProximaCompra>
          <S.TableItemProximaCompra>{item.nome}</S.TableItemProximaCompra>
          <S.TableItemProximaCompra>
            {item.ultimaCompra}
          </S.TableItemProximaCompra>
          <S.TableItemProximaCompra>
            {item.proximaCompra}
          </S.TableItemProximaCompra>
          <S.TableItemProximaCompra>{item.quantidade}</S.TableItemProximaCompra>
          <S.TableItemProximaCompra>
            <button>
              <AiOutlineCheckCircle />
            </button>
          </S.TableItemProximaCompra>
        </S.TableBodyProximaCompra>
      ))}
    </S.TableWrapperProximaCompra>
  )
}
