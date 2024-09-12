import FiltroCard from '../../components/FiltroCard'
import * as S from './styles'

export const BarraLateral = () => (
  <S.Aside>
    <div>
      <S.Campo type="text" placeholder="Buscar" />
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
export default BarraLateral
