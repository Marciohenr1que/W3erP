import { MdKeyboardArrowRight } from 'react-icons/md'
import * as S from '../../assets/styles/global-styles'
import { GetProductPropsAll } from '@/service/pagination/PaginationAll'

export default function TableAll({
  products,
  currentPage,
  setCurrentPage,
  handlePrevClick,
  handleNextClick,
  totalpages,
  setProducts,
  query
}: {
  products: GetProductPropsAll['content']
  currentPage: number
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
  setProducts: React.Dispatch<
    React.SetStateAction<GetProductPropsAll['content']>
  >
  handlePrevClick: () => void
  handleNextClick: () => void
  totalpages: number
  query: string
}) {
  return (
    <S.Table>
      <thead>
        <tr style={{ backgroundColor: '#001c98' }}>
          <S.Th className="testeleft">id</S.Th>
          <S.Th>Produtos</S.Th>
          <S.Th>Percentual</S.Th>
          <S.Th></S.Th>
          <S.Th style={{ backgroundColor: '#001c98' }}></S.Th>
          <S.Th
            className="testeright"
            style={{ backgroundColor: '#001c98' }}
          ></S.Th>
        </tr>
      </thead>
      <tbody className="tbody">
        {products.map(product => (
          <tr key={product.id}>
            <S.Td>{product.id}</S.Td>
            <S.Td>{product.nome}</S.Td>
            <S.Td>{product.percentual} %</S.Td>
            <S.Td>
              <MdKeyboardArrowRight />
            </S.Td>
          </tr>
        ))}
      </tbody>
    </S.Table>
  )
}
