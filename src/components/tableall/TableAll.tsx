import * as S from '../../assets/styles/global-styles'

export default function TableAll() {
  return (
    <S.TableContainerAll>
      <S.TableHeaderAll>
        <S.TableCell>ID</S.TableCell>
        <S.TableCell>Produtos</S.TableCell>
        <S.TableCell>Status</S.TableCell>
        <S.TableCell>Percentual</S.TableCell>
      </S.TableHeaderAll>
      <div>
        <S.TableCell>id</S.TableCell>
        <S.TableCell>marcio</S.TableCell>
        <S.TableCell>status</S.TableCell>
        <S.TableCell>percentual</S.TableCell>
      </div>

      <S.PaginationContainer>
        <S.PaginationButton
        // onClick={handlePrevPage}
        // disabled={currentPage === 1}
        >
          &lt; Anterior
        </S.PaginationButton>
        <span>Página</span>
        <S.PaginationButton
        // onClick={handleNextPage}
        // disabled={currentPage === totalPages}
        >
          Próxima &gt;
        </S.PaginationButton>
      </S.PaginationContainer>
    </S.TableContainerAll>
  )
}
