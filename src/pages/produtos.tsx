import Navbar from '@/components/navbar'
import * as S from '../assets/styles/global-styles'
import Header from '@/components/header/header'
import Input from '@/components/input'
import Table from '@/components/table'
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

  const handlePrevClick = () => {
    setCurrentPage(prevPage => {
      const newPage = Math.max(prevPage - 1, 1)
      if (newPage <= startpage) {
        setStartpage(prevStartPage => Math.max(prevStartPage - 1, 1))
      }
      return newPage
    })
  }

  const handleNextClick = () => {
    setCurrentPage(prevPage => {
      const newPage = Math.min(prevPage + 1, totalpages)
      if (newPage >= startpage + 3) {
        setStartpage(prevStartPage =>
          Math.min(prevStartPage + 1, totalpages - 3)
        )
      }
      return newPage
    })
  }

  return (
    <S.BoxGraphics>
      <Navbar />
      <S.Center>
        <Header />
        <Input title="Produto" />
        <div className="divproduto">
          <Table
            id="Id"
            produto="Produtos"
            status={true}
            showStatus={true}
            percentual="Percentual"
            type={'produtos'}
          />
        </div>
        <div>
          <span>
            {currentPage} e {totalpages}
          </span>
        </div>
        <S.ContainerPage>
          <S.ButtonPage onClick={handlePrevClick}>&lt; Voltar</S.ButtonPage>
          <span>Página {currentPage}</span>
          <S.ButtonPage onClick={handleNextClick}>
            Próxima Página &gt;
          </S.ButtonPage>
        </S.ContainerPage>
      </S.Center>
    </S.BoxGraphics>
  )
}
