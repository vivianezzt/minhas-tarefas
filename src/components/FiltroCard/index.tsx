import { useDispatch } from 'react-redux'
import { alterarFiltro } from '../../store/reducers/filtro'
import * as S from './styles'
import * as enums from '../../utils/enums/Tarefas'

export type Props = {
  ativo?: boolean
  contador: number
  legenda: string
  criterio: 'prioridade' | 'status' | 'todas'
  valor?: enums.Prioridade | enums.Status
}

const FiltroCard = ({ ativo, contador, legenda, criterio, valor }: Props) => {
  const dispatch = useDispatch()
  const filtrar = () => {
    dispatch(
      alterarFiltro({
        criterio,
        valor
      })
    )
  }

  return (
    <S.Card ativo={ativo} onClick={filtrar}>
      <S.Contador>{contador}</S.Contador>
      <S.Label>{legenda}</S.Label>
    </S.Card>
  )
}
export default FiltroCard
