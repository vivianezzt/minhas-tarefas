import { useDispatch, useSelector } from 'react-redux'
import FiltroCard from '../../components/FiltroCard'
import * as S from './styles'
import { RootRecucer } from '../../store'
import { alteraTermo } from '../../store/reducers/filtro'

export const BarraLateral = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootRecucer) => state.filtro)
  return (
    <S.Aside>
      <div>
        <S.Campo
          type="text"
          placeholder="Buscar"
          value={termo}
          onChange={(evento) => dispatch(alteraTermo(evento.target.value))}
        />
        <S.Filtros>
          <FiltroCard legenda="pendentes" contador={1} />
          <FiltroCard legenda="concluidas" contador={2} />
          <FiltroCard legenda="importantes" contador={3} />
          <FiltroCard legenda="urgentes" contador={4} />
          <FiltroCard legenda="normal" contador={5} />
          <FiltroCard legenda="todas" contador={6} />
        </S.Filtros>
      </div>
    </S.Aside>
  )
}
export default BarraLateral
