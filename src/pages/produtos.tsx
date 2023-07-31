import Navbar from '@/components/navbar'
import * as S from '../assets/styles/global-styles'
import Header from '@/components/header/header'
import Input from '@/components/input'
import TableAll from '@/components/tableAll/TableAll'
import { useEffect, useState } from 'react'
import {
  GetProduct,
  GetProductPropsAll
} from '@/service/pagination/PaginationAll'

export default function Product() {
  const [currentPage, setCurrentPage] = useState(1)
  const [totalpages, setTotalPages] = useState(0)
  const [page, setPage] = useState(1)
  const [startpage, setStartpage] = useState(1)
  const [products, setProducts] = useState<GetProductPropsAll['content']>([])
  const [query, setQuery] = useState('')
  const [table, setTable] = useState(products)
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const result = await GetProduct(query, currentPage)
        console.log(result.content)
        setProducts(result.content)
        setTotalPages(result.totalPages)
      } catch (error) {}
    }

    fetchProducts()
  }, [currentPage, query])
  console.log(query)

  const handlePrevClick = () => {
    setCurrentPage(prevPage => Math.max(prevPage - 1, 1))
  }

  const handleNextClick = () => {
    setCurrentPage(prevPage => Math.min(prevPage + 1, totalpages))
  }
  const handleFilterChange = (filterValue: string) => {
    setQuery(filterValue)
    setCurrentPage(1)
  }
  return (
    <S.BoxGraphics>
      <Navbar />
      <S.Center>
        <Header />
        <Input title="Produto" onFilterChange={handleFilterChange} />
        <div className="divproduto">
          <TableAll
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalpages={totalpages}
            products={products}
            setProducts={setProducts}
            query={query}
            handlePrevClick={handlePrevClick}
            handleNextClick={handleNextClick}
          />
        </div>
        <S.ContainerPage>
          <S.ButtonPage onClick={handlePrevClick}>&lt; Voltar</S.ButtonPage>
          <span>Página {currentPage}</span>
          <S.ButtonPage onClick={handleNextClick}>
            Próxima Página &gt;
          </S.ButtonPage>
          <h1>Total De: {totalpages}</h1>
        </S.ContainerPage>
      </S.Center>
    </S.BoxGraphics>
  )
}
